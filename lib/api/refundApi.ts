import axios from "axios";
import { RefundRequest, RefundStatus } from "../../types/refund";

const API_BASE_URL = "/api";

const handleApiError = (error: any) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      throw new Error(
        `서버 오류: ${error.response.status} - ${
          error.response.data.message || "알 수 없는 오류가 발생했습니다."
        }`
      );
    } else if (error.request) {
      throw new Error(
        "서버로부터 응답을 받지 못했습니다. 네트워크 연결을 확인해주세요."
      );
    }
  }
  throw new Error("알 수 없는 오류가 발생했습니다.");
};

export const createRefundRequest = async (
  refundData: Omit<RefundRequest, "id" | "status" | "createdAt" | "updatedAt">
): Promise<RefundRequest> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/refund`, refundData);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getRefundRequest = async (id: string): Promise<RefundRequest> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/refund/${id}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const updateRefundStatus = async (
  id: string,
  status: RefundStatus
): Promise<RefundRequest> => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/refund/${id}`, {
      status,
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getUserRefundRequests = async (
  userId: string
): Promise<RefundRequest[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/refund/user/${userId}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getRefundProgress = async (userId: string): Promise<any> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/refund/progress/${userId}`
    );
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const uploadScreenshot = async (file: File): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append("screenshot", file);
    const response = await axios.post(
      `${API_BASE_URL}/upload-screenshot`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data.url;
  } catch (error) {
    handleApiError(error);
  }
};
