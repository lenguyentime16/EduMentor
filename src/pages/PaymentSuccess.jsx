import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Download, Calendar, Clock, User, Book } from 'lucide-react';
import Header from '../components/layout/Header';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Thanh toán thành công!</h1>
          <p className="text-gray-600 text-lg mb-8">
            Thanh toán của bạn đã được xử lý thành công. Bạn sẽ nhận được email xác nhận trong thời gian ngắn.
          </p>

          {/* Session Details Card */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Chi tiết buổi học</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Book className="h-5 w-5 text-gray-500 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Môn học</p>
                    <p className="font-medium text-gray-900">Toán học - Giải tích</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <User className="h-5 w-5 text-gray-500 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Gia sư</p>
                    <p className="font-medium text-gray-900">Nguyễn Thị Hương</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Ngày</p>
                    <p className="font-medium text-gray-900">25 tháng 9, 2025</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Thời gian</p>
                    <p className="font-medium text-gray-900">14:00 - 15:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="border-t border-gray-200 mt-6 pt-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tổng đã thanh toán:</span>
                <span className="text-2xl font-bold text-[#FDCB6E]">1,035,000đ</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Download className="h-5 w-5 mr-2" />
              Tải hóa đơn
            </button>

            <Link
              to="/my-bookings"
              className="flex items-center justify-center px-6 py-3 bg-[#FDCB6E] text-white rounded-lg hover:bg-[#E6B862] transition-colors"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Xem lịch đặt của tôi
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800 text-sm">
              <strong>Bước tiếp theo là gì?</strong> Gia sư của bạn sẽ liên hệ với bạn 15 phút trước khi buổi học bắt đầu.
              Hãy đảm bảo kiểm tra email để nhận link cuộc họp và tài liệu chuẩn bị.
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="text-[#FDCB6E] hover:text-[#E6B862] font-medium"
          >
            ← Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;