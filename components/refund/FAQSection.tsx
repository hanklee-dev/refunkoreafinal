// components/refund/FAQSection.tsx
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "환불 처리에는 얼마나 걸리나요?",
    answer:
      "일반적으로 환불 요청 후 3-5 영업일 내에 처리됩니다. 복잡한 경우 더 오래 걸릴 수 있습니다.",
  },
  {
    question: "어떤 경우에 환불이 거절될 수 있나요?",
    answer:
      "앱을 이미 사용했거나, 구매 후 14일이 지난 경우 환불이 거절될 수 있습니다. 또한, 반복적인 환불 요청도 거절 사유가 될 수 있습니다.",
  },
  // 더 많은 FAQ 항목 추가...
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">자주 묻는 질문</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            className="flex justify-between items-center w-full text-left font-semibold p-4 bg-gray-100 hover:bg-gray-200 rounded"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <span>{faq.question}</span>
            <span>{activeIndex === index ? "-" : "+"}</span>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 bg-white"
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
