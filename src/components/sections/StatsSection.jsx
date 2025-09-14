// src/components/sections/StatsSection.jsx
import React from 'react';

const StatsSection = () => {
    const stats = [
        {
            number: '5,000+',
            label: 'Students',
            sublabel: 'Học sinh đã tin tưởng',
            icon: '👨‍🎓'
        },
        {
            number: '3,000+',
            label: 'Tutors',
            sublabel: 'Gia sư chất lượng cao',
            icon: '👩‍🏫'
        },
        {
            number: '1,500+',
            label: 'Sessions',
            sublabel: 'Buổi học mỗi tuần',
            icon: '📚'
        },
        {
            number: '12',
            label: 'Top Universities',
            sublabel: 'Trường đại học hàng đầu',
            icon: '🏫'
        },
        {
            number: '4.9',
            label: 'Average Rating',
            sublabel: 'Đánh giá từ học sinh',
            icon: '⭐'
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl mb-2">{stat.icon}</div>
                            <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                                {stat.number}
                            </div>
                            <div className="text-sm font-semibold text-gray-700 mb-1">
                                {stat.label}
                            </div>
                            <div className="text-xs text-gray-500">
                                {stat.sublabel}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;