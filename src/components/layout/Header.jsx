import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, Settings, HelpCircle, LogOut, ChevronDown } from 'lucide-react';

const Header = ({ currentPage = 'Dashboard' }) => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };

    if (isUserDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserDropdownOpen]);

  // User Dropdown Component
  const UserDropdown = () => (
    <div className="relative">
      <button
        ref={dropdownRef}
        onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
        className="flex items-center space-x-2 hover:bg-gray-50 rounded-lg p-2 transition-all duration-200"
      >
        <div className="w-10 h-10 bg-[#FDCB6E] rounded-full flex items-center justify-center text-white font-semibold">
          N
        </div>
        <div className="hidden md:block text-left">
          <div className="text-sm font-medium text-gray-900">Welcome, Nguyên</div>
          <div className="text-xs text-gray-500">lenguyentime16@gmail.com</div>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isUserDropdownOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isUserDropdownOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
          {/* User Info Header */}
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#FDCB6E] rounded-full flex items-center justify-center text-white font-semibold text-lg">
                N
              </div>
              <div>
                <p className="font-medium text-gray-900">Welcome, Nguyên</p>
                <p className="text-sm text-gray-500">lenguyentime16@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
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

          {/* Divider */}
          <div className="border-t border-gray-100 my-2"></div>

          {/* Help & Support */}
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
              <span className="text-gray-700 font-medium">Need help?</span>
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-2"></div>

          {/* Logout */}
          <div className="px-4 py-2">
            <button className="w-full bg-[#FDCB6E] text-white rounded-lg py-3 px-4 font-medium hover:bg-[#E6B15C] transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm hover:shadow-md">
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-[#FDCB6E]">Edumentors</h1>
        </div>

        {/* Centered Navigation */}
        <div className="flex-1 flex justify-center">
          <nav className="flex space-x-8">
            <Link
              to="/dashboard"
              className={`relative pb-2 transition-all duration-300 ${currentPage === 'Dashboard'
                ? 'text-[#FDCB6E] font-medium'
                : 'text-gray-600 hover:text-[#FDCB6E]'
                } ${currentPage === 'Dashboard'
                  ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#FDCB6E] after:transform after:scale-x-100'
                  : 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#FDCB6E] after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'
                }`}
            >
              Dashboard
            </Link>
            <Link
              to="/find-tutor"
              className={`relative pb-2 transition-all duration-300 ${currentPage === 'Find a tutor'
                ? 'text-[#FDCB6E] font-medium'
                : 'text-gray-600 hover:text-[#FDCB6E]'
                } ${currentPage === 'Find a tutor'
                  ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#FDCB6E] after:transform after:scale-x-100'
                  : 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#FDCB6E] after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'
                }`}
            >
              Find a tutor
            </Link>
            <Link
              to="/my-bookings"
              className={`relative pb-2 transition-all duration-300 ${currentPage === 'My Bookings'
                ? 'text-[#FDCB6E] font-medium'
                : 'text-gray-600 hover:text-[#FDCB6E]'
                } ${currentPage === 'My Bookings'
                  ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#FDCB6E] after:transform after:scale-x-100'
                  : 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#FDCB6E] after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'
                }`}
            >
              My Bookings
            </Link>
            <Link
              to="/messages"
              className={`relative pb-2 transition-all duration-300 ${currentPage === 'Messages'
                ? 'text-[#FDCB6E] font-medium'
                : 'text-gray-600 hover:text-[#FDCB6E]'
                } ${currentPage === 'Messages'
                  ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#FDCB6E] after:transform after:scale-x-100'
                  : 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#FDCB6E] after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'
                }`}
            >
              Messages
            </Link>
          </nav>
        </div>

        {/* Right Side - User Actions */}
        <div className="flex-1 flex items-center justify-end space-x-4">
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-[#FDCB6E] transition-colors duration-200" />
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
