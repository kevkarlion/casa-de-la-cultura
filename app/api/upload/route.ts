import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const folder = (formData.get("folder") as string) || "cdc/documentos";

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Convertir File a base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

    // Nombre del archivo limpio
    const cleanFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    
    console.log("Uploading with:", { resource_type: "raw", type: "upload" });
    
    // Subir a Cloudinary
    const result = await cloudinary.uploader.upload(base64, {
      resource_type: "raw",
      type: "upload",
      public_id: cleanFileName,
    });

    console.log("Uploaded:", result.public_id, "type:", result.type);

    return NextResponse.json({
      url: result.secure_url,
      publicId: result.public_id,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Upload failed: " + (error as Error).message },
      { status: 500 }
    );
  }
}