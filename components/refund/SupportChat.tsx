// components/refund/SupportChat.tsx
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SupportChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setMessages([
        { text: "안녕하세요! 무엇을 도와드릴까요?", isUser: false },
      ]);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, isUser: true }]);
      setInputMessage("");
      // 여기에 실제 채팅 로직 추가 (예: 서버로 메시지 전송)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "죄송합니다. 현재 상담원 연결이 지연되고 있습니다. 잠시 후 다시 시도해주세요.",
            isUser: false,
          },
        ]);
      }, 1000);
    }
  };

  return (
    <>
      <motion.button
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "채팅 닫기" : "상담 채팅"}
      </motion.button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col"
        >
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  message.isUser ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block p-2 rounded ${
                    message.isUser ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <div className="flex">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 border rounded-l px-2 py-1"
                placeholder="메시지를 입력하세요..."
              />
              <button
                onClick={handleSend}
                className="bg-blue-500 text-white px-4 py-1 rounded-r"
              >
                전송
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SupportChat;
