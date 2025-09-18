import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, CreditCard, Shield, Lock, Bell, ChevronDown, User, Settings, HelpCircle, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const PaymentMethod = () => {
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("credit-card");
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
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

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // User Dropdown Component
  const UserDropdown = () => (
    <div
      ref={dropdownRef}
      className="relative"
    >
      <button
        onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
        className="flex items-center space-x-2 hover:bg-gray-50 rounded-lg p-2 transition-all duration-200"
      >
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
          N
        </div>
        <div className="hidden md:block text-left">
          <div className="text-sm font-medium text-gray-900">Welcome, Nguyên</div>
          <div className="text-xs text-gray-500">lenguyentime16@gmail.com</div>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isUserDropdownOpen ? 'rotate-180' : ''}`} />
      </button>

      {isUserDropdownOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                N
              </div>
              <div>
                <p className="font-medium text-gray-900">Welcome, Nguyên</p>
                <p className="text-sm text-gray-500">lenguyentime16@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="py-2">
            <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150">
              <User className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Personal Info</span>
            </button>
            <button 
              onClick={() => {
                setIsUserDropdownOpen(false);
                navigate('/account-settings');
              }}
              className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150"
            >
              <Settings className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Account settings</span>
            </button>
          </div>

          <div className="border-t border-gray-100 my-2"></div>

          <div className="py-2">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-150">
              <span className="text-gray-700 font-medium">FAQs</span>
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-150">
              <span className="text-gray-700 font-medium">Terms and Conditions</span>
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-150">
              <span className="text-gray-700 font-medium">Privacy Policy</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150">
              <HelpCircle className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Help & Support</span>
            </button>
          </div>

          <div className="border-t border-gray-100 my-2"></div>

          <div className="px-4 py-2">
            <button className="w-full bg-[#FDF3E1] text-[#FDCB6E] rounded-lg py-3 px-4 font-medium hover:bg-[#FCF0D0] transition-all duration-200 flex items-center justify-center space-x-2">
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const handleCardInfoChange = (field, value) => {
    setCardInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleBillingInfoChange = (field, value) => {
    setBillingInfo(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-[#FDCB6E]">Edumentors</div>
          
            <nav className="flex items-center space-x-8">
              <Link to="/dashboard" className="text-gray-600 hover:text-[#FDCB6E] transition-colors">
                Dashboard
              </Link>
              <Link to="/find-tutor" className="text-gray-600 hover:text-[#FDCB6E] transition-colors">
                Find a tutor
              </Link>
              <Link to="/my-bookings" className="text-gray-600 hover:text-[#FDCB6E] transition-colors">
                My Bookings
              </Link>
              <Link to="/messages" className="text-gray-600 hover:text-[#FDCB6E] transition-colors">
                Messages
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-[#FDCB6E] transition-colors duration-200" />
              <UserDropdown />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/payment" className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Booking</span>
          </Link>
        </div>

        {/* Payment Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Complete Your Payment</h1>
          <p className="text-gray-600">Secure payment processing for your tutoring session</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#FDCB6E] text-white rounded-full flex items-center justify-center text-sm font-medium">
                1
              </div>
              <span className="text-[#FDCB6E] font-medium">Review</span>
            </div>
            <div className="w-12 h-px bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#FDCB6E] text-white rounded-full flex items-center justify-center text-sm font-medium">
                2
              </div>
              <span className="text-[#FDCB6E] font-medium">Payment Method</span>
            </div>
            <div className="w-12 h-px bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-sm font-medium">
                3
              </div>
              <span className="text-gray-600">Confirmation</span>
            </div>
          </div>
        </div>

        {/* Main Payment Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Side - Payment Method */}
          <div className="space-y-6">
            {/* Payment Method Selection Box */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Payment Method</h2>
              <p className="text-gray-600 mb-6">Choose your preferred payment method</p>

              {/* Payment Method Options */}
              <div className="space-y-4">
                {/* Credit/Debit Card */}
                <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedPaymentMethod === "credit-card" 
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
                  <span className="font-medium text-gray-900">Credit/Debit Card</span>
                </label>

                {/* PayPal */}
                <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedPaymentMethod === "paypal" 
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
                <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedPaymentMethod === "mobile-wallet" 
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
                  <span className="font-medium text-gray-900">Mobile Wallet</span>
                </label>

                {/* ZaloPay */}
                <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedPaymentMethod === "zalopay" 
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
                <label className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedPaymentMethod === "edumentor-credits" 
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
                  <span className="text-sm text-gray-600">$12.50 available</span>
                </label>
              </div>
            </div>

            {/* Card Information Box - Show only if credit card is selected */}
            {selectedPaymentMethod === "credit-card" && (
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Card Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
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
                      Save this card for future payments
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Billing Information Box - Show for all payment methods except EduMentor Credits */}
            {selectedPaymentMethod !== "edumentor-credits" && (
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Billing Information</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        placeholder="John"
                        value={billingInfo.firstName}
                        onChange={(e) => handleBillingInfoChange("firstName", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        value={billingInfo.lastName}
                        onChange={(e) => handleBillingInfoChange("lastName", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <input
                      type="text"
                      placeholder="123 Main Street"
                      value={billingInfo.address}
                      onChange={(e) => handleBillingInfoChange("address", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        placeholder="New York"
                        value={billingInfo.city}
                        onChange={(e) => handleBillingInfoChange("city", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <input
                        type="text"
                        placeholder="NY"
                        value={billingInfo.state}
                        onChange={(e) => handleBillingInfoChange("state", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                      <input
                        type="text"
                        placeholder="10001"
                        value={billingInfo.zipCode}
                        onChange={(e) => handleBillingInfoChange("zipCode", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <select
                      value={billingInfo.country}
                      onChange={(e) => handleBillingInfoChange("country", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent bg-white"
                    >
                      <option value="">Select country</option>
                      <option value="US">United States</option>
                      <option value="VN">Vietnam</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Order Summary */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 h-fit">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Order Summary</h2>

            {/* Session Info */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Session:</span>
                <span className="font-semibold text-gray-900">Mathematics - Calculus</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Duration:</span>
                <span className="font-semibold text-gray-900">1 hour</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Rate:</span>
                <span className="font-semibold text-gray-900">$45/hour</span>
              </div>
            </div>

            {/* Coupon Code */}
            <div className="mb-8">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Enter coupon code" 
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
                <span className="text-gray-600 font-medium">Subtotal:</span>
                <span className="font-semibold text-gray-900">$45</span>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-gray-900">Total:</span>
                  <span className="text-xl font-semibold text-[#FDCB6E]">$45</span>
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-3">
                <Shield className="w-4 h-4 text-gray-500" />
                <span>SSL Secured Payment</span>
              </div>
              <div className="flex items-center space-x-3">
                <Lock className="w-4 h-4 text-gray-500" />
                <span>256-bit Encryption</span>
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
            Continue to Confirmation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;