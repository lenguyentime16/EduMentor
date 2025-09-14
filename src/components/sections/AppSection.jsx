// src/components/sections/AppSection.jsx
import React from 'react';
import Button from '../ui/Button';

const AppSection = () => {
    const features = [
        'Học mọi lúc, mọi nơi với ứng dụng di động',
        'Theo dõi tiến độ học tập chi tiết',
        'Kết nối trực tiếp với gia sư',
        'Thông báo lịch học và nhắc nhở',
        'Tài liệu học tập đa dạng'
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <div className="mb-8">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Ready for your child to excel?
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Tải xuống ứng dụng Edumentors để bắt đầu hành trình học tập hiệu quả cùng con bạn.
                            </p>

                            <div className="space-y-4 mb-8">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button variant="primary" size="lg">
                                Bắt đầu ngay
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - App Preview */}
                    <div className="relative">
                        {/* [PARENT_CHILD_IMAGE] - Image showing parent and child studying together */}
                        <img
                            src="/parent-child-study.jpg"
                            alt="Parent and Child Studying"
                            className="w-full h-auto rounded-2xl shadow-lg"
                            placeholder="[PARENT_CHILD_IMAGE]"
                        />

                        {/* Floating Achievement Badge */}
                        <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                    <span className="text-xl">🏆</span>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-900">Học tập xuất sắc</div>
                                    <div className="text-xs text-gray-600">+15% điểm số</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* App Download Section */}
                <div className="mt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            {/* [APP_MOCKUP_IMAGE] - Mobile app mockup showing the interface */}
                            <div className="flex justify-center">
                                <img
                                    src="/app-mockup.png"
                                    alt="Edumentors Mobile App"
                                    className="h-96 w-auto"
                                    placeholder="[APP_MOCKUP_IMAGE]"
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                Download the Edumentors mobile app
                            </h3>
                            <p className="text-lg text-gray-600 mb-8">
                                Trải nghiệm học tập liền mạch với ứng dụng di động Edumentors.
                                Có sẵn trên cả iOS và Android.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                {/* App Store Button */}
                                <a
                                    href="#"
                                    className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                                >
                                    <div className="flex items-center space-x-3">
                                        {/* [APP_STORE_ICON] - Apple App Store icon */}
                                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                        </svg>
                                        <div className="text-left">
                                            <div className="text-xs">Download on the</div>
                                            <div className="text-lg font-semibold">App Store</div>
                                        </div>
                                    </div>
                                </a>

                                {/* Google Play Button */}
                                <a
                                    href="#"
                                    className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                                >
                                    <div className="flex items-center space-x-3">
                                        {/* [GOOGLE_PLAY_ICON] - Google Play Store icon */}
                                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                        </svg>
                                        <div className="text-left">
                                            <div className="text-xs">Get it on</div>
                                            <div className="text-lg font-semibold">Google Play</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="text-sm text-gray-500">
                                Đã có hơn 100,000+ lượt tải xuống
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppSection;