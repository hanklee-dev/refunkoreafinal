export type RefundStatus =
  | "접수"
  | "구매내역확인중"
  | "상담대기"
  | "환불승인중"
  | "환불승인완료"
  | "환불완료"
  | "수수료입금대기"
  | "서비스종료"
  | "개인정보폐기"
  | "승인됨"; // 이 부분을 추가

export interface RefundRequest {
  id: string;
  userId: string;
  phoneNumber: string;
  appName: string;
  purchaseDate: Date;
  refundAmount: number;
  reason: string;
  status: RefundStatus;
  createdAt: Date;
  updatedAt: Date;
}
