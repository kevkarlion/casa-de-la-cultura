import { NextResponse } from "next/server";
import { generateSignature } from "@/lib/cloudinary";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { folder, publicId } = body;

    const signature = generateSignature({ folder, publicId });

    return NextResponse.json(signature);
  } catch (error) {
    console.error("Error generating upload signature:", error);
    return NextResponse.json(
      { error: "Failed to generate signature" },
      { status: 500 }
    );
  }
}
