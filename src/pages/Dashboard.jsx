import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bell, ChevronLeft, ChevronRight, Calendar, Clock, User, Settings, HelpCircle, LogOut, ChevronDown } from 'lucide-react';
import Button from '../components/ui/Button';

const Dashboard = () => {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 6, 24)); // July 24, 2025
    const [selectedDate, setSelectedDate] = useState(24);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Calendar helper functions
    const getDaysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

    const renderCalendar = () => {
        const daysInMonth = getDaysInMonth(currentDate);
        const firstDay = getFirstDayOfMonth(currentDate);
        const days = [];

        // Adjust firstDay to match Monday as first day (0 = Sunday, 1 = Monday, etc.)
        const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

        // Previous month's trailing days
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
        const prevMonthDays = prevMonth.getDate();

        for (let i = adjustedFirstDay - 1; i >= 0; i--) {
            days.push(
                <div
                    key={`prev-${prevMonthDays - i}`}
                    className="h-16 flex items-center justify-center text-gray-400 text-sm font-medium border-r border-b border-gray-200 bg-gray-50 last:border-r-0"
                >
                    {prevMonthDays - i}
                </div>
            );
        }

        // Current month's days
        for (let day = 1; day <= daysInMonth; day++) {
            const isSelected = day === selectedDate;
            const isToday = day === 24; // Assuming today is 24th for demo

            days.push(
                <div
                    key={day}
                    onClick={() => setSelectedDate(day)}
                    className={`h-16 flex items-center justify-center cursor-pointer text-sm font-medium transition-all duration-200 border-r border-b border-gray-200 last:border-r-0 relative ${isSelected
                        ? 'bg-blue-50 text-blue-600'
                        : isToday
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                >
                    <span className={`${isSelected ? 'bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold' : ''}`}>
                        {day}
                    </span>
                </div>
            );
        }

        // Next month's leading days to fill the grid
        const totalCells = Math.ceil((adjustedFirstDay + daysInMonth) / 7) * 7;
        const remainingCells = totalCells - (adjustedFirstDay + daysInMonth);

        for (let day = 1; day <= remainingCells; day++) {
            days.push(
                <div
                    key={`next-${day}`}
                    className="h-16 flex items-center justify-center text-gray-400 text-sm font-medium border-r border-b border-gray-200 bg-gray-50 last:border-r-0"
                >
                    {day}
                </div>
            );
        }

        return days;
    };

    const navigateMonth = (direction) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentDate(prev => {
                const newDate = new Date(prev);
                newDate.setMonth(prev.getMonth() + direction);
                return newDate;
            });
            setIsTransitioning(false);
        }, 150);
    };

    const goToToday = () => {
        setCurrentDate(new Date(2025, 6, 24)); // July 24, 2025
        setSelectedDate(24);
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

    // UserDropdown Component
    const UserDropdown = () => (
        <div
            ref={dropdownRef}
            className="relative"
        >
            <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="flex items-center space-x-2 hover:bg-gray-50 rounded-lg p-2 transition-all duration-200"
            >
                <div className="w-10 h-10 bg-[#FDCB6E] rounded-full flex items-center justify-center text-white font-semibold">
                    N
                </div>
                <div className="text-left">
                    <p className="text-sm font-medium text-gray-900">Welcome, Nguyên</p>
                    <p className="text-xs text-gray-500">lenguyentime16@gmail.com</p>
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
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-[#FDCB6E]">Edumentors</h1>
                    </div>

                    {/* Centered Navigation */}
                    <div className="flex-1 flex justify-center">
                        <nav className="flex space-x-8">
                            <a href="#" className="text-[#FDCB6E] font-medium border-b-2 border-[#FDCB6E] pb-2">Dashboard</a>
                            <Link to="/find-tutor" className="text-gray-600 hover:text-[#FDCB6E] transition-colors">Find a tutor</Link>
                            <Link to="/my-bookings" className="text-gray-600 hover:text-[#FDCB6E] transition-colors">My Bookings</Link>
                            <a href="#" className="text-gray-600 hover:text-[#FDCB6E] transition-colors">Messages</a>
                        </nav>
                    </div>

                    {/* Right Side - User Actions */}
                    <div className="flex-1 flex items-center justify-end space-x-4">
                        <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-[#FDCB6E] transition-colors duration-200" />
                        <UserDropdown />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex">
                {/* Left Side - Calendar */}
                <div className="flex-1 p-8">
                    <div className="bg-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900">My Schedule</h2>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => navigateMonth(-1)}
                                        className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110"
                                    >
                                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                                    </button>
                                    <span className="text-lg font-medium text-gray-900 min-w-[160px] text-center">
                                        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                                    </span>
                                    <button
                                        onClick={() => navigateMonth(1)}
                                        className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110"
                                    >
                                        <ChevronRight className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>
                                <Button
                                    onClick={goToToday}
                                    className="bg-[#FDCB6E] hover:bg-[#E6B15C] text-white text-sm px-4 py-2 transition-all duration-200 hover:shadow-lg"
                                >
                                    Today
                                </Button>
                            </div>
                        </div>

                        {/* Calendar Grid */}
                        <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
                            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                {/* Day headers */}
                                <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
                                    {dayNames.map(day => (
                                        <div key={day} className="h-14 flex items-center justify-center text-sm font-semibold text-gray-600 border-r border-gray-200 last:border-r-0">
                                            {day}
                                        </div>
                                    ))}
                                </div>
                                {/* Calendar days grid */}
                                <div className="grid grid-cols-7 bg-white">
                                    {renderCalendar()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Action Centre & Upcoming Sessions */}
                <div className="w-80 p-6 space-y-6">
                    {/* Action Centre */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Action centre</h3>
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Calendar className="w-8 h-8 text-gray-400" />
                            </div>
                            <p className="text-gray-600 font-medium">No action required</p>
                            <p className="text-gray-500 text-sm mt-1">You're all set for now.</p>
                        </div>
                    </div>

                    {/* Upcoming Sessions */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Upcoming sessions</h3>
                            <a href="#" className="text-[#FDCB6E] text-sm font-medium hover:text-[#E6B15C]">See all</a>
                        </div>
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-gray-400" />
                            </div>
                            <p className="text-gray-600 font-medium">No sessions booked</p>
                            <p className="text-gray-500 text-sm mt-1 mb-4">Your booked sessions will appear here</p>
                            <Link to="/find-tutor">
                                <Button className="bg-[#FDCB6E] hover:bg-[#E6B15C] text-white text-sm px-4 py-2">
                                    Browse Tutors
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Promotional Cards */}
                    <div className="space-y-4">
                        {/* Amazon Gift Card */}
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-4 text-white">
                            <h4 className="font-semibold mb-2">Get a £50 Amazon Gift Card</h4>
                            <p className="text-sm text-purple-100 mb-3">when you refer a friend</p>
                            <Button className="bg-white text-purple-600 hover:bg-gray-100 text-sm px-4 py-2">
                                Learn more
                            </Button>
                        </div>

                        {/* GCSE Essays Feedback */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-4 text-white">
                            <h4 className="font-semibold mb-2">Get feedback on your GCSE ESSAYS</h4>
                            <p className="text-sm text-blue-100 mb-3">MarkMyGCSE</p>
                            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-sm px-4 py-2">
                                Try now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;