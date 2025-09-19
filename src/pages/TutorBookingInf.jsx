import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Star,
    ArrowLeft,
    Check,
    MapPin,
    Clock,
    BookOpen,
    Award,
    Calendar,
    AlertCircle
} from 'lucide-react';
import Header from '../components/layout/Header';

const TutorBookingInf = () => {
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    // Hàm xử lý khi click nút đặt lịch học
    const handleBookingClick = () => {
        if (!selectedPackage) {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000); // Ẩn thông báo sau 3 giây
            return;
        }

        // Nếu đã chọn gói, chuyển hướng đến trang booking
        navigate('/booking', {
            state: {
                tutor: { name: tutor.name, subject: "Mathematics" },
                selectedPackage: selectedPackage
            }
        });
    };

    // Dữ liệu gia sư mẫu - trong ứng dụng thực tế sẽ được lấy dựa trên tutorId
    const tutor = {
        id: 1,
        name: "Oryna L.",
        avatar: "/tutor-profile-pic.png",
        rating: 4.8,
        reviewCount: 127,
        experience: "5 năm kinh nghiệm",
        languages: "Tiếng Anh, Tiếng Nga",
        location: "21 tuổi",
        about: "Xin chào! Tên tôi là Oryna và tôi là sinh viên ngành Kinh tế và Phát triển Bền vững tại trường đại học. Tuy nhiên, trong quá trình học, tôi đã tiếp xúc với nhiều môn học khác nhau như tiếng Anh, lịch sử, sinh học, v.v. Tôi đã dạy kèm cho các em nhỏ trong 3 năm với nhiều độ tuổi khác nhau (toán, sinh học, hóa học, vật lý). Tôi thực sự thích công việc này và nó giúp tôi tiếp tục việc học. Tôi luôn nhiệt tình giúp đỡ mọi người và trả lời mọi câu hỏi họ có thể có.",
        verified: true,
        pros: true,
        featured: true,
        qualifications: [
            { subject: "Môn học/Cố vấn", level: "Trình độ" },
            { subject: "Toán", level: "A Level Early Years, GCSE, KS2, KS1, KS3" },
            { subject: "Toán nâng cao", level: "GCSE" },
            { subject: "Khoa học", level: "Early Years, GCSE, KS1, KS2, KS3" },
            { subject: "Kinh tế", level: "A Level, GCSE" },
            { subject: "Sinh học", level: "Early Years, GCSE, KS1, KS2, KS3" },
            { subject: "Hóa học", level: "Early Years, GCSE, KS1, KS2, KS3" },
            { subject: "Vật lý", level: "Early Years, GCSE, KS1, KS2, KS3" },
            { subject: "Tiếng Đức", level: "Nâng cao" },
            { subject: "Chiến lược học tập", level: "Nâng cao" }
        ],
        packages: [
            { id: 1, duration: "2 buổi/tuần", sessions: 8, price: 400000, discounts: "Gói học thường xuyên, tiết kiệm chi phí" },
            { id: 2, duration: "3 buổi/tuần", sessions: 12, price: 500000, discounts: "Gói học chuyên sâu, hiệu quả cao" },
            { id: 3, duration: "1 buổi thử", sessions: 1, price: 100000, discounts: "Ưu đãi thử nghiệm cho học viên mới" },
            { id: 4, duration: "1 buổi đơn lẻ", sessions: 1, price: 150000, discounts: "Linh hoạt cho nhu cầu học tập" }
        ],
        reviews: [
            {
                id: 1,
                name: "Grace B.",
                rating: 5,
                comment: "Con tôi đã giỏi toán hơn nhờ Oryna, em hiểu nhiều hơn so với lúc cô ấy bắt đầu dạy."
            },
            {
                id: 2,
                name: "Margaret E.",
                rating: 5,
                comment: "Con gái tôi đã có trải nghiệm tích cực với Oryna. Các buổi dạy kèm được cấu trúc và hữu ích cho việc học tập sau này. Cảm ơn Oryna."
            }
        ],
        totalRating: 4.7,
        trustPilotReviews: [
            {
                name: "Gary R.",
                comment: "Gia sư này rất chuyên nghiệp và đến chuẩn bị đầy đủ. Tôi thực sự vui mừng khi thấy cô ấy đã học được những điều tôi chưa từng nghĩ đến. Đánh dấu cao hơn bất kỳ giáo viên nào khác ở trường, rất khuyến khích."
            },
            {
                name: "John M.",
                comment: "Đại diện cho nền tảng xuất sắc để khám phá và nâng cao giáo dục gia đình. Các gia sư được đào tạo kỹ lưỡng thông qua quy trình ứng dụng nghiêm ngặt để cung cấp dạy kèm xuất sắc cho con em bạn..."
            }
        ]
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Header currentPage="Find a tutor" />

            {/* Alert thông báo */}
            {showAlert && (
                <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5" />
                    <span>Hãy chọn gói học phí!</span>
                </div>
            )}

            {/* Nội dung chính */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Nút quay lại */}
                <Link to="/find-tutor" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Quay lại tìm kiếm
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Nội dung bên trái - Hồ sƠ gia sư */}
                    <div className="lg:col-span-2">
                        {/* Tutor Header */}
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
                            <div className="flex items-start space-x-6">
                                <div className="relative">
                                    <img
                                        src={tutor.avatar}
                                        alt={tutor.name}
                                        className="w-24 h-24 rounded-full object-cover"
                                        onError={(e) => {
                                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDgiIGN5PSI0OCIgcj0iNDgiIGZpbGw9IiNGNENCNkUiLz4KPHN2ZyB4PSIyNCIgeT0iMjQiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8cGF0aCBkPSJtMjAgNy0zIDEgMi00LTQgMnptLTIgMi0zIDEgMi00LTQgMnptLTEwIDEtMyAxIDItNC00IDJ6bS01IDYtMyAxIDItNC00IDJ6Ii8+Cjwvc3ZnPgo8L3N2Zz4K';
                                        }}
                                    />
                                    {tutor.verified && (
                                        <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                    )}
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <h1 className="text-2xl font-bold text-gray-900">{tutor.name}</h1>
                                        <div className="flex items-center space-x-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            <span className="text-sm font-medium text-gray-900">{tutor.rating}</span>
                                        </div>
                                        {tutor.verified && (
                                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Đã xác minh</span>
                                        )}
                                        {tutor.pros && (
                                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Chuyên gia</span>
                                        )}
                                        {tutor.featured && (
                                            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Nổi bật</span>
                                        )}
                                    </div>

                                    <p className="text-gray-600 mb-4">Nếu bạn cần đặt lịch học với tôi</p>

                                    <div className="grid grid-cols-3 gap-4 text-sm">
                                        <div className="flex items-center space-x-2">
                                            <Clock className="w-4 h-4 text-gray-400" />
                                            <span className="text-gray-600">{tutor.location}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <BookOpen className="w-4 h-4 text-gray-400" />
                                            <span className="text-gray-600">{tutor.experience}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <MapPin className="w-4 h-4 text-gray-400" />
                                            <span className="text-gray-600">{tutor.languages}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Giới thiệu về tôi */}
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Giới thiệu về tôi</h2>
                            <p className="text-gray-700 leading-relaxed">{tutor.about}</p>
                        </div>

                        {/* Bằng cấp */}
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Bằng cấp</h2>
                            <div className="space-y-3">
                                {tutor.qualifications.map((qual, index) => (
                                    <div key={index} className="grid grid-cols-2 gap-4 py-2 border-b border-gray-100 last:border-b-0">
                                        <div className="font-medium text-gray-900">{qual.subject}</div>
                                        <div className="text-gray-600">{qual.level}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Đánh giá */}
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-900">Đánh giá 4.8</h2>
                                <div className="flex items-center space-x-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                {tutor.reviews.map((review) => (
                                    <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <div className="w-10 h-10 bg-[#FDCB6E] rounded-full flex items-center justify-center text-white font-semibold">
                                                {review.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-900">{review.name}</div>
                                                <div className="flex items-center space-x-1">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-700">{review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Đánh giá TrustPilot */}
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">TrustPilot 4.7</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {tutor.trustPilotReviews.map((review, index) => (
                                    <div key={index} className="space-y-3">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-semibold">
                                                {review.name.charAt(0)}
                                            </div>
                                            <div className="font-medium text-gray-900">{review.name}</div>
                                        </div>
                                        <p className="text-gray-700 text-sm">{review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar bên phải - Đặt lịch */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 sticky top-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Đặt lịch với Oryna L.</h3>

                            <div className="space-y-4 mb-6">
                                {tutor.packages.map((pkg) => (
                                    <div
                                        key={pkg.id}
                                        className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedPackage?.id === pkg.id
                                            ? 'border-[#FDCB6E] bg-[#FDF9F0]'
                                            : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                        onClick={() => setSelectedPackage(pkg)}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <div className="font-semibold text-gray-900">
                                                    {pkg.price.toLocaleString('vi-VN')} VNĐ
                                                    {(pkg.id === 1 || pkg.id === 2) ? '/tháng' : ''}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    {pkg.duration}
                                                    {(pkg.id === 1 || pkg.id === 2) ? ` • ${pkg.sessions} buổi/tháng` : ''}
                                                </div>
                                            </div>
                                            <div className="text-xs text-[#FDCB6E] font-medium">140+</div>
                                        </div>
                                        <div className="text-sm text-gray-600">{pkg.discounts}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 mb-6">
                                <button
                                    onClick={handleBookingClick}
                                    className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${selectedPackage
                                        ? 'bg-[#FDCB6E] hover:bg-[#E6B862] text-white'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'
                                        }`}
                                    disabled={!selectedPackage}
                                >
                                    Đặt lịch học
                                </button>
                            </div>

                            <div className="text-center text-sm text-gray-600 mb-4">
                                Bạn đang tìm kiếm thứ gì cụ thể?
                            </div>

                            <Link to="/my-bookings" className="block">
                                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm">
                                    Gửi tin nhắn
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorBookingInf;