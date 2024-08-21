"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ChatbotPopup from "@/components/ChatbotPopup";

const RefundApplicationPage: React.FC = () => {
  const router = useRouter();
  const [selectedStore, setSelectedStore] = useState<"google" | "apple" | null>(
    null
  );
  const [showChatbot, setShowChatbot] = useState(false);

  const handleStoreSelect = (store: "google" | "apple") => {
    setSelectedStore(store);
    setShowChatbot(true);
  };

  const handleChatbotClose = () => {
    setShowChatbot(false);
    setSelectedStore(null);
    router.push("/refund/progress");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">환불 신청</h1>
      {!selectedStore ? (
        <div>
          <p className="mb-4">환불 받으실 스토어를 선택해주세요:</p>
          <button
            onClick={() => handleStoreSelect("google")}
            className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Google Play
          </button>
          <button
            onClick={() => handleStoreSelect("apple")}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            App Store
          </button>
        </div>
      ) : (
        <ChatbotPopup isOpen={showChatbot} onClose={handleChatbotClose} />
      )}
    </div>
  );
};

export default RefundApplicationPage;
