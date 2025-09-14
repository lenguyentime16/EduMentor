// src/components/sections/TutorsSection.jsx
import React from 'react';
import Card from '../ui/Card';

const TutorsSection = () => {
    const tutors = [
        {
            id: 1,
            name: 'Nguyễn Văn A',
            university: 'ĐH Bách Khoa HN',
            subject: 'Toán học',
            rating: 4.9,
            price: '200,000đ/h',
            avatar: '[TUTOR_AVATAR_1]',
            verified: true
        },
        {
            id: 2,
            name: 'Trần Thị B',
            university: 'ĐH Kinh tế Quốc dân',
            subject: 'Tiếng Anh',
            rating: 4.8,
            price: '180,000đ/h',
            avatar: '[TUTOR_AVATAR_2]',
            verified: true
        },
        {
            id: 3,
            name: 'Lê Văn C',
            university: 'ĐH Y Hà Nội',
            subject: 'Hóa học',
            rating: 5.0,
            price: '250,000đ/h',
            avatar: '[TUTOR_AVATAR_3]',
            verified: true
        },
        {
            id: 4,
            name: 'Phạm Thị D',
            university: 'ĐH Ngoại thương',
            subject: 'Văn học',
            rating: 4.7,
            price: '150,000đ/h',
            avatar: '[TUTOR_AVATAR_4]',
            verified: true
        },
        {
            id: 5,
            name: 'Hoàng Văn E',
            university: 'ĐH Sư phạm HN',
            subject: 'Vật lý',
            rating: 4.9,
            price: '200,000đ/h',
            avatar: '[TUTOR_AVATAR_5]',
            verified: true
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Recommended tutors
                    </h2>
                    <p className="text-lg text-gray-600">
                        Gặp gỡ các gia sư xuất sắc từ các trường đại học hàng đầu
                    </p>
                </div>

                {/* Tutors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {tutors.map((tutor) => (
                        <Card key={tutor.id} className="text-center hover:shadow-xl transition-shadow duration-300" hover>
                            {/* Avatar */}
                            <div className="relative mb-4">
                                <img
                                    src={`/tutors/${tutor.avatar}.jpg`}
                                    alt={tutor.name}
                                    className="w-20 h-20 rounded-full mx-auto object-cover"
                                    placeholder={tutor.avatar}
                                />
                                {tutor.verified && (
                                    <div className="absolute -top-1 -right-8 bg-green-500 text-white rounded-full p-1">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div className="space-y-2">
                                <h3 className="font-semibold text-gray-900">{tutor.name}</h3>
                                <p className="text-sm text-gray-600">{tutor.university}</p>
                                <p className="text-sm font-medium text-primary-500">{tutor.subject}</p>

                                {/* Rating */}
                                <div className="flex items-center justify-center space-x-1">
                                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-sm text-gray-600">{tutor.rating}</span>
                                </div>

                                <p className="text-lg font-bold text-gray-900">{tutor.price}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TutorsSection;