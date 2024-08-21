import React from "react";
import RefundPolicy from "@/components/refund/RefundPolicy";
import SupportChat from "@/components/refund/SupportChat";

export default function RefundPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">환불 정책</h1>
      <RefundPolicy />
      <SupportChat />
    </div>
  );
}
