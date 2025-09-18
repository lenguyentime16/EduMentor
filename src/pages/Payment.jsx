import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, User, Settings, HelpCircle, LogOut, Bell, ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state?.booking || {
    tutor: "Sarah Miller",
    date: "Dec 15",
    time: "9:00 AM",
    duration: "1h",
    subject: "Mathematics",
    hourlyRate: 45,
    total: 45,
    notes: ""
  };

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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
          <Link to="/my-bookings" className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </Link>
        </div>

        {/* Payment Header */}
        <div className="text-center mb-8">
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
          {/* Left Side - Session Summary */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Session Summary</h2>
            <p className="text-gray-600 mb-8">Review your booking details</p>

            {/* Tutor Info */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-[#FDCB6E] rounded-full flex items-center justify-center text-white font-bold text-xl">
                {bookingData.tutor.split(' ').map(name => name[0]).join('')}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{bookingData.tutor}</h3>
                <div className="flex items-center space-x-1 text-sm text-gray-600 mb-1">
                  <span className="text-yellow-400">★</span>
                  <span>4.9 (127 reviews)</span>
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
                  <p className="font-semibold text-gray-900">Date</p>
                  <p className="text-gray-600">{bookingData.date}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Time</p>
                  <p className="text-gray-600">{bookingData.time} ({bookingData.duration})</p>
                </div>
              </div>
            </div>

            {/* Continue to Payment Button */}
            <Link to="/payment-method" className="block w-full bg-[#FDCB6E] text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-[#E6B15C] transition-colors text-center">
              Continue to Payment
            </Link>
          </div>

          {/* Right Side - Order Summary */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Order Summary</h2>

            {/* Session Info */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Session:</span>
                <span className="font-semibold text-gray-900">{bookingData.subject}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Duration:</span>
                <span className="font-semibold text-gray-900">{bookingData.duration.replace('h', ' hour')}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Rate:</span>
                <span className="font-semibold text-gray-900">${bookingData.hourlyRate}/hour</span>
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
                <span className="font-semibold text-gray-900">${bookingData.total}</span>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-gray-900">Total:</span>
                  <span className="text-xl font-semibold text-[#FDCB6E]">${bookingData.total}</span>
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-[#FDCB6E] text-[#FDCB6E] focus:ring-[#FDCB6E]" checked readOnly />
                <span>SSL Secured Payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-[#FDCB6E] text-[#FDCB6E] focus:ring-[#FDCB6E]" checked readOnly />
                <span>256-bit Encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;