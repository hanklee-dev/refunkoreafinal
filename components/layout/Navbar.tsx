"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          환불코리아
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/refund/form"
              className={`hover:text-blue-200 ${
                pathname === "/refund/form" ? "font-bold" : ""
              }`}
            >
              환불 신청
            </Link>
          </li>
          <li>
            <Link
              href="/refund"
              className={`hover:text-blue-200 ${
                pathname === "/refund" ? "font-bold" : ""
              }`}
            >
              환불 목록
            </Link>
          </li>
          <li>
            <Link
              href="/mypage"
              className={`hover:text-blue-200 ${
                pathname === "/mypage" ? "font-bold" : ""
              }`}
            >
              마이페이지
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
