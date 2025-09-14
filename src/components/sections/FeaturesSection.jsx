// src/components/sections/FeaturesSection.jsx
import React from 'react';
import Card from '../ui/Card';

const FeaturesSection = () => {
    const features = [
        {
            title: 'What makes Edumentors different?',
            description: 'Chúng tôi kết nối bạn với các gia sư xuất sắc từ các trường đại học hàng đầu',
            image: '[FEATURES_MAIN_IMAGE]',
            highlights: [
                'Gia sư từ top universities',
                'Phương pháp học tập hiện đại',
                'Theo dõi tiến độ chi tiết',
                'Hỗ trợ 24/7'
            ]
        }
    ];

    const benefitCards = [
        {
            title: 'Được đào tạo bài bản',
            description: 'Tất cả gia sư đều được đào tạo phương pháp giảng dạy chuyên nghiệp',
            icon: '🎯'
        },
        {
            title: 'Kinh nghiệm thực tế',
            description: 'Gia sư có kinh nghiệm giảng dạy và đạt kết quả cao trong các kỳ thi',
            icon: '💡'
        },
        {
            title: 'Flexible schedule',
            description: 'Linh hoạt thời gian học tập phù hợp với lịch trình của bạn',
            icon: '⏰'
        }
    ];

    const satisfactionStats = [
        {
            percentage: '98%',
            label: 'Satisfaction rate',
            description: 'Tỷ lệ hài lòng từ học sinh và phụ huynh'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Feature */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            What makes Edumentors different?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Chúng tôi kết nối bạn với các gia sư xuất sắc từ các trường đại học hàng đầu Việt Nam,
                            mang đến trải nghiệm học tập chất lượng cao và hiệu quả.
                        </p>

                        <div className="space-y-4">
                            {features[0].highlights.map((highlight, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        {/* [FEATURES_MAIN_IMAGE] - Main features illustration */}
                        <img
                            src="/features-main.jpg"
                            alt="Edumentors Features"
                            className="w-full h-auto rounded-2xl shadow-lg"
                            placeholder="[FEATURES_MAIN_IMAGE]"
                        />
                    </div>
                </div>

                {/* Benefit Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {benefitCards.map((card, index) => (
                        <Card key={index} className="text-center" hover>
                            <div className="text-4xl mb-4">{card.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {card.title}
                            </h3>
                            <p className="text-gray-600">
                                {card.description}
                            </p>
                        </Card>
                    ))}
                </div>

                {/* Satisfaction Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        {/* [SATISFACTION_IMAGE] - Students satisfaction image */}
                        <img
                            src="/satisfaction-image.jpg"
                            alt="Student Satisfaction"
                            className="w-full h-auto rounded-2xl shadow-lg"
                            placeholder="[SATISFACTION_IMAGE]"
                        />
                    </div>

                    <div>
                        <div className="bg-orange-50 rounded-2xl p-8">

                            <div className="text-center mb-6">
                                <div className="text-6xl font-bold text-orange-500 mb-2">{satisfactionStats[0].percentage}</div>
                                <div className="text-xl font-semibold text-gray-900 mb-2">{satisfactionStats[0].label}</div>
                                <div className="text-gray-600">{satisfactionStats[0].description}</div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-700">Chất lượng giảng dạy</span>
                                    <div className="flex space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-gray-700">Hỗ trợ học sinh</span>
                                    <div className="flex space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;