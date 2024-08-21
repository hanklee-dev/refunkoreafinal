import { NextResponse } from "next/server";
import { RefundRequest, RefundStatus } from "@/types/refund";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  // 임시 데이터로 응답
  const mockRefundRequest: RefundRequest = {
    id: id,
    userId: "user123",
    phoneNumber: "01012345678",
    appName: "테스트 앱",
    purchaseDate: new Date(),
    refundAmount: 10000,
    reason: "테스트 환불",
    status: "접수",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return NextResponse.json(mockRefundRequest);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const { status } = (await request.json()) as { status: RefundStatus };
  // 상태 업데이트 로직 구현
  return NextResponse.json({
    id,
    status,
    message: "상태가 업데이트되었습니다.",
  });
}
