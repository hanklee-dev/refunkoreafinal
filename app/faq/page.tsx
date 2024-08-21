"use client";

import React, { useState } from "react";
import dynamic from 'next/dynamic';

// FAQAccordion 컴포넌트를 동적으로 불러오고 SSR을 비활성화하며 로딩 중 메시지를 표시
const FAQAccordion = dynamic(() => import("@/components/faq/FAQAccordion"), { 
  ssr: false,
  loading: () => <p>Loading...</p> // 로딩 중일 때 표시할 메시지
});

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "환불은 어떻게 신청하나요?",
    answer:
      "환불 신청은 '환불 신청' 페이지에서 할 수 있습니다. 스토어 선택 후 앱 정보와 환불 사유를 입력하시면 됩니다.",
  },
  {
    question: "환불 처리에는 얼마나 걸리나요?",
    answer:
      "일반적으로 환불 처리에는 3-5 영업일이 소요됩니다. 복잡한 경우 더 오래 걸릴 수 있습니다.",
  },
  {
    question: "모든 앱 구매에 대해 환불이 가능한가요?",
    answer:
      "대부분의 경우 구매 후 14일 이내에 환불이 가능합니다. 단, 앱을 실제로 사용한 경우 환불이 제한될 수 있습니다.",
  },
  {
    question: "환불 신청 후 취소할 수 있나요?",
    answer:
      "환불 처리가 시작되기 전이라면 마이페이지에서 환불 신청을 취소할 수 있습니다.",
  },
  {
    question: "환불 금액은 어떻게 받나요?",
    answer:
      "환불 금액은 원래 결제에 사용된 방법으로 반환됩니다. 신용카드의 경우 3-5 영업일, 체크카드나 계좌이체의 경우 7-10 영업일이 소요될 수 있습니다.",
  },
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">자주 묻는 질문 (FAQ)</h1>
      <input
        type="text"
        placeholder="질문 검색..."
        className="w-full px-4 py-2 rounded-lg border mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FAQAccordion faqs={filteredFaqs} />
    </div>
  );
}
