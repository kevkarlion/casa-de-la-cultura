"use client";

import { useState, useRef } from "react";
import { Upload, FileText, X, CheckCircle, Download } from "lucide-react";

/** Descarga el archivo - abrir URL directa */
function downloadFile(url: string, fileName: string) {
  window.open(url + (url.includes("?") ? "&" : "?") + "fl_attachment=true", "_blank");
}

interface Props {
  onUploadComplete?: (url: string, publicId: string) => void;
  folder?: string;
  accept?: string;
  maxSizeMB?: number;
  label?: string;
}

export default function DocumentUploader({
  onUploadComplete,
  folder = "cdc/documentos",
  accept = ".pdf,.jpg,.jpeg,.png,.webp",
  maxSizeMB = 10,
  label = "Arrastra un archivo o haz clic para seleccionar",
}: Props) {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Subir archivo al servidor (que lo envía a Cloudinary)
  async function handleFile(file: File) {
    // Validar tamaño
    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`El archivo debe ser menor a ${maxSizeMB}MB`);
      return;
    }

    setError(null);
    setUploading(true);
    setProgress(0);

    try {
      // Crear FormData y enviar al servidor
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", folder);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "/api/upload");

      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          setProgress(Math.round((e.loaded / e.total) * 100));
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          const resp = JSON.parse(xhr.responseText);
          setUploadedUrl(resp.url);
          onUploadComplete?.(resp.url, resp.publicId || "");
        } else {
          setError("Error al subir archivo");
        }
        setUploading(false);
      };

      xhr.onerror = () => {
        setError("Error al subir archivo");
        setUploading(false);
      };

      xhr.send(formData);
    } catch (err) {
      setError("Error al subir archivo. Intenta de nuevo.");
      console.error(err);
      setUploading(false);
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.[0]) {
      handleFile(e.target.files[0]);
    }
  }

  function reset() {
    setUploadedUrl(null);
    setProgress(0);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className="w-full">
      {uploadedUrl ? (
        <div className="flex flex-col gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-600 shrink-0" size={24} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-green-800">Archivo subido</p>
              <p className="text-xs text-green-600 truncate">{uploadedUrl}</p>
            </div>
            <button
              onClick={reset}
              className="p-2 hover:bg-green-100 rounded-full transition-colors"
              type="button"
            >
              <X size={18} className="text-green-700" />
            </button>
          </div>
          <button
            onClick={() => {
              const proxyUrl = `/api/download?url=${encodeURIComponent(uploadedUrl)}`;
              window.open(proxyUrl, "_blank");
            }}
            className="w-full py-2 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors"
            type="button"
          >
            Descargar archivo
          </button>
        </div>
      ) : (
        <div
          className={`
            relative border-2 border-dashed rounded-lg p-6 text-center transition-colors
            ${dragActive ? "border-primary bg-primary/5" : "border-gray-300 hover:border-gray-400"}
            ${uploading ? "opacity-50 pointer-events-none" : ""}
          `}
          onDragEnter={() => setDragActive(true)}
          onDragLeave={() => setDragActive(false)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            onChange={handleChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />

          {uploading ? (
            <div className="py-4">
              <Upload className="animate-bounce mx-auto mb-2 text-primary" size={32} />
              <p className="text-sm text-gray-600">Subiendo... {progress}%</p>
              <div className="w-full max-w-xs mx-auto mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          ) : (
            <>
              <FileText className="mx-auto mb-2 text-gray-400" size={32} />
              <p className="text-sm text-gray-600">{label}</p>
              <p className="text-xs text-gray-400 mt-1">
                PDF, JPG, PNG hasta {maxSizeMB}MB
              </p>
            </>
          )}

          {error && (
            <p className="text-sm text-red-600 mt-3">{error}</p>
          )}
        </div>
      )}
    </div>
  );
}