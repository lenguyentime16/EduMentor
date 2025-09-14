// src/components/sections/CTASection.jsx
import React from 'react';
import Button from '../ui/Button';

const CTASection = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Ready to find the perfect tutor?
                    </h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Tham gia cùng hàng nghìn học sinh đã cải thiện kết quả học tập với Edumentors.
                        Bắt đầu hành trình học tập hiệu quả ngay hôm nay!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            variant="secondary"
                            size="lg"
                            className="bg-white text-orange-600 hover:bg-gray-50 border-0"
                        >
                            Tìm gia sư ngay
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-white border-white hover:bg-white hover:text-orange-600"
                        >
                            Xem demo miễn phí
                        </Button>
                    </div>

                    <div className="mt-8 text-primary-100 text-sm">
                        Miễn phí đăng ký • Buổi học thử không mất phí • Hỗ trợ 24/7
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;