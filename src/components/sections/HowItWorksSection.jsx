// src/components/sections/HowItWorksSection.jsx
import React from 'react';
import Card from '../ui/Card';

const HowItWorksSection = () => {
    const steps = [
        {
            step: '01',
            title: 'Register & Browse',
            description: 'Đăng ký tài khoản và duyệt qua danh sách gia sư phù hợp',
            icon: '📝',
            color: 'bg-blue-100 text-blue-600'
        },
        {
            step: '02',
            title: 'Book a Free Trial',
            description: 'Đặt một buổi học thử miễn phí với gia sư bạn chọn',
            icon: '📅',
            color: 'bg-green-100 text-green-600'
        },
        {
            step: '03',
            title: 'Set Up Sessions',
            description: 'Thiết lập lịch học và bắt đầu hành trình học tập',
            icon: '🎯',
            color: 'bg-orange-100 text-orange-600'
        }
    ];

    const subjects = [
        'Physics', 'Maths', 'English Literature', 'History', 'Biology',
        'Chemistry', 'Vietnamese', 'Geography', 'Computer Science', 'Economics',
        'Business Studies'
    ];

    const benefits = [
        {
            title: 'Flexible learning',
            description: 'Học tập linh hoạt theo thời gian của bạn',
            icon: '🕒'
        },
        {
            title: 'Expert mentoring',
            description: 'Được hướng dẫn bởi các chuyên gia hàng đầu',
            icon: '👨‍🏫'
        },
        {
            title: 'Proven track record',
            description: 'Phương pháp đã được chứng minh hiệu quả',
            icon: '📊'
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        How it works
                    </h2>
                    <p className="text-lg text-gray-600">
                        Ba bước đơn giản để bắt đầu hành trình học tập cùng Edumentors
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {steps.map((step, index) => (
                        <Card key={index} className="text-center relative" hover>
                            <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-2xl font-bold mx-auto mb-4`}>
                                {step.step}
                            </div>
                            <div className="text-4xl mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-600">
                                {step.description}
                            </p>

                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gray-300 z-10"></div>
                            )}
                        </Card>
                    ))}
                </div>

                {/* Subject Selection */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Choose a subject and browse our top tutors
                        </h3>
                        <p className="text-gray-600">
                            Chọn môn học và khám phá các gia sư hàng đầu của chúng tôi
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {subjects.map((subject, index) => (
                            <button
                                key={index}
                                className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 transition-colors"
                            >
                                {subject}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Online Session Benefits */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        {/* [ONLINE_SESSION_IMAGE] - Image showing online tutoring session */}
                        <img
                            src="/online-session.jpg"
                            alt="Online Tutoring Session"
                            className="w-full h-auto rounded-2xl shadow-lg"
                            placeholder="[ONLINE_SESSION_IMAGE]"
                        />
                    </div>

                    <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                            The benefits of online sessions
                        </h3>
                        <div className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">{benefit.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-gray-600">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;