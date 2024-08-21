import { NextResponse } from "next/server";
import { RefundRequest } from "@/types/refund";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;

  // 예시 환불 요청 데이터
  const mockRefundRequests: RefundRequest[] = [
    {
      id: "1",
      userId: userId,
      phoneNumber: "01012345678",
      appName: "테스트 앱",
      purchaseDate: new Date(),
      refundAmount: 10000,
      reason: "테스트 환불",
      status: "접수", // "접수"는 RefundStatus에 포함됨
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      userId: userId,
      phoneNumber: "01087654321",
      appName: "다른 테스트 앱",
      purchaseDate: new Date(),
      refundAmount: 20000,
      reason: "기능 불만족",
      status: "승인됨", // 이제 "승인됨"도 RefundStatus에 포함됨
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return NextResponse.json(mockRefundRequests);
}
