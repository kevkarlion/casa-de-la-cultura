import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "Missing url param" }, { status: 400 });
  }

  // Decodificar URL
  const decodedUrl = decodeURIComponent(url);
  
  // Try redirect to Cloudinary with fl_attachment
  // If blocked, this will fail - and need to re-upload with correct settings
  return NextResponse.redirect(decodedUrl + (decodedUrl.includes("?") ? "&" : "?") + "fl_attachment=true");
}