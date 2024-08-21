// components/layout/Footer.tsx
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">환불코리아</h3>
            <p className="text-gray-400">당신의 권리를 지키는 환불 전문 서비스</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">고객센터</h4>
            <p className="text-gray-400">평일 09:00 - 18:00</p>
            <p className="text-gray-400">주말 및 공휴일 휴무</p>
            <p className="text-gray-400">전화: 1588-1234</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">팔로우하세요</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-600 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-pink-600 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 환불코리아. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;