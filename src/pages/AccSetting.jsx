import React, { useState } from 'react';
import { User, Camera, Eye, EyeOff, Phone, Mail, MapPin } from 'lucide-react';
import Header from '../components/layout/Header';

const AccSetting = () => {
    const [formData, setFormData] = useState({
        phone: '+84 8434813802',
        email: 'lenguyentime16@gmail.com',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [showPasswords, setShowPasswords] = useState({
        current: false,
        new: false,
        confirm: false
    });

    const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const togglePasswordVisibility = (field) => {
        setShowPasswords(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    const handleSubmit = () => {
        // Xử lý lưu thay đổi
        alert('Thông tin đã được cập nhật thành công!');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header currentPage="Account Settings" />

            <div className="max-w-4xl mx-auto px-6 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Cài đặt tài khoản</h1>
                    <p className="text-gray-600">Cập nhật thông tin tài khoản của bạn và nhận Lưu thay đổi</p>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    {/* Sidebar and Content Container */}
                    <div className="flex">
                        {/* Left Sidebar */}
                        <div className="w-80 bg-gray-50 p-6 border-r border-gray-200">
                            <div className="space-y-6">
                                {/* Profile Section */}
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900 mb-4">Thông tin cá nhân</h3>
                                    <button className="w-full text-left py-3 px-4 bg-[#FDF3E1] text-[#FDCB6E] rounded-lg font-medium transition-all duration-200 hover:bg-[#FCF0D0]">
                                        Cài đặt tài khoản
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="flex-1 p-8">
                            <div className="max-w-2xl">
                                <h2 className="text-xl font-semibold text-gray-900 mb-6">Chi tiết tài khoản</h2>
                                <p className="text-gray-600 mb-8">Cập nhật thông tin tài khoản của bạn và nhận Lưu thay đổi</p>

                                <div className="space-y-6">
                                    {/* Phone Number */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            SỐ ĐIỆN THOẠI:
                                        </label>
                                        <div className="flex">
                                            <div className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">
                                                <div className="w-6 h-4 bg-red-500 mr-2"></div>
                                                <span className="text-sm text-gray-600">+84</span>
                                            </div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone.replace('+84 ', '')}
                                                onChange={handleInputChange}
                                                className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-[#FDCB6E] outline-none transition-all duration-200"
                                                placeholder="8434813802"
                                            />
                                        </div>
                                    </div>

                                    {/* Email Address */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ĐỊA CHỈ EMAIL:
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-[#FDCB6E] outline-none transition-all duration-200"
                                            placeholder="lenguyentime16@gmail.com"
                                        />
                                    </div>

                                    {/* Current Password */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            MẬT KHẨU CŨ:
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showPasswords.current ? "text" : "password"}
                                                name="currentPassword"
                                                value={formData.currentPassword}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-[#FDCB6E] outline-none transition-all duration-200"
                                                placeholder="Mật khẩu cũ"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => togglePasswordVisibility('current')}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                            >
                                                {showPasswords.current ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* New Password */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            MẬT KHẨU MỚI:
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showPasswords.new ? "text" : "password"}
                                                name="newPassword"
                                                value={formData.newPassword}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-[#FDCB6E] outline-none transition-all duration-200"
                                                placeholder="Mật khẩu mới"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => togglePasswordVisibility('new')}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                            >
                                                {showPasswords.new ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-2">Độ mạnh mật khẩu: Yếu</p>
                                    </div>

                                    {/* Confirm Password */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            NHẬP LẠI MẬT KHẨU MỚI:
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showPasswords.confirm ? "text" : "password"}
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-[#FDCB6E] outline-none transition-all duration-200"
                                                placeholder="Nhập lại mật khẩu mới"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => togglePasswordVisibility('confirm')}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                            >
                                                {showPasswords.confirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Newsletter Subscription */}
                                    <div className="border-t border-gray-200 pt-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-4">
                                            NEWSLETTERS:
                                        </label>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="newsletter"
                                                checked={isNewsletterSubscribed}
                                                onChange={(e) => setIsNewsletterSubscribed(e.target.checked)}
                                                className="w-4 h-4 text-[#FDCB6E] bg-gray-100 border-gray-300 rounded focus:ring-[#FDCB6E] focus:ring-2 transition-all duration-200"
                                            />
                                            <label htmlFor="newsletter" className="ml-3 text-sm text-gray-700">
                                                Đăng ký nhận bản tin
                                            </label>
                                        </div>
                                    </div>

                                    {/* Save Button */}
                                    <div className="pt-6">
                                        <button
                                            onClick={handleSubmit}
                                            className="w-full bg-[#FDCB6E] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#E6B15C] focus:ring-4 focus:ring-[#FDCB6E]/20 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            Lưu thay đổi
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccSetting;