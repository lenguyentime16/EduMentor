import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, CheckCircle, Shield, Lock, Bell, User, LogOut, ChevronDown, Settings, HelpCircle } from 'lucide-react';

const Confirmation = () => {
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
            <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150">
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
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/payment-method" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Booking
        </Link>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Payment</h1>
          <p className="text-gray-600">Secure payment processing for your tutoring session</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            {/* Step 1 - Review (Completed) */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-[#FDCB6E] text-white rounded-full">
                <CheckCircle className="h-5 w-5" />
              </div>
              <span className="ml-3 text-sm font-medium text-gray-900">Review</span>
            </div>

            {/* Connector */}
            <div className="w-20 h-0.5 bg-[#FDCB6E] mx-4"></div>

            {/* Step 2 - Payment Method (Completed) */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-[#FDCB6E] text-white rounded-full">
                <CheckCircle className="h-5 w-5" />
              </div>
              <span className="ml-3 text-sm font-medium text-gray-900">Payment Method</span>
            </div>

            {/* Connector */}
            <div className="w-20 h-0.5 bg-[#FDCB6E] mx-4"></div>

            {/* Step 3 - Confirmation (Current) */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-[#FDCB6E] text-white rounded-full font-semibold">
                3
              </div>
              <span className="ml-3 text-sm font-medium text-[#FDCB6E]">Confirmation</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Confirm Payment Section */}
          <div className="lg:col-span-2 bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Confirm Payment</h2>
              <p className="text-gray-600">Review your payment details before completing</p>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing Address</h3>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-gray-900">
                  <p className="font-medium">John Doe</p>
                  <p>123 Main Street</p>
                  <p>New York, NY 10001</p>
                  <p>United States</p>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <div>
                  <h4 className="text-green-800 font-medium">Secure Payment</h4>
                  <p className="text-green-700 text-sm">Your payment information is encrypted and secure</p>
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
                Complete Payment - $45
              </div>
            </Link>
          </div>

          {/* Order Summary Sidebar */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 h-fit">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Session:</span>
                <span className="font-medium text-gray-900">Mathematics - Calculus</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium text-gray-900">1 hour</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Rate:</span>
                <span className="font-medium text-gray-900">$45/hour</span>
              </div>
            </div>

            {/* Coupon Code */}
            <div className="mb-6">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent text-sm"
                />
                <button className="px-4 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg hover:bg-gray-200 transition-colors">
                  <span className="text-gray-600 text-sm">Apply</span>
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span className="text-gray-900">$45</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-900">Total:</span>
                <span className="text-[#FDCB6E]">$45</span>
              </div>
            </div>

            {/* Security Features */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Shield className="h-4 w-4 mr-2" />
                SSL Secured Payment
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Lock className="h-4 w-4 mr-2" />
                256-bit Encryption
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;