"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserRefundRequests } from "@/lib/api/refund";
import Link from "next/link";
import RefundStatusComponent from "@/components/refund/RefundStatus";

export default function DashboardClient() {
  const { data: session } = useSession();
  const router = useRouter();
  const [refundRequests, setRefundRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (session?.user?.id) {
      fetchRefundRequests(session.user.id);
    }
  }, [session]);

  const fetchRefundRequests = async (userId) => {
    try {
      const { requests } = await getUserRefundRequests(userId);
      setRefundRequests(requests);
    } catch (err) {
      setError("환불 요청을 불러오는데 실패했습니다.");
      console.error("Failed to fetch refund requests:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">대시보드</h1>
      <p className="mb-4">
        안녕하세요, {session?.user?.name || session?.user?.email}님!
      </p>
      <Link
        href="/refund/create"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4 inline-block"
      >
        새 환불 요청 생성
      </Link>
      <h2 className="text-xl font-semibold mt-6 mb-4">내 환불 요청 목록</h2>
      {refundRequests.length === 0 ? (
        <p>아직 환불 요청이 없습니다.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {refundRequests.map((request) => (
            <div key={request.id} className="border p-4 rounded-lg shadow">
              <h3 className="font-semibold">{request.appName}</h3>
              <p>환불 금액: {request.refundAmount}원</p>
              <p>신청일: {new Date(request.createdAt).toLocaleDateString()}</p>
              <RefundStatusComponent status={request.status} />
              <Link
                href={`/refund/${request.id}`}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                상세보기
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
