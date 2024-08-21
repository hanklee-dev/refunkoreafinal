import React from "react";
import UserRefundRequests from "@/components/refund/UserRefundRequests";
import RefundStatusNotification from "@/components/refund/RefundStatusNotification";
import SupportChat from "@/components/refund/SupportChat";

export default function MyRefundRequestsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">내 환불 요청</h1>
      <UserRefundRequests />
      <RefundStatusNotification />
      <SupportChat />
    </div>
  );
}
