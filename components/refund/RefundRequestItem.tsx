import React from "react";
import { RefundRequest, RefundStatus } from "@/types/refund";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

interface RefundRequestItemProps {
  request: RefundRequest;
  onClick: () => void;
}

const RefundRequestItem: React.FC<RefundRequestItemProps> = React.memo(
  ({ request, onClick }) => {
    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        onClick();
      }
    };

    const getStatusColor = (status: RefundStatus): string => {
      switch (status) {
        case "접수":
        case "구매내역확인중":
        case "상담대기":
          return "text-yellow-500";
        case "환불승인중":
        case "환불승인완료":
        case "환불완료":
        case "승인됨":
          return "text-green-500";
        default:
          return "text-red-500";
      }
    };

    const getStatusText = (status: RefundStatus): string => {
      switch (status) {
        case "승인됨":
          return "승인됨";
        case "접수":
          return "처리 중";
        default:
          return status;
      }
    };

    return (
      <div
        className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
        onClick={onClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`${request.appName} 환불 요청 상세 정보 보기`}
      >
        <h3 className="text-lg font-semibold mb-2">{request.appName}</h3>
        <p className="text-gray-600 mb-1">
          구매일:{" "}
          {format(new Date(request.purchaseDate), "PPP", { locale: ko })}
        </p>
        <p className="text-gray-600">
          상태:
          <span
            className={`font-semibold ${getStatusColor(request.status)}`}
            aria-label={`상태: ${getStatusText(request.status)}`}
          >
            {getStatusText(request.status)}
          </span>
        </p>
      </div>
    );
  }
);

RefundRequestItem.displayName = "RefundRequestItem";

export default RefundRequestItem;
