import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Button from '../components/ui/Button';
import { ChevronLeft, ChevronRight, Calendar, Clock } from 'lucide-react';

const Dashboard = () => {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(today);
    const [selectedDate, setSelectedDate] = useState(today.getDate());
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Calendar helper functions
    const getDaysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const monthNames = [
        'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
        'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
    ];

 
    const dayNames = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

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
            const isToday = day === today.getDate() &&
                currentDate.getMonth() === today.getMonth() &&
                currentDate.getFullYear() === today.getFullYear();

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
        const today = new Date();
        setCurrentDate(today);
        setSelectedDate(today.getDate());
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Header currentPage="Dashboard" />

            {/* Main Content */}
            <div className="flex">
                {/* Left Side - Calendar */}
                <div className="flex-1 p-8">
                    <div className="bg-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900">Lịch trình của tôi</h2>
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

                                    Hôm nay
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
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Trung tâm thông báo</h3>
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Calendar className="w-8 h-8 text-gray-400" />
                            </div>
                            <p className="text-gray-600 font-medium">Không có thông báo</p>
                            <p className="text-gray-500 text-sm mt-1">Bạn đã hoàn thành tất cả.</p>
                        </div>
                    </div>

                    {/* Upcoming Sessions */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Buổi học sắp tới</h3>
                            <a href="#" className="text-[#FDCB6E] text-sm font-medium hover:text-[#E6B15C]">Xem tất cả</a>
                        </div>
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-gray-400" />
                            </div>
                            <p className="text-gray-600 font-medium">Chưa có buổi học nào</p>
                            <p className="text-gray-500 text-sm mt-1 mb-4">Các buổi học đã đặt sẽ hiển thị ở đây</p>
                            <Link to="/find-tutor">
                                <Button className="bg-[#FDCB6E] hover:bg-[#E6B15C] text-white text-sm px-4 py-2">
                                    Tìm gia sư
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Promotional Cards */}
                    <div className="space-y-4">
                        {/* Amazon Gift Card */}
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-4 text-white">
                            <h4 className="font-semibold mb-2">Nhận thẻ quà tặng 1.200.000đ</h4>
                            <p className="text-sm text-purple-100 mb-3">khi bạn giới thiệu bạn bè</p>
                            <Button className="bg-white text-purple-600 hover:bg-gray-100 text-sm px-4 py-2">
                                Learn more
                                Tìm hiểu thêm
                            </Button>
                        </div>

                        {/* GCSE Essays Feedback */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-4 text-white">
                            <h4 className="font-semibold mb-2">Nhận phản hồi cho bài luận của bạn</h4>
                            <p className="text-sm text-blue-100 mb-3">Dịch vụ chấm bài EduMentor</p>
                            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-sm px-4 py-2">

                                Thử ngay
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};