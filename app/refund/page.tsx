"use client";

import React, { useState } from "react";
import ChatbotPopup from "@/components/ChatbotPopup";

const RefundPage: React.FC = () => {
  const [selectedStore, setSelectedStore] = useState<"google" | "apple" | null>(
    null
  );
  const [showChatbot, setShowChatbot] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleStoreSelect = (store: "google" | "apple") => {
    setSelectedStore(store);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowChatbot(true);
    }, 1000);
  };

  const handleChatbotClose = () => {
    setShowChatbot(false);
    setSelectedStore(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">
        환불 신청
      </h1>
      {!selectedStore ? (
        <div className="text-center">
          <p className="mb-6 text-lg">환불 받으실 스토어를 선택해주세요:</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => handleStoreSelect("google")}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200 w-full sm:w-auto"
              aria-label="Google Play 스토어 선택"
            >
              Google Play
            </button>
            <button
              onClick={() => handleStoreSelect("apple")}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-200 w-full sm:w-auto"
              aria-label="App Store 선택"
            >
              App Store
            </button>
          </div>
        </div>
      ) : (
        <ChatbotPopup
          isOpen={showChatbot}
          onClose={handleChatbotClose}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default RefundPage;
