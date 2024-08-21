"use client";
import React from "react";
import { motion } from "framer-motion";

interface MessageProps {
  message: {
    text: string;
    isUser: boolean;
  };
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`mb-2 ${message.isUser ? "text-right" : "text-left"}`}
    >
      <span
        className={`inline-block p-2 rounded-lg ${
          message.isUser
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        {message.text}
      </span>
    </motion.div>
  );
};

export default Message;
