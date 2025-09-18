import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    ArrowLeft, 
    Calendar, 
    Clock,
    ChevronLeft,
    ChevronRight,
    Bell,
    User,
    ChevronDown,
    Settings,
    HelpCircle,
    LogOut
} from 'lucide-react';
import { useRef, useEffect } from 'react';

const Booking = () => {
    const location = useLocation();
    const tutorData = location.state?.tutor || {
        name: "Sarah Miller",
        subject: "Mathematics"
    };

    const [selectedDate, setSelectedDate] = useState(new Date(2025, 8, 18)); // September 18, 2025
    const [selectedTime, setSelectedTime] = useState('9:00 AM');
    const [currentMonth, setCurrentMonth] = useState(new Date(2025, 8, 1)); // September 2025
    const [viewMode, setViewMode] = useState('Month'); // Week or Month
    const [duration, setDuration] = useState('1 hour');
    const [subject, setSubject] = useState('Mathematics');
    const [specialNotes, setSpecialNotes] = useState('');
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Available times for the selected date
    const availableTimes = [
        '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', 
        '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
    ];

    const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'];
    const durations = ['1 hour', '1.5 hours', '2 hours'];

    // Calendar functions
    const getDaysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const goToPrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const goToNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const isToday = (day) => {
        const today = new Date();
        return day === today.getDate() && 
               currentMonth.getMonth() === today.getMonth() && 
               currentMonth.getFullYear() === today.getFullYear();
    };

    const isSelectedDate = (day) => {
        return day === selectedDate.getDate() && 
               currentMonth.getMonth() === selectedDate.getMonth() && 
               currentMonth.getFullYear() === selectedDate.getFullYear();
    };

    const handleDateSelect = (day) => {
        setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('vi-VN', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    const formatDisplayDate = (date) => {
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric'
        });
    };

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
        <div ref={dropdownRef} className="relative">
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
                            <span className="text-gray-700 font-medium">Thông tin cá nhân</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150">
                            <Settings className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-700 font-medium">Cài đặt tài khoản</span>
                        </button>
                    </div>

                    <div className="border-t border-gray-100 my-2"></div>

                    <div className="py-2">
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-150">
                            <span className="text-gray-700 font-medium">Câu hỏi thường gặp</span>
                        </button>
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-150">
                            <span className="text-gray-700 font-medium">Điều khoản và điều kiện</span>
                        </button>
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-150">
                            <span className="text-gray-700 font-medium">Chính sách bảo mật</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150">
                            <HelpCircle className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-700 font-medium">Trợ giúp và hỗ trợ</span>
                        </button>
                    </div>

                    <div className="border-t border-gray-100 my-2"></div>

                    <div className="px-4 py-2">
                        <button className="w-full bg-[#FDF3E1] text-[#FDCB6E] rounded-lg py-3 px-4 font-medium hover:bg-[#FCF0D0] transition-all duration-200 flex items-center justify-center space-x-2">
                            <LogOut className="w-4 h-4" />
                            <span>Đăng xuất</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );

    const renderCalendar = () => {
        const daysInMonth = getDaysInMonth(currentMonth);
        const firstDay = getFirstDayOfMonth(currentMonth);
        const days = [];
        const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

        // Add day headers
        const dayHeaders = dayNames.map(day => (
            <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
            </div>
        ));

        // Add empty cells for days before month starts
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="p-2"></div>);
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const isCurrentDay = isToday(day);
            const isSelected = isSelectedDate(day);
            
            days.push(
                <button
                    key={day}
                    onClick={() => handleDateSelect(day)}
                    className={`p-2 text-center text-sm font-medium rounded-lg transition-all duration-200 ${
                        isSelected 
                            ? 'bg-[#FDCB6E] text-white' 
                            : isCurrentDay 
                                ? 'bg-orange-200 text-[#FDCB6E]'
                                : 'hover:bg-gray-100 text-gray-700'
                    }`}
                >
                    {day}
                </button>
            );
        }

        return (
            <div className="grid grid-cols-7 gap-1">
                {dayHeaders}
                {days}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-[#FDCB6E]">Edumentor</div>
                    
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
            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Edumentor</h1>
                    <p className="text-gray-600">Book your tutoring session</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Section - Date & Time Selection */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Select Date & Time */}
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center space-x-2 mb-6">
                                <Calendar className="w-5 h-5 text-[#FDCB6E]" />
                                <h2 className="text-lg font-semibold text-gray-900">Select Date & Time</h2>
                            </div>

                            {/* Calendar */}
                            <div className="bg-[#FDCB6E] rounded-lg p-6 mb-6">
                                {/* Calendar Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <button 
                                        onClick={goToPrevMonth}
                                        className="p-2 hover:bg-orange-400 rounded-lg transition-colors duration-200"
                                    >
                                        <ChevronLeft className="w-5 h-5 text-white" />
                                    </button>
                                    
                                    <h3 className="text-lg font-semibold text-white">
                                        {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                    </h3>
                                    
                                    <button 
                                        onClick={goToNextMonth}
                                        className="p-2 hover:bg-orange-400 rounded-lg transition-colors duration-200"
                                    >
                                        <ChevronRight className="w-5 h-5 text-white" />
                                    </button>
                                </div>

                                {/* View Mode Selector */}
                                <div className="flex space-x-2 mb-4">
                                    <button
                                        onClick={() => setViewMode('Week')}
                                        className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                                            viewMode === 'Week' 
                                                ? 'bg-white text-[#FDCB6E]' 
                                                : 'bg-orange-400 text-white hover:bg-orange-500'
                                        }`}
                                    >
                                        Week
                                    </button>
                                    <button
                                        onClick={() => setViewMode('Month')}
                                        className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                                            viewMode === 'Month' 
                                                ? 'bg-white text-[#FDCB6E]' 
                                                : 'bg-orange-400 text-white hover:bg-orange-500'
                                        }`}
                                    >
                                        Month
                                    </button>
                                </div>

                                {/* Calendar Grid */}
                                {renderCalendar()}

                                {/* Legend */}
                                <div className="flex items-center space-x-4 mt-4 text-sm">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-orange-200 rounded-full"></div>
                                        <span className="text-white">Today</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                        <span className="text-white">Selected</span>
                                    </div>
                                </div>
                            </div>

                            {/* Available Times */}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-medium text-gray-900">
                                        Available Times - {formatDate(selectedDate)}
                                    </h3>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => setViewMode('Week')}
                                            className={`px-3 py-1 rounded text-sm font-medium transition-colors duration-200 ${
                                                viewMode === 'Week' 
                                                    ? 'bg-gray-600 text-white' 
                                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                            }`}
                                        >
                                            Week
                                        </button>
                                        <button
                                            onClick={() => setViewMode('Month')}
                                            className={`px-3 py-1 rounded text-sm font-medium transition-colors duration-200 ${
                                                viewMode === 'Month' 
                                                    ? 'bg-[#FDCB6E] text-white' 
                                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                            }`}
                                        >
                                            Month
                                        </button>
                                    </div>
                                </div>
                                
                                <p className="text-sm text-gray-600 mb-4">Times shown in your local timezone (EST)</p>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    {availableTimes.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`p-3 text-center rounded-lg border transition-all duration-200 ${
                                                selectedTime === time
                                                    ? 'bg-[#FDCB6E] text-white border-[#FDCB6E]'
                                                    : 'bg-white text-gray-700 border-gray-300 hover:border-[#FDCB6E] hover:bg-orange-50'
                                            }`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Session Details */}
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center space-x-2 mb-6">
                                <Clock className="w-5 h-5 text-[#FDCB6E]" />
                                <h2 className="text-lg font-semibold text-gray-900">Session Details</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Subject/Topic */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject/Topic
                                    </label>
                                    <select
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-[#FDCB6E] outline-none transition-all duration-200"
                                    >
                                        {subjects.map((subj) => (
                                            <option key={subj} value={subj}>{subj}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Duration */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Duration
                                    </label>
                                    <select
                                        value={duration}
                                        onChange={(e) => setDuration(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-[#FDCB6E] outline-none transition-all duration-200"
                                    >
                                        {durations.map((dur) => (
                                            <option key={dur} value={dur}>{dur}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Special Notes */}
                            <div className="mt-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Special Notes (Optional)
                                </label>
                                <textarea
                                    value={specialNotes}
                                    onChange={(e) => setSpecialNotes(e.target.value)}
                                    placeholder="Any specific topics or areas you'd like to focus on..."
                                    rows={4}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-[#FDCB6E] outline-none transition-all duration-200 resize-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Booking Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 sticky top-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">Booking Summary</h3>
                            
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Tutor:</span>
                                    <span className="font-medium text-gray-900">{tutorData.name}</span>
                                </div>
                                
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Date:</span>
                                    <span className="font-medium text-gray-900">{formatDisplayDate(selectedDate)}</span>
                                </div>
                                
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Time:</span>
                                    <span className="font-medium text-gray-900">{selectedTime}</span>
                                </div>
                                
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Duration:</span>
                                    <span className="font-medium text-gray-900">{duration.replace(' hour', 'h')}</span>
                                </div>
                                
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subject:</span>
                                    <div className="flex items-center space-x-2">
                                        <span className="bg-[#FDCB6E] text-white text-xs px-2 py-1 rounded">{subject}</span>
                                        <span className="text-blue-500">🔗</span>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t pt-4 mb-6">
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-600">Hourly Rate:</span>
                                    <span className="font-medium text-gray-900">$45</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-600">Duration:</span>
                                    <span className="font-medium text-gray-900">{duration.replace(' hour', 'h')}</span>
                                </div>
                                <div className="flex justify-between text-lg font-semibold">
                                    <span className="text-gray-900">Total:</span>
                                    <span className="text-gray-900">$45</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Link 
                                    to="/payment" 
                                    state={{ 
                                        booking: {
                                            tutor: tutorData.name,
                                            date: formatDisplayDate(selectedDate),
                                            time: selectedTime,
                                            duration: duration,
                                            subject: subject,
                                            hourlyRate: 45,
                                            total: 45,
                                            notes: specialNotes
                                        }
                                    }}
                                    className="block"
                                >
                                    <button className="w-full bg-[#FDCB6E] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#E6B862] transition-colors duration-200">
                                        Book Session
                                    </button>
                                </Link>
                                
                                <button className="w-full text-[#FDCB6E] py-2 px-4 rounded-lg font-medium hover:bg-orange-50 transition-colors duration-200">
                                    Reschedule Existing
                                </button>
                                
                                <button className="w-full text-red-500 py-2 px-4 rounded-lg font-medium hover:bg-red-50 transition-colors duration-200">
                                    Cancel Booking
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;