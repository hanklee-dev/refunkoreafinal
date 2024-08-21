import React from "react";
import { getRefundRequest, updateRefundStatus } from "../../../lib/api/refund";
import RefundStatusComponent from "../../../components/refund/RefundStatus";
import { RefundStatus } from "../../../types/refund";

interface RefundDetailPageProps {
  params: {
    id: string;
  };
}

const RefundDetailPage: React.FC<RefundDetailPageProps> = async ({
  params,
}) => {
  const { id } = params;
  const refundRequest = await getRefundRequest(id);

  const handleStatusUpdate = async (formData: FormData) => {
    "use server";
    const newStatus = formData.get("status") as RefundStatus;
    await updateRefundStatus(id, newStatus);
  };

  if (!refundRequest) {
    return <div>요청을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">환불 요청 상세 정보</h1>
      <RefundStatusComponent status={refundRequest.status} />
      <div className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">{refundRequest.appName}</h2>
        <p>
          <strong>구매 날짜:</strong>{" "}
          {new Date(refundRequest.purchaseDate).toLocaleDateString()}
        </p>
        <p>
          <strong>환불 금액:</strong>{" "}
          {refundRequest.refundAmount.toLocaleString()}원
        </p>
        <p>
          <strong>사유:</strong> {refundRequest.reason}
        </p>
        <p>
          <strong>신청일:</strong>{" "}
          {new Date(refundRequest.createdAt).toLocaleString()}
        </p>
        <p>
          <strong>현재 상태:</strong> {refundRequest.status}
        </p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">상태 변경</h3>
          <form action={handleStatusUpdate}>
            <select
              name="status"
              defaultValue={refundRequest.status}
              className="border rounded p-2"
            >
              <option value="접수">접수</option>
              <option value="구매내역확인중">구매내역 확인중</option>
              <option value="상담대기">상담 대기</option>
              <option value="환불승인중">환불 승인중</option>
              <option value="환불승인완료">환불 승인 완료</option>
              <option value="환불완료">환불 완료</option>
              <option value="수수료입금대기">수수료 입금 대기</option>
              <option value="서비스종료">서비스 종료</option>
              <option value="개인정보폐기">개인정보 폐기</option>
            </select>
            <button
              type="submit"
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              상태 변경
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RefundDetailPage;
