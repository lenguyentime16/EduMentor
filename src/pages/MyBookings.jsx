import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle, Bell, User, ChevronDown, Settings, HelpCircle, LogOut, Star, Filter } from 'lucide-react';

const MyBookings = () => {
    const [selectedSubject, setSelectedSubject] = useState('All subjects');
    const [selectedLanguage, setSelectedLanguage] = useState('All languages');
    const [selectedPriceRange, setSelectedPriceRange] = useState('Any price');
    const [selectedTutor, setSelectedTutor] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Sample tutor data
    const tutors = [
        {
            id: 1,
            name: "Sarah Miller",
            rating: 4.9,
            reviews: 127,
            experience: "Experienced mathematics tutor with 5+ years of teaching experience. Specialized in calculus, algebra, and physics.",
            subjects: ["Mathematics", "Physics", "Calculus"],
            hourlyRate: 45,
            avatar: "SM",
            color: "bg-orange-500"
        },
        {
            id: 2,
            name: "David Chen",
            rating: 4.8,
            reviews: 89,
            experience: "Professional chemistry teacher with expertise in organic and analytical chemistry.",
            subjects: ["Chemistry", "Biology"],
            hourlyRate: 50,
            avatar: "DC",
            color: "bg-blue-500"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            rating: 4.9,
            reviews: 156,
            experience: "Certified English teacher specializing in literature and creative writing.",
            subjects: ["English", "Literature"],
            hourlyRate: 35,
            avatar: "ER",
            color: "bg-green-500"
        }
    ];

    // Calendar data
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    const generateCalendarDays = () => {
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const firstDayOfWeek = firstDay.getDay();
        const daysInMonth = lastDay.getDate();
        
        const days = [];
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDayOfWeek; i++) {
            days.push(null);
        }
        
        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day);
        }
        
        return days;
    };

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const timeSlots = [
        "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", 
        "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
    ];

    // Handle click outside dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsUserDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // User Dropdown Component
    const UserDropdown = () => (
        <div
            ref={dropdownRef}
            className="relative"
        >
            <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="flex items-center space-x-2 hover:bg-gray-50 rounded-lg p-2 transition-all duration-200"
            >
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    N
                </div>
                <div className="hidden md:block text-left">
                    <div className="text-sm font-medium text-gray-900">Welcome, Nguyên</div>
                    <div className="text-xs text-gray-500">lenguyentime16@gmail.com</div>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isUserDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isUserDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                                N
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Welcome, Nguyên</p>
                                <p className="text-sm text-gray-500">lenguyentime16@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="py-2">
                        <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150">
                            <User className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-700 font-medium">Personal Info</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150">
                            <Settings className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-700 font-medium">Account settings</span>
                        </button>
                    </div>

                    <div className="border-t border-gray-100 my-2"></div>

                    <div className="py-2">
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-150">
                            <span className="text-gray-700 font-medium">FAQs</span>
                        </button>
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-150">
                            <span className="text-gray-700 font-medium">Terms and Conditions</span>
                        </button>
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-150">
                            <span className="text-gray-700 font-medium">Privacy Policy</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150">
                            <HelpCircle className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-700 font-medium">Help & Support</span>
                        </button>
                    </div>

                    <div className="border-t border-gray-100 my-2"></div>

                    <div className="px-4 py-2">
                        <button className="w-full bg-[#FDF3E1] text-[#FDCB6E] rounded-lg py-3 px-4 font-medium hover:bg-[#FCF0D0] transition-all duration-200 flex items-center justify-center space-x-2">
                            <LogOut className="w-4 h-4" />
                            <span>Log Out</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-[#FDCB6E]">EduMentors</div>
                    
                        <nav className="flex items-center space-x-8">
                            <Link to="/dashboard" className="text-gray-600 hover:text-[#FDCB6E] transition-colors">
                                Dashboard
                            </Link>
                            <Link to="/find-tutor" className="text-gray-600 hover:text-[#FDCB6E] transition-colors">
                                Find a tutor
                            </Link>
                            <Link to="/my-bookings" className="text-[#FDCB6E] font-medium transition-colors">
                                My Bookings
                            </Link>
                            <Link to="/messages" className="text-gray-600 hover:text-[#FDCB6E] transition-colors">
                                Messages
                            </Link>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-[#FDCB6E] transition-colors duration-200" />
                            <UserDropdown />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Book a Tutoring Session</h1>
                    <p className="text-gray-600">Find and schedule sessions with qualified tutors</p>
                </div>

                {/* Filter Section */}
                <div className="mb-6">
                    <div className="flex items-center mb-4">
                        <Filter className="w-5 h-5 text-gray-600 mr-2" />
                        <h2 className="text-lg font-semibold text-gray-900">Filter Tutors</h2>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                        {/* Subject Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                            <select 
                                value={selectedSubject}
                                onChange={(e) => setSelectedSubject(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-[#FDCB6E]"
                            >
                                <option>All subjects</option>
                                <option>Mathematics</option>
                                <option>Physics</option>
                                <option>Chemistry</option>
                                <option>English</option>
                                <option>Biology</option>
                            </select>
                        </div>

                        {/* Language Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                            <select 
                                value={selectedLanguage}
                                onChange={(e) => setSelectedLanguage(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-[#FDCB6E]"
                            >
                                <option>All languages</option>
                                <option>English</option>
                                <option>Vietnamese</option>
                                <option>Spanish</option>
                                <option>French</option>
                            </select>
                        </div>

                        {/* Price Range Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                            <select 
                                value={selectedPriceRange}
                                onChange={(e) => setSelectedPriceRange(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FDCB6E] focus:border-[#FDCB6E]"
                            >
                                <option>Any price</option>
                                <option>$0 - $30</option>
                                <option>$30 - $50</option>
                                <option>$50 - $100</option>
                                <option>$100+</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column - Available Tutors List */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-lg border border-gray-200 p-4">
                            <div className="mb-4">
                                <h3 className="font-semibold text-gray-900">Available Tutors</h3>
                                <p className="text-sm text-gray-600">{tutors.length} tutors found</p>
                            </div>

                            <div className="space-y-3">
                                {tutors.map((tutor) => (
                                    <div 
                                        key={tutor.id} 
                                        className={`p-3 rounded-lg cursor-pointer transition-all border ${
                                            selectedTutor?.id === tutor.id 
                                                ? 'border-[#FDCB6E] bg-[#FDF9F0]' 
                                                : 'border-gray-200 hover:border-gray-300'
                                        }`} 
                                        onClick={() => setSelectedTutor(tutor)}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-10 h-10 ${tutor.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                                                {tutor.avatar}
                                            </div>
                                            
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-gray-900 text-sm truncate">{tutor.name}</h4>
                                                <div className="flex items-center mt-1">
                                                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                                    <span className="text-xs text-gray-600 ml-1">{tutor.rating}</span>
                                                </div>
                                                <div className="text-sm font-medium text-gray-900 mt-1">${tutor.hourlyRate}/hr</div>
                                                <div className="flex flex-wrap gap-1 mt-2">
                                                    {tutor.subjects.slice(0, 2).map((subject, index) => (
                                                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                                            {subject}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Middle Column - Selected Tutor Details + Calendar */}
                    <div className="lg:col-span-6">
                        {selectedTutor ? (
                            <div className="space-y-6">
                                {/* Selected Tutor Details */}
                                <div className="bg-white rounded-lg border border-gray-200 p-6">
                                    <div className="flex items-start space-x-4 mb-6">
                                        <div className={`w-16 h-16 ${selectedTutor.color} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                                            {selectedTutor.avatar}
                                        </div>
                                        
                                        <div className="flex-1">
                                            <h2 className="text-xl font-bold text-gray-900 mb-1">{selectedTutor.name}</h2>
                                            <div className="flex items-center mb-2">
                                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                <span className="text-sm font-medium text-gray-900 ml-1">{selectedTutor.rating}</span>
                                                <span className="text-sm text-gray-500 ml-1">({selectedTutor.reviews} reviews)</span>
                                                <span className="text-xl font-bold text-gray-900 ml-auto">${selectedTutor.hourlyRate}/hour</span>
                                            </div>
                                            
                                            <p className="text-sm text-gray-600 mb-3">{selectedTutor.experience}</p>
                                            
                                            <div className="flex flex-wrap gap-2">
                                                {selectedTutor.subjects.map((subject, index) => (
                                                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                                        {subject}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Select Date & Time */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Date & Time</h3>
                                        
                                        {/* Week/Month Toggle */}
                                        <div className="flex space-x-2 mb-4">
                                            <button className="px-4 py-2 bg-[#FDCB6E] text-white rounded-md text-sm font-medium">
                                                Week
                                            </button>
                                            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200">
                                                Month
                                            </button>
                                        </div>
                                        
                                        {/* Calendar */}
                                        <div className="mb-6">
                                            <div className="flex items-center justify-between mb-4">
                                                <h4 className="font-medium text-gray-900">September 2025</h4>
                                                <div className="flex space-x-2">
                                                    <button className="p-1 hover:bg-gray-100 rounded">←</button>
                                                    <button className="p-1 hover:bg-gray-100 rounded">→</button>
                                                </div>
                                            </div>
                                            
                                            <div className="grid grid-cols-7 gap-1 mb-2">
                                                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                                    <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                                                        {day}
                                                    </div>
                                                ))}
                                            </div>
                                            
                                            <div className="grid grid-cols-7 gap-1">
                                                {generateCalendarDays().map((day, index) => (
                                                    <div key={index} className="aspect-square">
                                                        {day && (
                                                            <button
                                                                onClick={() => setSelectedDate(day)}
                                                                className={`w-full h-full text-xs rounded transition-colors ${
                                                                    selectedDate === day
                                                                        ? 'bg-[#FDCB6E] text-white font-medium'
                                                                        : day < currentDate.getDate() && currentMonth === currentDate.getMonth()
                                                                        ? 'text-gray-300 cursor-not-allowed'
                                                                        : 'hover:bg-gray-100 text-gray-700'
                                                                }`}
                                                                disabled={day < currentDate.getDate() && currentMonth === currentDate.getMonth()}
                                                            >
                                                                {day}
                                                            </button>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Available Times */}
                                        {selectedDate && (
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-3">
                                                    Available Times - Wednesday, September {selectedDate}, 2025
                                                </h4>
                                                <div className="grid grid-cols-4 gap-2">
                                                    {timeSlots.map((time, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => setSelectedTime(time)}
                                                            className={`py-2 px-3 text-sm rounded border transition-colors ${
                                                                selectedTime === time
                                                                    ? 'bg-[#FDCB6E] text-white border-[#FDCB6E]'
                                                                    : 'bg-white border-gray-300 hover:border-[#FDCB6E] hover:text-[#FDCB6E]'
                                                            }`}
                                                        >
                                                            {time}
                                                        </button>
                                                    ))}
                                                </div>
                                                <p className="text-xs text-gray-500 mt-2">Times shown in your local timezone (EST)</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Session Details */}
                                {selectedDate && selectedTime && (
                                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Session Details</h3>
                                        
                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject/Topic</label>
                                                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                                                    <option>Mathematics</option>
                                                    <option>Physics</option>
                                                    <option>Chemistry</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                                                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                                                    <option>1 hour</option>
                                                    <option>1.5 hours</option>
                                                    <option>2 hours</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Special Notes (Optional)</label>
                                            <textarea 
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm h-20" 
                                                placeholder="Any specific topics or areas you'd like to focus on..."
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                                <div className="w-16 h-16 bg-[#FDCB6E] bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <Calendar className="w-8 h-8 text-[#FDCB6E]" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Tutor</h3>
                                <p className="text-gray-500 text-sm">Choose a tutor from the list to see their details and available times</p>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Booking Summary */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>
                            
                            {selectedTutor && selectedDate && selectedTime ? (
                                <div>
                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-600">Tutor:</span>
                                            <span className="text-sm font-medium text-gray-900">{selectedTutor.name}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-600">Date:</span>
                                            <span className="text-sm font-medium text-gray-900">Sep {selectedDate}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-600">Time:</span>
                                            <span className="text-sm font-medium text-gray-900">{selectedTime}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-600">Duration:</span>
                                            <span className="text-sm font-medium text-gray-900">1h</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-600">Subject:</span>
                                            <span className="text-sm font-medium text-gray-900">mathematics</span>
                                        </div>
                                        
                                        <div className="border-t border-gray-200 pt-3 mt-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm text-gray-600">Hourly Rate:</span>
                                                <span className="text-sm font-medium text-gray-900">${selectedTutor.hourlyRate}</span>
                                            </div>
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="text-sm text-gray-600">Duration:</span>
                                                <span className="text-sm font-medium text-gray-900">1h</span>
                                            </div>
                                            <div className="flex justify-between items-center text-lg">
                                                <span className="font-semibold text-gray-900">Total:</span>
                                                <span className="font-bold text-gray-900">${selectedTutor.hourlyRate}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Link to="/payment" className="block">
                                            <button className="w-full bg-[#FDCB6E] text-white py-3 px-4 rounded-md font-medium hover:bg-[#E6B862] transition-colors">
                                                Book Session
                                            </button>
                                        </Link>
                                        <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md font-medium hover:bg-gray-200 transition-colors text-sm">
                                            Reschedule Existing
                                        </button>
                                        <button className="w-full text-red-600 py-2 text-sm font-medium hover:text-red-700 transition-colors">
                                            Cancel Booking
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                        <Calendar className="w-6 h-6 text-gray-400" />
                                    </div>
                                    <p className="text-gray-500 text-sm">Select a tutor and time to see booking summary</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;
