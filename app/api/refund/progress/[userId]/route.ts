import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;
  // 실제 로직 구현
  const mockProgress = {
    userId: userId,
    status: "진행중",
    completionPercentage: 50,
    estimatedCompletionDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  };
  return NextResponse.json(mockProgress);
}
