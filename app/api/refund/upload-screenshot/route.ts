import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";

export async function POST(request: Request) {
  const data = await request.formData();
  const file: File | null = data.get("screenshot") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = join(process.cwd(), "public", "uploads", file.name);
  await writeFile(path, buffer);

  return NextResponse.json({ success: true, url: `/uploads/${file.name}` });
}
