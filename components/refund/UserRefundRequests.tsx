"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserRefundRequestsAsync,
  RefundRequest,
} from "../../lib/slices/refundSlice";
import { RootState, AppDispatch } from "../../lib/store";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { FaExclamationCircle, FaSync } from "react-icons/fa";
import Link from "next/link";
import Skeleton from "@/components/Skeleton";

const UserRefundRequests: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userRequests, loading, error } = useSelector(
    (state: RootState) => state.refund
  );
  const userId = useSelector((state: RootState) => state.auth.userId);
  const [selectedRequest, setSelectedRequest] = useState<RefundRequest | null>(
    null
  );

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserRefundRequestsAsync(userId));
    }
  }, [dispatch, userId]);

  const handleRetry = () => {
    if (userId) {
      dispatch(fetchUserRefundRequestsAsync(userId));
    }
  };

  if (loading) return <Skeleton height="400px" />;
  if (error) {
    return (
      <div className="text-center text-red-500">
        <FaExclamationCircle className="text-4xl mx-auto mb-4" />
        <p className="mb-4">에러: {error}</p>
        <button
          onClick={handleRetry}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center mx-auto"
        >
          <FaSync className="mr-2" /> 다시 시도
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">나의 환불 요청</h2>
      {userRequests.length === 0 ? (
        <div className="text-center py-8">
          <FaExclamationCircle className="text-4xl text-yellow-500 mb-4 mx-auto" />
          <p className="text-xl mb-4">아직 환불 요청이 없습니다.</p>
          <Link
            href="/refund/create"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            새 환불 요청 생성
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {userRequests.map((request: RefundRequest) => (
              <motion.div
                key={request.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedRequest(request)}
              >
                <h3 className="text-lg font-semibold mb-2">
                  {request.appName}
                </h3>
                <p className="text-gray-600 mb-1">
                  구매일:{" "}
                  {format(new Date(request.purchaseDate), "PPP", {
                    locale: ko,
                  })}
                </p>
                <p className="text-gray-600 mb-1">
                  스토어:{" "}
                  {request.store === "google" ? "Google Play" : "App Store"}
                </p>
                <p className="text-gray-600">
                  상태:{" "}
                  <span
                    className={`font-semibold ${
                      request.status === "pending"
                        ? "text-yellow-500"
                        : request.status === "approved"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {request.status === "pending"
                      ? "처리 중"
                      : request.status === "approved"
                      ? "승인됨"
                      : "거절됨"}
                  </span>
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white p-6 rounded-lg max-w-2xl w-full"
          >
            <h3 className="text-xl font-bold mb-4">
              {selectedRequest.appName} 상세 정보
            </h3>
            <p>ID: {selectedRequest.id}</p>
            <p>
              구매일:{" "}
              {format(new Date(selectedRequest.purchaseDate), "PPP", {
                locale: ko,
              })}
            </p>
            <p>
              스토어:{" "}
              {selectedRequest.store === "google"
                ? "Google Play Store"
                : "Apple App Store"}
            </p>
            <p>환불 금액: {selectedRequest.refundAmount.toLocaleString()}원</p>
            <p>환불 사유: {selectedRequest.reason}</p>
            <p>
              상태:{" "}
              <span
                className={`font-semibold ${
                  selectedRequest.status === "pending"
                    ? "text-yellow-500"
                    : selectedRequest.status === "approved"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {selectedRequest.status === "pending"
                  ? "처리 중"
                  : selectedRequest.status === "approved"
                  ? "승인됨"
                  : "거절됨"}
              </span>
            </p>
            {selectedRequest.status === "rejected" &&
              selectedRequest.rejectionReason && (
                <p>거절 사유: {selectedRequest.rejectionReason}</p>
              )}
            <p>이메일: {selectedRequest.email}</p>
            <p>
              생성일:{" "}
              {format(new Date(selectedRequest.createdAt), "PPP", {
                locale: ko,
              })}
            </p>
            <p>
              수정일:{" "}
              {format(new Date(selectedRequest.updatedAt), "PPP", {
                locale: ko,
              })}
            </p>
            <button
              onClick={() => setSelectedRequest(null)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              닫기
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default UserRefundRequests;
