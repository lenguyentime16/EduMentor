import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    ArrowLeft,
    Calendar,
    Clock,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import Header from '../components/layout/Header';

const Booking = () => {
    const location = useLocation();
    const tutorData = location.state?.tutor || {
        name: "Nguyễn Thị Hương",
        subject: "Toán học"
    };

    const [selectedDate, setSelectedDate] = useState(new Date(2025, 8, 18)); // September 18, 2025
    const [selectedTime, setSelectedTime] = useState('9:00 AM');
    const [currentMonth, setCurrentMonth] = useState(new Date(2025, 8, 1)); // September 2025
    const [viewMode, setViewMode] = useState('Month'); // Week or Month
    const [duration, setDuration] = useState('1 giờ');
    const [subject, setSubject] = useState('Toán học');
    const [specialNotes, setSpecialNotes] = useState('');

    // Available times for the selected date
    const availableTimes = [
        '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM',
        '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
    ];

    const subjects = ['Toán học', 'Vật lý', 'Hóa học', 'Sinh học', 'Tiếng Anh'];
    const durations = ['1 giờ', '1.5 giờ', '2 giờ'];

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

    const renderCalendar = () => {
        const daysInMonth = getDaysInMonth(currentMonth);
        const firstDay = getFirstDayOfMonth(currentMonth);
        const days = [];
        const dayNames = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

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
                    className={`p-2 text-center text-sm font-medium rounded-lg transition-all duration-200 ${isSelected
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
            <Header currentPage="Booking" />

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
                                <h2 className="text-lg font-semibold text-gray-900">Chọn ngày và giờ</h2>
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
                                        {currentMonth.toLocaleDateString('vi-VN', { month: 'long', year: 'numeric' })}
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
                                        className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${viewMode === 'Week'
                                            ? 'bg-white text-[#FDCB6E]'
                                            : 'bg-orange-400 text-white hover:bg-orange-500'
                                            }`}
                                    >
                                        Tuần
                                    </button>
                                    <button
                                        onClick={() => setViewMode('Month')}
                                        className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${viewMode === 'Month'
                                            ? 'bg-white text-[#FDCB6E]'
                                            : 'bg-orange-400 text-white hover:bg-orange-500'
                                            }`}
                                    >
                                        Tháng
                                    </button>
                                </div>

                                {/* Calendar Grid */}
                                {renderCalendar()}

                                {/* Legend */}
                                <div className="flex items-center space-x-4 mt-4 text-sm">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-orange-200 rounded-full"></div>
                                        <span className="text-white">Hôm nay</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                        <span className="text-white">Đã chọn</span>
                                    </div>
                                </div>
                            </div>

                            {/* Available Times */}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-medium text-gray-900">
                                        Giờ có sẵn - {formatDate(selectedDate)}
                                    </h3>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => setViewMode('Week')}
                                            className={`px-3 py-1 rounded text-sm font-medium transition-colors duration-200 ${viewMode === 'Week'
                                                ? 'bg-gray-600 text-white'
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                }`}
                                        >
                                            Tuần
                                        </button>
                                        <button
                                            onClick={() => setViewMode('Month')}
                                            className={`px-3 py-1 rounded text-sm font-medium transition-colors duration-200 ${viewMode === 'Month'
                                                ? 'bg-[#FDCB6E] text-white'
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                }`}
                                        >
                                            Tháng
                                        </button>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-600 mb-4">Thời gian hiển thị theo múi giờ địa phương (ICT)</p>

                                <div className="grid grid-cols-2 gap-3">
                                    {availableTimes.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`p-3 text-center rounded-lg border transition-all duration-200 ${selectedTime === time
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
                                <h2 className="text-lg font-semibold text-gray-900">Chi tiết buổi học</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Subject/Topic */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Môn học
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
                                        Thời lượng
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
                                    Ghi chú đặc biệt (Tùy chọn)
                                </label>
                                <textarea
                                    value={specialNotes}
                                    onChange={(e) => setSpecialNotes(e.target.value)}
                                    placeholder="Có chủ đề cụ thể nào bạn muốn tập trung vào không..."
                                    rows={4}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-[#FDCB6E] outline-none transition-all duration-200 resize-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Booking Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 sticky top-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">Tóm tắt đặt lịch</h3>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Gia sư:</span>
                                    <span className="font-medium text-gray-900">{tutorData.name}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-600">Ngày:</span>
                                    <span className="font-medium text-gray-900">{formatDisplayDate(selectedDate)}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-600">Giờ:</span>
                                    <span className="font-medium text-gray-900">{selectedTime}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-600">Thời lượng:</span>
                                    <span className="font-medium text-gray-900">{duration.replace(' giờ', 'g')}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-600">Môn học:</span>
                                    <div className="flex items-center space-x-2">
                                        <span className="bg-[#FDCB6E] text-white text-xs px-2 py-1 rounded">{subject}</span>
                                        <span className="text-blue-500">🔗</span>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t pt-4 mb-6">
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-600">Giá theo giờ:</span>
                                    <span className="font-medium text-gray-900">1,035,000đ</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-600">Thời lượng:</span>
                                    <span className="font-medium text-gray-900">{duration.replace(' giờ', 'g')}</span>
                                </div>
                                <div className="flex justify-between text-lg font-semibold">
                                    <span className="text-gray-900">Tổng:</span>
                                    <span className="text-gray-900">1,035,000đ</span>
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
                                            hourlyRate: 1035000,
                                            total: 1035000,
                                            notes: specialNotes
                                        }
                                    }}
                                    className="block"
                                >
                                    <button className="w-full bg-[#FDCB6E] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#E6B862] transition-colors duration-200">
                                        Đặt buổi học
                                    </button>
                                </Link>

                                <button className="w-full text-[#FDCB6E] py-2 px-4 rounded-lg font-medium hover:bg-orange-50 transition-colors duration-200">
                                    Đổi lịch hiện có
                                </button>

                                <button className="w-full text-red-500 py-2 px-4 rounded-lg font-medium hover:bg-red-50 transition-colors duration-200">
                                    Hủy đặt lịch
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