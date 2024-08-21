import { RefundRequest, RefundStatus } from "../../types/refund";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

export const fetchRefundRequests = async (
  page: number,
  itemsPerPage: number
): Promise<{ requests: RefundRequest[]; totalPages: number }> => {
  const response = await fetch(
    `${API_BASE_URL}/refunds?page=${page}&itemsPerPage=${itemsPerPage}`
  );
  if (!response.ok) {
    throw new Error("환불 요청을 불러오는 데 실패했습니다.");
  }
  return await response.json();
};

export const updateRefundRequestStatus = async (
  id: string,
  status: RefundStatus
): Promise<RefundRequest> => {
  const response = await fetch(`${API_BASE_URL}/refunds/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });
  if (!response.ok) {
    throw new Error("환불 상태 업데이트에 실패했습니다.");
  }
  return await response.json();
};

export const createRefundRequest = async (
  refundData: Omit<RefundRequest, "id" | "status" | "createdAt" | "updatedAt">
): Promise<RefundRequest> => {
  const response = await fetch(`${API_BASE_URL}/refunds`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(refundData),
  });
  if (!response.ok) {
    throw new Error("환불 요청 생성에 실패했습니다.");
  }
  return await response.json();
};

export const fetchUserRefundRequests = async (): Promise<RefundRequest[]> => {
  const response = await fetch(`${API_BASE_URL}/user-refunds`);
  if (!response.ok) {
    throw new Error("사용자의 환불 요청을 불러오는 데 실패했습니다.");
  }
  return await response.json();
};

export const cancelRefundRequest = async (
  requestId: string
): Promise<RefundRequest> => {
  const response = await fetch(`${API_BASE_URL}/refunds/${requestId}/cancel`, {
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("환불 요청 취소에 실패했습니다.");
  }
  return await response.json();
};
