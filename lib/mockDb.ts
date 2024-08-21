import { RefundRequest, RefundStatus } from "../types/refund";

interface User {
  id: string;
  phoneNumber: string;
  password: string;
  isAdmin: boolean;
}

let users: User[] = [
  { id: "1", phoneNumber: "01012345678", password: "1234", isAdmin: false },
  { id: "2", phoneNumber: "01087654321", password: "4321", isAdmin: true },
];

let refundRequests: RefundRequest[] = [
  {
    id: "1",
    userId: "1",
    phoneNumber: "01012345678",
    appName: "게임 A",
    purchaseDate: new Date("2023-05-01"),
    refundAmount: 50000,
    reason: "실수로 구매",
    status: "접수",
    createdAt: new Date("2023-05-10"),
    updatedAt: new Date("2023-05-10"),
  },
  {
    id: "2",
    userId: "1",
    phoneNumber: "01012345678",
    appName: "앱 B",
    purchaseDate: new Date("2023-04-15"),
    refundAmount: 30000,
    reason: "기능 불만족",
    status: "환불승인중",
    createdAt: new Date("2023-05-05"),
    updatedAt: new Date("2023-05-08"),
  },
];

export const findUserByPhoneNumber = (
  phoneNumber: string
): User | undefined => {
  return users.find((user) => user.phoneNumber === phoneNumber);
};

export const getUserRefundRequests = (userId: string): RefundRequest[] => {
  return refundRequests.filter((request) => request.userId === userId);
};

export const getAllRefundRequests = (): RefundRequest[] => {
  return refundRequests;
};

export const getRefundRequestById = (id: string): RefundRequest | undefined => {
  return refundRequests.find((request) => request.id === id);
};

export const updateRefundRequestStatus = (
  id: string,
  status: RefundStatus
): RefundRequest | undefined => {
  const request = refundRequests.find((req) => req.id === id);
  if (request) {
    request.status = status;
    request.updatedAt = new Date();
  }
  return request;
};

export const createRefundRequest = (
  newRequest: Omit<RefundRequest, "id" | "createdAt" | "updatedAt">
): RefundRequest => {
  const request: RefundRequest = {
    ...newRequest,
    id: (refundRequests.length + 1).toString(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  refundRequests.push(request);
  return request;
};
