"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-gray-900 bg-opacity-90" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          환불코리아
        </Link>
        <div className="space-x-4">
          <Link
            href="/refund"
            className="text-white hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md px-2 py-1"
          >
            환불 신청
          </Link>
          <Link
            href="/faq"
            className="text-white hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md px-2 py-1"
          >
            FAQ
          </Link>
          <Link
            href="/support"
            className="text-white hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md px-2 py-1"
          >
            고객 지원
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
