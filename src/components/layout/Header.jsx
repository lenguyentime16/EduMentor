// src/components/layout/Header.jsx
import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: 'Trang chủ', href: '#' },
        { name: 'Gia sư', href: '#' },
        { name: 'Về chúng tôi', href: '#' },
        { name: 'Liên hệ', href: '#' }
    ];

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <div className="flex items-center">
                            {/* [LOGO_IMAGE] - Logo image placeholder */}
                            <img
                                src="public/logo.png" // Replace with actual logo path
                                alt="Edumentors Logo"
                                className="h-8 w-auto"
                                placeholder="[LOGO_IMAGE]"
                            />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="secondary" size="sm">
                            Đăng nhập
                        </Button>
                        <Button variant="primary" size="sm">
                            Đăng ký
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-orange-500 p-2"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-600 hover:text-primary-500 block px-3 py-2 text-sm font-medium"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="pt-4 space-y-2">
                                <Button variant="secondary" className="w-full">
                                    Đăng nhập
                                </Button>
                                <Button variant="primary" className="w-full">
                                    Đăng ký
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;