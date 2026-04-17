import { v2 as cloudinary } from "cloudinary";

// Configuración de Cloudinary desde variables de entorno
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

/**
 * Sube un archivo a Cloudinary
 * @param file - Ruta del archivo o base64
 * @param options - Opciones de subida
 * @returns promise con resultado de Cloudinary
 */
export async function uploadFile(
  file: string,
  options: {
    folder?: string;
    resourceType?: "image" | "video" | "raw" | "auto";
    publicId?: string;
  } = {}
): Promise<{ secure_url: string; public_id: string; type?: string }> {
  const { folder = "cdc/documentos", resourceType = "auto", publicId } = options;

  return cloudinary.uploader.upload(file, {
    folder,
    resource_type: resourceType,
    public_id: publicId,
    use_filename: true,
    unique_filename: true,
  });
}

/**
 * Genera una URL signed para upload directo desde el cliente
 * Evita que el servidor maneje archivos pesados
 */
export function generateSignature(
  params: {
    folder?: string;
    publicId?: string;
  } = {}
) {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const { folder = "cdc/documentos", publicId } = params;

  const sigParams = {
    timestamp,
    folder,
    type: "upload", // PÚBLICO
    resource_type: "raw",
    ...(publicId && { public_id: publicId }),
  };

  const signature = cloudinary.utils.api_sign_request(
    sigParams,
    process.env.CLOUDINARY_API_SECRET!
  );

  return {
    signature,
    timestamp,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    folder,
    publicId,
    type: "upload",
    resource_type: "raw",
  };
}