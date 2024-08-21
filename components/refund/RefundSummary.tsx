import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";

interface RefundSummaryProps {
  onConfirm: () => void;
  onEdit: () => void;
}

const RefundSummary: React.FC<RefundSummaryProps> = ({ onConfirm, onEdit }) => {
  const { formData } = useSelector((state: RootState) => state.refund);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">환불 신청 요약</h2>
      {Object.entries(formData).map(([key, value]) => (
        <div key={key} className="mb-2">
          <span className="font-semibold">{key}: </span>
          <span>{Array.isArray(value) ? value.join(", ") : value}</span>
        </div>
      ))}
      <div className="mt-6 flex justify-between">
        <button
          onClick={onEdit}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition duration-200"
        >
          수정하기
        </button>
        <button
          onClick={onConfirm}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          확인 및 제출
        </button>
      </div>
    </div>
  );
};

export default RefundSummary;
