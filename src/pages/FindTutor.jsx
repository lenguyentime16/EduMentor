import React, { useState } from 'react';
import { Search, Filter, Star, Clock, MapPin, ChevronDown, Heart, MessageCircle, Bell, User, Settings, HelpCircle, LogOut } from 'lucide-react';
import { useRef, useEffect } from 'react';
import Button from '../components/ui/Button';

const FindTutor = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('Tất cả');
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const [filters, setFilters] = useState({
        subject: '',
        level: '',
        price: '',
        rating: ''
    });
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

    // UserDropdown Component (same as Dashboard)
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

            {isUserDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
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
                            <span className="text-gray-700 font-medium">Need help?</span>
                        </button>
                    </div>
                    <div className="border-t border-gray-100 my-2"></div>
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

    // Sample tutor data
    const tutors = [
        {
            id: 1,
            name: 'Nguyễn Thị Hương',
            subject: 'Toán nâng cao lớp 12',
            rating: 4.9,
            reviews: 19,
            price: '380,000',
            location: 'Hà Nội',
            time: 'Thứ 2, 4, 6 - 19:00',
            experience: '5 năm KN',
            avatar: 'N',
            bgColor: 'bg-pink-500'
        },
        {
            id: 2,
            name: 'Trần Văn Minh',
            subject: 'Lập trình Python cơ bản',
            rating: 4.8,
            reviews: 24,
            price: '250,000',
            location: 'TP.HCM',
            time: 'Thứ 3, 5, 7 - 20:00',
            experience: '3 năm KN',
            avatar: 'T',
            bgColor: 'bg-blue-500'
        },
        {
            id: 3,
            name: 'Lê Thị Mai',
            subject: 'IELTS Speaking Band 7+',
            rating: 4.7,
            reviews: 31,
            price: '180,000',
            location: 'Đà Nẵng',
            time: 'Chủ nhật - 14:00',
            experience: '2 năm KN',
            avatar: 'L',
            bgColor: 'bg-green-500'
        }
    ];

    const subjects = ['Tất cả', 'Lớp học', 'Bài viết', 'Gia sư'];

    const TutorCard = ({ tutor }) => (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-start space-x-4">
                {/* Avatar */}
                <div className={`w-16 h-16 ${tutor.bgColor} rounded-full flex items-center justify-center text-white font-semibold text-xl`}>
                    {tutor.avatar}
                </div>

                {/* Tutor Info */}
                <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{tutor.name}</h3>
                            <p className="text-gray-600 font-medium">{tutor.subject}</p>
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                            <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
                        </button>
                    </div>

                    {/* Rating and Reviews */}
                    <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium text-gray-900">{tutor.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({tutor.reviews} đánh giá)</span>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-500">{tutor.experience}</span>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span>{tutor.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>{tutor.time}</span>
                        </div>
                    </div>

                    {/* Price and Actions */}
                    <div className="flex items-center justify-between">
                        <div className="text-[#FDCB6E] font-bold text-lg">
                            {tutor.price} VNĐ/giờ
                        </div>
                        <div className="flex space-x-2">
                            <button className="px-4 py-2 border border-[#FDCB6E] text-[#FDCB6E] rounded-lg hover:bg-[#FDCB6E] hover:text-white transition-all duration-200 font-medium">
                                Nhắn tin
                            </button>
                            <button className="px-4 py-2 bg-[#FDCB6E] text-white rounded-lg hover:bg-[#E6B15C] transition-all duration-200 font-medium">
                                Đặt lịch
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-40">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-[#FDCB6E]">Edumentors</h1>
                    </div>

                    {/* Centered Navigation */}
                    <div className="flex-1 flex justify-center">
                        <nav className="flex space-x-8">
                            <a href="/dashboard" className="text-gray-600 hover:text-[#FDCB6E] transition-colors">Dashboard</a>
                            <a href="#" className="text-[#FDCB6E] font-medium border-b-2 border-[#FDCB6E] pb-2">Find a tutor</a>
                            <a href="#" className="text-gray-600 hover:text-[#FDCB6E] transition-colors">My Bookings</a>
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
            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Search Section */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Tìm kiếm toàn diện</h1>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto relative mb-6">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm giáo viên, bạn học, lớp học giá và..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-[#FDCB6E] outline-none transition-all duration-200"
                            />
                        </div>
                    </div>

                    {/* Subject Tabs */}
                    <div className="flex justify-center mb-6">
                        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                            {subjects.map((subject) => (
                                <button
                                    key={subject}
                                    onClick={() => setActiveTab(subject)}
                                    className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${activeTab === subject
                                        ? 'bg-[#FDCB6E] text-white shadow-sm'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    {subject}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="flex justify-center space-x-4 mb-8">
                        <button
                            onClick={() => setFilters({ ...filters, subject: filters.subject ? '' : 'active' })}
                            className={`flex items-center space-x-2 px-4 py-3 rounded-lg border transition-all duration-200 ${filters.subject
                                ? 'bg-[#FFF3E0] border-[#FDCB6E] text-[#FDCB6E]'
                                : 'bg-white border-gray-300 text-gray-600 hover:border-[#FDCB6E] hover:text-[#FDCB6E]'
                                }`}
                        >
                            <Filter className="w-4 h-4" />
                            <span className="font-medium">Môn học</span>
                        </button>
                        <button
                            onClick={() => setFilters({ ...filters, level: filters.level ? '' : 'active' })}
                            className={`flex items-center space-x-2 px-4 py-3 rounded-lg border transition-all duration-200 ${filters.level
                                ? 'bg-[#FFF3E0] border-[#FDCB6E] text-[#FDCB6E]'
                                : 'bg-white border-gray-300 text-gray-600 hover:border-[#FDCB6E] hover:text-[#FDCB6E]'
                                }`}
                        >
                            <Filter className="w-4 h-4" />
                            <span className="font-medium">Trình độ</span>
                        </button>
                        <button
                            onClick={() => setFilters({ ...filters, price: filters.price ? '' : 'active' })}
                            className={`flex items-center space-x-2 px-4 py-3 rounded-lg border transition-all duration-200 ${filters.price
                                ? 'bg-[#FFF3E0] border-[#FDCB6E] text-[#FDCB6E]'
                                : 'bg-white border-gray-300 text-gray-600 hover:border-[#FDCB6E] hover:text-[#FDCB6E]'
                                }`}
                        >
                            <Filter className="w-4 h-4" />
                            <span className="font-medium">Giá cả</span>
                        </button>
                        <button
                            onClick={() => setFilters({ ...filters, rating: filters.rating ? '' : 'active' })}
                            className={`flex items-center space-x-2 px-4 py-3 rounded-lg border transition-all duration-200 ${filters.rating
                                ? 'bg-[#FFF3E0] border-[#FDCB6E] text-[#FDCB6E]'
                                : 'bg-white border-gray-300 text-gray-600 hover:border-[#FDCB6E] hover:text-[#FDCB6E]'
                                }`}
                        >
                            <Filter className="w-4 h-4" />
                            <span className="font-medium">Đánh giá</span>
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {/* Class Cards */}
                    <div className="lg:col-span-2 xl:col-span-3">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold text-gray-900">Lớp học (3)</h2>
                            <a href="#" className="text-[#FDCB6E] font-medium hover:text-[#E6B15C] transition-colors">Xem tất cả</a>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                            {tutors.map((tutor) => (
                                <TutorCard key={tutor.id} tutor={tutor} />
                            ))}
                        </div>
                    </div>

                    {/* Articles Section */}
                    <div className="lg:col-span-2 xl:col-span-3">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold text-gray-900">Bài viết (2)</h2>
                            <a href="#" className="text-[#FDCB6E] font-medium hover:text-[#E6B15C] transition-colors">Xem tất cả</a>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phương pháp học Toán hiệu quả cho học sinh THPT</h3>
                                <p className="text-gray-600 mb-4">bởi Nguyễn Thị Hương</p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span>2 ngày trước • 5 phút • 650 lượt xem</span>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Kinh nghiệm dạy lập trình cho người mới bắt đầu</h3>
                                <p className="text-gray-600 mb-4">bởi Trần Văn Minh</p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span>1 tuần trước • 8 phút • 1200 lượt xem</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Teachers Section */}
                    <div className="lg:col-span-2 xl:col-span-3">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold text-gray-900">Gia sư (3)</h2>
                            <a href="#" className="text-[#FDCB6E] font-medium hover:text-[#E6B15C] transition-colors">Xem tất cả</a>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {tutors.map((tutor) => (
                                <div key={`teacher-${tutor.id}`} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-all duration-300">
                                    <div className={`w-20 h-20 ${tutor.bgColor} rounded-full flex items-center justify-center text-white font-semibold text-2xl mx-auto mb-4`}>
                                        {tutor.avatar}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{tutor.name}</h3>
                                    <div className="flex items-center justify-center space-x-1 mb-2">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="text-sm font-medium text-gray-900">{tutor.rating}</span>
                                        <span className="text-sm text-gray-500">({tutor.reviews})</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">{tutor.experience}</p>
                                    <div className="flex space-x-2">
                                        <button className="flex-1 px-3 py-2 border border-[#FDCB6E] text-[#FDCB6E] rounded-lg hover:bg-[#FDCB6E] hover:text-white transition-all duration-200 text-sm font-medium">
                                            Đặt lịch
                                        </button>
                                        <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 text-sm font-medium">
                                            Nhắn tin
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindTutor;