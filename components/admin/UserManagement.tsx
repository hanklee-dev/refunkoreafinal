"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";

interface User {
  id: string;
  phoneNumber: string;
  name: string | null;
  email: string | null;
  role: string;
  createdAt: string;
}

export default function UserManagement() {
  const { data: session } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = useCallback(async () => {
    const res = await fetch(`/api/admin/users?search=${search}&page=${page}`);
    const data = await res.json();
    setUsers(data.users);
    setTotalPages(data.totalPages);
  }, [search, page]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (!session || session.user.role !== "ADMIN") {
    return <div>접근 권한이 없습니다.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">사용자 관리</h2>
      <input
        type="text"
        placeholder="사용자 검색..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">전화번호</th>
            <th className="border border-gray-300 px-4 py-2">이름</th>
            <th className="border border-gray-300 px-4 py-2">이메일</th>
            <th className="border border-gray-300 px-4 py-2">역할</th>
            <th className="border border-gray-300 px-4 py-2">가입일</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 px-4 py-2">
                {user.phoneNumber}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.name || "-"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.email || "-"}
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.role}</td>
              <td className="border border-gray-300 px-4 py-2">
                {new Date(user.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`mx-1 px-3 py-1 border rounded ${
              page === i + 1
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
