import { NextResponse } from "next/server";
import { RefundRequest } from "@/types/refund";

export async function POST(request: Request) {
  const refundData = await request.json();
  // 실제로는 여기서 데이터베이스에 저장하는 로직이 필요합니다
  const newRefundRequest: RefundRequest = {
    id: Date.now().toString(),
    ...refundData,
    status: "접수",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return NextResponse.json(newRefundRequest, { status: 201 });
}
