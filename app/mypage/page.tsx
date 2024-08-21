import React from "react";
import UserRefundRequests from "@/components/refund/UserRefundRequests";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "마이페이지 | 환불코리아",
  description: "환불 요청 목록 및 계정 관리",
};

export const dynamic = "force-dynamic";

const MyPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">마이페이지</h1>
      <UserRefundRequests />
    </div>
  );
};

export default MyPage;
