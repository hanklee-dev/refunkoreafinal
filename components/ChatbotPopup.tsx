"use client";

import React, { useEffect, useRef } from "react";
import { Popup } from "@typebot.io/nextjs";
import Skeleton from "./Skeleton";

interface ChatbotPopupProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading?: boolean;
}

const ChatbotPopup: React.FC<ChatbotPopupProps> = ({
  isOpen,
  onClose,
  isLoading = false,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      popupRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (isLoading) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        aria-label="챗봇 로딩 중"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-white p-4 rounded-lg w-90vw h-90vh">
          <Skeleton height="100%" />
        </div>
      </div>
    );
  }

  return (
    <div ref={popupRef} tabIndex={-1}>
      <Popup
        typebot="refundkorea-hcbsmon"
        isOpen={isOpen}
        onClose={onClose}
        prefilledVariables={{
          style: JSON.stringify({
            zIndex: 9999,
            width: "90vw",
            height: "90vh",
          }),
        }}
        aria-label="환불 상담 챗봇"
      />
    </div>
  );
};

export default ChatbotPopup;
