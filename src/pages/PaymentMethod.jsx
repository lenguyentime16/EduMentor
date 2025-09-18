import React, { useState } from "react";
import { ArrowLeft, CreditCard, Shield, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from '../components/layout/Header';

const PaymentMethod = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("credit-card");
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    saveCard: false
  });
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: ""
  });

  const handleCardInfoChange = (field, value) => {
    setCardInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleBillingInfoChange = (field, value) => {
    setBillingInfo(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header currentPage="Payment Method" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/tutor-booking-inf" className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Quay lại thông tin gia sư</span>
          </Link>
        </div>

        {/* Payment Header */}
        <div className="mb-8">
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
          {/* Left Side - Payment Method */}
          <div className="space-y-6">
            {/* Payment Method Selection Box */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Phương thức thanh toán</h2>
              <p className="text-gray-600 mb-6">Chọn phương thức thanh toán ưa thích của bạn</p>

              {/* Payment Method Options */}
              <div className="space-y-4">
                {/* Credit/Debit Card */}
                <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${selectedPaymentMethod === "credit-card"
                    ? "border-[#FDCB6E] bg-orange-50"
                    : "border-gray-200 hover:border-gray-300"
                  }`}>
                  <input
                    type="radio"
                    name="payment-method"
                    value="credit-card"
                    checked={selectedPaymentMethod === "credit-card"}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <CreditCard className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="font-medium text-gray-900">Thẻ tín dụng/Ghi nợ</span>
                </label>

                {/* PayPal */}
                <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${selectedPaymentMethod === "paypal"
                    ? "border-[#FDCB6E] bg-orange-50"
                    : "border-gray-200 hover:border-gray-300"
                  }`}>
                  <input
                    type="radio"
                    name="payment-method"
                    value="paypal"
                    checked={selectedPaymentMethod === "paypal"}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <div className="w-5 h-5 bg-blue-600 rounded mr-3 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">P</span>
                  </div>
                  <span className="font-medium text-gray-900">PayPal</span>
                </label>

                {/* Mobile Wallet */}
                <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${selectedPaymentMethod === "mobile-wallet"
                    ? "border-[#FDCB6E] bg-orange-50"
                    : "border-gray-200 hover:border-gray-300"
                  }`}>
                  <input
                    type="radio"
                    name="payment-method"
                    value="mobile-wallet"
                    checked={selectedPaymentMethod === "mobile-wallet"}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <div className="w-5 h-5 bg-pink-600 rounded mr-3"></div>
                  <span className="font-medium text-gray-900">Ví điện tử</span>
                </label>

                {/* ZaloPay */}
                <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${selectedPaymentMethod === "zalopay"
                    ? "border-[#FDCB6E] bg-orange-50"
                    : "border-gray-200 hover:border-gray-300"
                  }`}>
                  <input
                    type="radio"
                    name="payment-method"
                    value="zalopay"
                    checked={selectedPaymentMethod === "zalopay"}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <div className="w-5 h-5 bg-blue-500 rounded mr-3"></div>
                  <span className="font-medium text-gray-900">ZaloPay</span>
                </label>

                {/* EduMentor Credits */}
                <label className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${selectedPaymentMethod === "edumentor-credits"
                    ? "border-[#FDCB6E] bg-orange-50"
                    : "border-gray-200 hover:border-gray-300"
                  }`}>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="payment-method"
                      value="edumentor-credits"
                      checked={selectedPaymentMethod === "edumentor-credits"}
                      onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <div className="w-5 h-5 bg-[#FDCB6E] rounded mr-3"></div>
                    <span className="font-medium text-gray-900">EduMentor Credits</span>
                  </div>
                  <span className="text-sm text-gray-600">300.000 VNĐ có sẵn</span>
                </label>
              </div>
            </div>

            {/* Card Information Box - Show only if credit card is selected */}
            {selectedPaymentMethod === "credit-card" && (
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Thông tin thẻ</h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Số thẻ</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={cardInfo.cardNumber}
                      onChange={(e) => handleCardInfoChange("cardNumber", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ngày hết hạn</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={cardInfo.expiryDate}
                        onChange={(e) => handleCardInfoChange("expiryDate", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        value={cardInfo.cvv}
                        onChange={(e) => handleCardInfoChange("cvv", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tên chủ thẻ</label>
                    <input
                      type="text"
                      placeholder="Nguyễn Văn A"
                      value={cardInfo.cardholderName}
                      onChange={(e) => handleCardInfoChange("cardholderName", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="save-card"
                      checked={cardInfo.saveCard}
                      onChange={(e) => handleCardInfoChange("saveCard", e.target.checked)}
                      className="rounded border-gray-300 text-[#FDCB6E] focus:ring-[#FDCB6E]"
                    />
                    <label htmlFor="save-card" className="ml-2 text-sm text-gray-700">
                      Lưu thẻ này cho các giao dịch sau
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Billing Information Box - Show for all payment methods except EduMentor Credits */}
            {selectedPaymentMethod !== "edumentor-credits" && (
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Thông tin thanh toán</h3>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Họ</label>
                      <input
                        type="text"
                        placeholder="Nguyễn"
                        value={billingInfo.firstName}
                        onChange={(e) => handleBillingInfoChange("firstName", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tên</label>
                      <input
                        type="text"
                        placeholder="Văn A"
                        value={billingInfo.lastName}
                        onChange={(e) => handleBillingInfoChange("lastName", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Địa chỉ</label>
                    <input
                      type="text"
                      placeholder="123 Đường Nguyễn Huệ"
                      value={billingInfo.address}
                      onChange={(e) => handleBillingInfoChange("address", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Thành phố</label>
                      <input
                        type="text"
                        placeholder="TP. Hồ Chí Minh"
                        value={billingInfo.city}
                        onChange={(e) => handleBillingInfoChange("city", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tỉnh/Thành</label>
                      <input
                        type="text"
                        placeholder="TP. HCM"
                        value={billingInfo.state}
                        onChange={(e) => handleBillingInfoChange("state", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mã bưu điện</label>
                      <input
                        type="text"
                        placeholder="70000"
                        value={billingInfo.zipCode}
                        onChange={(e) => handleBillingInfoChange("zipCode", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quốc gia</label>
                    <select
                      value={billingInfo.country}
                      onChange={(e) => handleBillingInfoChange("country", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent bg-white"
                    >
                      <option value="">Chọn quốc gia</option>
                      <option value="VN">Việt Nam</option>
                      <option value="US">Hoa Kỳ</option>
                      <option value="UK">Vương quốc Anh</option>
                      <option value="CA">Canada</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Order Summary */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 h-fit">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Tóm tắt đơn hàng</h2>

            {/* Session Info */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Buổi học:</span>
                <span className="font-semibold text-gray-900">Toán - Giải tích</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Thời lượng:</span>
                <span className="font-semibold text-gray-900">1 giờ</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Giá:</span>
                <span className="font-semibold text-gray-900">1.080.000 VNĐ/giờ</span>
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
                <span className="font-semibold text-gray-900">1.080.000 VNĐ</span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-gray-900">Tổng cộng:</span>
                  <span className="text-xl font-semibold text-[#FDCB6E]">1.080.000 VNĐ</span>
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-3">
                <Shield className="w-4 h-4 text-gray-500" />
                <span>Thanh toán được bảo mật SSL</span>
              </div>
              <div className="flex items-center space-x-3">
                <Lock className="w-4 h-4 text-gray-500" />
                <span>Mã hóa 256-bit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Button at Bottom */}
        <div className="max-w-5xl mx-auto mt-8">
          <Link
            to="/confirmation"
            className="block w-full bg-[#FDCB6E] text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-[#E6B15C] transition-colors text-center"
          >
            Tiếp tục đến xác nhận
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;