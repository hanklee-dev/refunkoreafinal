import { NextResponse } from "next/server";
import { processCSVFile } from "@/lib/csvUtils";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { logError, logInfo } from "@/lib/loggingUtils";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  // 관리자 권한 확인
  if (!session || session.user.role !== "ADMIN") {
    logInfo(`Unauthorized access attempt from user: ${session?.user?.email}`);
    return NextResponse.json(
      { success: false, error: "Unauthorized access" },
      { status: 401 }
    );
  }

  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file uploaded" },
        { status: 400 }
      );
    }

    // 파일 크기 검사
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, error: "File size exceeds the limit of 5MB" },
        { status: 400 }
      );
    }

    // 파일 형식 검사
    if (file.type !== "text/csv" && !file.name.endsWith(".csv")) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid file format. Please upload a CSV file",
        },
        { status: 400 }
      );
    }

    const fileContent = await file.text();
    const results = await processCSVFile(fileContent);

    logInfo(`CSV file processed successfully by user: ${session.user.email}`);
    return NextResponse.json({ success: true, results });
  } catch (error) {
    logError("Error processing CSV file", error);
    return NextResponse.json(
      {
        success: false,
        error: "An error occurred while processing the file. Please try again.",
      },
      { status: 500 }
    );
  }
}
