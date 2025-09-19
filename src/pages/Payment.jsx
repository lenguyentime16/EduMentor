import React from "react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Header from '../components/layout/Header';

const Payment = () => {
  const location = useLocation();
  const bookingData = location.state?.booking || {
    tutor: "Nguyễn Thị Hương",
    date: "15 Tháng 12",
    time: "9:00 AM",
    duration: "1h",
    subject: "Toán học",
    hourlyRate: 45,
    total: 45,
    notes: ""
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="Payment" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/my-bookings" className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Quay lại</span>
          </Link>
        </div>

        {/* Payment Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Hoàn tất thanh toán</h1>
          <p className="text-gray-600">Xử lý thanh toán an toàn cho buổi học của bạn</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#FDCB6E] text-white rounded-full flex items-center justify-center text-sm font-medium">
                1
              </div>
              <span className="text-[#FDCB6E] font-medium">Xem lại</span>
            </div>
            <div className="w-12 h-px bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#FDCB6E] text-white rounded-full flex items-center justify-center text-sm font-medium">
                2
              </div>
              <span className="text-[#FDCB6E] font-medium">Phương thức thanh toán</span>
            </div>
            <div className="w-12 h-px bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-sm font-medium">
                3
              </div>
              <span className="text-gray-600">Xác nhận</span>
            </div>
          </div>
        </div>

        {/* Main Payment Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Side - Session Summary */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Tóm tắt buổi học</h2>
            <p className="text-gray-600 mb-8">Xem lại chi tiết đặt lịch của bạn</p>

            {/* Tutor Info */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-[#FDCB6E] rounded-full flex items-center justify-center text-white font-bold text-xl">
                {bookingData.tutor.split(' ').map(name => name[0]).join('')}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{bookingData.tutor}</h3>
                <div className="flex items-center space-x-1 text-sm text-gray-600 mb-1">
                  <span className="text-yellow-400">★</span>
                  <span>4.9 (127 đánh giá)</span>
                </div>
                <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  {bookingData.subject}
                </div>
              </div>
            </div>

            {/* Session Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Ngày</p>
                  <p className="text-gray-600">{bookingData.date}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Thời gian</p>
                  <p className="text-gray-600">{bookingData.time} ({bookingData.duration})</p>
                </div>
              </div>
            </div>

            {/* Continue to Payment Button */}
            <Link to="/payment-method" className="block w-full bg-[#FDCB6E] text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-[#E6B15C] transition-colors text-center">
              Tiếp tục thanh toán
            </Link>
          </div>

          {/* Right Side - Order Summary */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Tóm tắt đơn hàng</h2>

            {/* Session Info */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Buổi học:</span>
                <span className="font-semibold text-gray-900">{bookingData.subject}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Thời lượng:</span>
                <span className="font-semibold text-gray-900">{bookingData.duration.replace('h', ' giờ')}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Giá:</span>
                <span className="font-semibold text-gray-900">{bookingData.hourlyRate * 23000}₫/giờ</span>
              </div>
            </div>

            {/* Coupon Code */}
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nhập mã giảm giá"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent text-gray-900 placeholder-gray-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Tạm tính:</span>
                <span className="font-semibold text-gray-900">{(bookingData.total * 23000).toLocaleString()}₫</span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-gray-900">Tổng cộng:</span>
                  <span className="text-xl font-semibold text-[#FDCB6E]">{(bookingData.total * 23000).toLocaleString()}₫</span>
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-[#FDCB6E] text-[#FDCB6E] focus:ring-[#FDCB6E]" checked readOnly />
                <span>Thanh toán bảo mật SSL</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-[#FDCB6E] text-[#FDCB6E] focus:ring-[#FDCB6E]" checked readOnly />
                <span>Mã hóa 256-bit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;