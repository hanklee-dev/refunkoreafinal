import axios from "axios";
import { RefundRequest, RefundStatus } from "@/types/refund";

const API_BASE_URL = "/api";

export const createRefundRequest = async (
  refundData: Omit<RefundRequest, "id" | "status" | "createdAt" | "updatedAt">
): Promise<RefundRequest> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/refund`, refundData);
    return response.data;
  } catch (error) {
    console.error("Error creating refund request:", error);
    throw error;
  }
};

export const getRefundRequest = async (id: string): Promise<RefundRequest> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/refund/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching refund request:", error);
    throw error;
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
    console.error("Error updating refund status:", error);
    throw error;
  }
};

export const getUserRefundRequests = async (
  userId: string | "all",
  page: number = 1,
  pageSize: number = 10
): Promise<{ requests: RefundRequest[]; totalPages: number }> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/refund`, {
      params: { userId, page, pageSize },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user refund requests:", error);
    throw error;
  }
};

export const getRefundProgress = async (userId: string): Promise<any> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/refund/progress/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching refund progress:", error);
    throw error;
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
    console.error("Error uploading screenshot:", error);
    throw error;
  }
};
