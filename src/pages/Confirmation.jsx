import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, CheckCircle, Shield, Lock } from 'lucide-react';
import Header from '../components/layout/Header';

const Confirmation = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header currentPage="Confirmation" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/payment-method"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Quay lại thanh toán
        </Link>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Hoàn tất thanh toán</h1>
          <p className="text-gray-600">Xử lý thanh toán an toàn cho buổi học của bạn</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            {/* Step 1 - Review (Completed) */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-[#FDCB6E] text-white rounded-full">
                <CheckCircle className="h-5 w-5" />
              </div>
              <span className="ml-3 text-sm font-medium text-gray-900">Xem lại</span>
            </div>

            {/* Connector */}
            <div className="w-20 h-0.5 bg-[#FDCB6E] mx-4"></div>

            {/* Step 2 - Payment Method (Completed) */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-[#FDCB6E] text-white rounded-full">
                <CheckCircle className="h-5 w-5" />
              </div>
              <span className="ml-3 text-sm font-medium text-gray-900">Phương thức thanh toán</span>
            </div>

            {/* Connector */}
            <div className="w-20 h-0.5 bg-[#FDCB6E] mx-4"></div>

            {/* Step 3 - Confirmation (Current) */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-[#FDCB6E] text-white rounded-full font-semibold">
                3
              </div>
              <span className="ml-3 text-sm font-medium text-[#FDCB6E]">Xác nhận</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Confirm Payment Section */}
          <div className="lg:col-span-2 bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Xác nhận thanh toán</h2>
              <p className="text-gray-600">Xem lại chi tiết thanh toán trước khi hoàn tất</p>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Phương thức thanh toán</h3>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <CreditCard className="h-6 w-6 text-gray-600 mr-3" />
                <div className="flex items-center">
                  <span className="text-gray-900 font-medium">•••• •••• •••• 3456</span>
                  <span className="ml-3 text-sm text-gray-500 bg-white px-2 py-1 rounded border">Visa</span>
                </div>
              </div>
            </div>

            {/* Billing Address */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Địa chỉ thanh toán</h3>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-gray-900">
                  <p className="font-medium">Nguyễn Văn A</p>
                  <p>123 Đường Nguyễn Huệ</p>
                  <p>Quận 1, TP. Hồ Chí Minh</p>
                  <p>Việt Nam</p>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <div>
                  <h4 className="text-green-800 font-medium">Thanh toán an toàn</h4>
                  <p className="text-green-700 text-sm">Thông tin thanh toán của bạn được mã hóa và bảo mật</p>
                </div>
              </div>
            </div>

            {/* Complete Payment Button */}
            <Link
              to="/payment-success"
              className="block w-full bg-[#FDCB6E] text-white font-semibold py-4 px-6 rounded-lg hover:bg-[#E6B862] transition-colors text-center"
            >
              <div className="flex items-center justify-center">
                <Lock className="h-5 w-5 mr-2" />
                Hoàn tất thanh toán - 1.080.000 VNĐ
              </div>
            </Link>
          </div>

          {/* Order Summary Sidebar */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 h-fit">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Tóm tắt đơn hàng</h3>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Buổi học:</span>
                <span className="font-medium text-gray-900">Toán - Giải tích</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Thời lượng:</span>
                <span className="font-medium text-gray-900">1 giờ</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Giá:</span>
                <span className="font-medium text-gray-900">1.080.000 VNĐ/giờ</span>
              </div>
            </div>

            {/* Coupon Code */}
            <div className="mb-6">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Nhập mã giảm giá"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent text-sm"
                />
                <button className="px-4 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg hover:bg-gray-200 transition-colors">
                  <span className="text-gray-600 text-sm">Áp dụng</span>
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Tạm tính:</span>
                <span className="text-gray-900">1.080.000 VNĐ</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-900">Tổng cộng:</span>
                <span className="text-[#FDCB6E]">1.080.000 VNĐ</span>
              </div>
            </div>

            {/* Security Features */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Shield className="h-4 w-4 mr-2" />
                Thanh toán được bảo mật SSL
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Lock className="h-4 w-4 mr-2" />
                Mã hóa 256-bit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;