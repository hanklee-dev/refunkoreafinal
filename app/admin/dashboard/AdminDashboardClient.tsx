"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import UserManagement from "@/components/admin/UserManagement";

interface RefundRequest {
  id: string;
  userId: string;
  appName: string;
  refundAmount: number;
  status: string;
  // 필요한 다른 속성들을 여기에 추가하세요
}

interface AdminDashboardClientProps {
  initialRequests: RefundRequest[];
  totalPages: number;
  currentPage: number;
}

export default function AdminDashboardClient({
  initialRequests,
  totalPages,
  currentPage,
}: AdminDashboardClientProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [uploadResults, setUploadResults] = useState<any[] | null>(null);
  const [stats, setStats] = useState<any>(null);

  const fetchStats = useCallback(async () => {
    const res = await fetch("/api/admin/stats");
    const data = await res.json();
    setStats(data);
  }, []);

  useEffect(() => {
    if (status === "authenticated" && session?.user.role === "ADMIN") {
      fetchStats();
    } else if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, session, fetchStats, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status !== "authenticated" || !session || session.user.role !== "ADMIN") {
    return null;
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadStatus("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/admin/csv-upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setUploadStatus("File uploaded and processed successfully");
        setUploadResults(data.results);
      } else {
        setUploadStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      setUploadStatus("An error occurred during upload");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">관리자 대시보드</h1>

      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">총 사용자 수</h2>
            <p className="text-3xl font-bold">{stats.totalUsers}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">총 환불 요청 수</h2>
            <p className="text-3xl font-bold">{stats.totalRefundRequests}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">대기 중인 환불 요청</h2>
            <p className="text-3xl font-bold">{stats.pendingRefundRequests}</p>
          </div>
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">CSV 파일 업로드</h2>
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button
          onClick={handleUpload}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          업로드
        </button>
        {uploadStatus && <p className="mt-2">{uploadStatus}</p>}
      </div>

      <UserManagement />

      {uploadResults && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">업로드 결과</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">상태</th>
                <th className="border border-gray-300 px-4 py-2">사용자 ID</th>
                <th className="border border-gray-300 px-4 py-2">전화번호</th>
                <th className="border border-gray-300 px-4 py-2">
                  에러 메시지
                </th>
              </tr>
            </thead>
            <tbody>
              {uploadResults.map((result, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {result.success ? "성공" : "실패"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {result.user?.id || "-"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {result.user?.phoneNumber || "-"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {result.error || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
