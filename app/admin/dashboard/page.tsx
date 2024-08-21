import React from "react";
import { getUserRefundRequests } from "@/lib/api/refund";
import RefundStatusComponent from "@/components/refund/RefundStatus";
import ErrorComponent from "@/components/ErrorComponent";
import LoadingComponent from "@/components/LoadingComponent";
import Pagination from "@/components/Pagination";
import dynamicImport from "next/dynamic";
import { RefundRequest, RefundStatus } from "@/types/refund";

// 'dynamic' 대신 'forceDynamic'으로 변수명을 변경
export const forceDynamic = "force-dynamic";

const AdminDashboardClient = dynamicImport<{
  initialRequests: RefundRequest[];
  totalPages: number;
  currentPage: number;
}>(() => import("./AdminDashboardClient"), {
  ssr: false,
});

const AdminDashboard = async ({ searchParams }) => {
  const page = Number(searchParams.page) || 1;
  const pageSize = 10;
  let refundRequests: RefundRequest[] = [];
  let totalPages = 0;
  let error = null;

  try {
    const result = await getUserRefundRequests("all", page, pageSize);
    refundRequests = result.requests;
    totalPages = result.totalPages;
  } catch (err) {
    error = "환불 요청을 불러오는 데 실패했습니다.";
    console.error("Failed to fetch refund requests:", err);
  }

  if (error) {
    return <ErrorComponent message={error} />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">관리자 대시보드</h1>
      <AdminDashboardClient
        initialRequests={refundRequests}
        totalPages={totalPages}
        currentPage={page}
      />
      {refundRequests.length === 0 ? (
        <LoadingComponent />
      ) : (
        <>
          <div className="w-full overflow-hidden rounded-lg shadow-xs">
            <div className="w-full overflow-x-auto">
              <table className="w-full whitespace-no-wrap">
                <thead>
                  <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                    <th className="px-4 py-3">사용자</th>
                    <th className="px-4 py-3">앱 이름</th>
                    <th className="px-4 py-3">환불 금액</th>
                    <th className="px-4 py-3">상태</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y">
                  {refundRequests.map((request) => (
                    <tr key={request.id}>
                      <td className="px-4 py-3">{request.userId}</td>
                      <td className="px-4 py-3">{request.appName}</td>
                      <td className="px-4 py-3">{request.refundAmount}</td>
                      <td className="px-4 py-3">
                        <RefundStatusComponent status={request.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Pagination currentPage={page} totalPages={totalPages} />
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
