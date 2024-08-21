import React from "react";
import { RefundStatus } from "../../types/refund";

interface RefundStatusProps {
  status: RefundStatus;
}

const statusOrder: RefundStatus[] = [
  "접수",
  "구매내역확인중",
  "상담대기",
  "환불승인중",
  "환불승인완료",
  "환불완료",
  "수수료입금대기",
  "서비스종료",
  "개인정보폐기",
];

const RefundStatusComponent: React.FC<RefundStatusProps> = ({ status }) => {
  const currentIndex = statusOrder.indexOf(status);

  return (
    <div
      className="flex flex-col items-center"
      role="region"
      aria-label="환불 진행 상태"
    >
      <h2 className="text-2xl font-bold mb-4">환불 진행 상태</h2>
      <div className="flex items-center justify-between w-full max-w-3xl">
        {statusOrder.map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index <= currentIndex ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
              aria-current={index === currentIndex ? "step" : undefined}
            >
              {index + 1}
            </div>
            <p
              className={`text-sm mt-2 ${
                index === currentIndex ? "font-bold" : ""
              }`}
            >
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RefundStatusComponent;
