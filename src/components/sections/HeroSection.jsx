// src/components/sections/HeroSection.jsx
import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Best tutors from the{' '}
                                <span className="text-orange-500">Viet Nam elite universities</span>
                            </h1>
                            <p className="text-lg text-gray-600">
                                Học tập cùng các gia sư xuất sắc từ các trường đại học hàng đầu Việt Nam
                            </p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="ml-2 text-sm text-gray-600">4.9 (2,000+ reviews)</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="primary" size="lg">
                                Tìm gia sư ngay
                            </Button>
                            <Button variant="secondary" size="lg">
                                Xem demo
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative">
                        {/* [HERO_IMAGE] - Main hero image with university building */}
                        <img
                            src="/hero-university.jpg"
                            alt="Viet Nam Elite University"
                            className="w-full h-auto rounded-2xl shadow-2xl"
                            placeholder="[HERO_IMAGE]"
                        />

                        {/* Floating Stats Cards */}
                        <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-orange-500">5,000+</div>
                                <div className="text-sm text-gray-600">Học sinh</div>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-secondary-500">98%</div>
                                <div className="text-sm text-gray-600">Hài lòng</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;