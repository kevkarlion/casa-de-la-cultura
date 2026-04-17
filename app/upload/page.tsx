"use client";

import { useState } from "react";
import DocumentUploader from "@/components/shared/DocumentUploader/DocumentUploader";

/** Descarga archivo - abrir URL directa */
function downloadDocument(url: string, fileName?: string) {
  window.open(url + (url.includes("?") ? "&" : "?") + "fl_attachment=true", "_blank");
}

export default function UploadPage() {
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-brand-white-cdc py-20 px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-neue font-bold mb-2">Subir documento</h1>
        <p className="text-gray-600 mb-8">
          Arrastra un PDF o imagen para subirlo a Cloudinary
        </p>

        <DocumentUploader
          onUploadComplete={(url) => {
            setUploadedUrl(url);
          }}
        />

        {uploadedUrl && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm font-medium text-green-800 mb-2">
              Listo! Copiá la_url ORIGINAL (sin加工):
            </p>
            <input
              type="text"
              readOnly
              value={uploadedUrl}
              className="w-full p-2 text-sm border rounded bg-white mb-2"
              onClick={(e) => (e.target as HTMLInputElement).select()}
            />
            <p className="text-xs text-gray-600 mb-1">
              Probá el enlace de descarga:
            </p>
            <button
              onClick={() => downloadDocument(uploadedUrl, "documento.pdf")}
              className="text-sm text-primary hover:underline"
            >
              Descargar ahora
            </button>
          </div>
        )}
      </div>
    </main>
  );
}