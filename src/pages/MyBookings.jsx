import React, { useState } from "react";
import { ChevronDown, Filter, Star, Calendar, ChevronLeft, ChevronRight, User, Settings, HelpCircle, LogOut, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import Header from '../components/layout/Header';

const MyBookings = () => {
  const [selectedSubject, setSelectedSubject] = useState("All subjects");
  const [selectedLanguage, setSelectedLanguage] = useState("All languages");
  const [selectedPriceRange, setSelectedPriceRange] = useState("Any price");
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [selectedDate, setSelectedDate] = useState("Wed");
  const [selectedMonth, setSelectedMonth] = useState("Month");
  const [currentDate, setCurrentDate] = useState(new Date(2025, 8, 10)); // September 2025
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("1 hour");

  // Mock data
  const tutors = [
    {
      id: 1,
      name: "Sarah Miller",
      avatar: "SM",
      subject: "Mathematics",
      subjects: ["Physics"],
      rating: 4.9,
      reviews: 127,
      hourlyRate: 45,
      bio: "Experienced mathematics tutor with 8+ years of teaching experience. Specializes in calculus, algebra and analysis."
    },
    {
      id: 2,
      name: "David Chen",
      avatar: "DC",
      subject: "Chemistry",
      subjects: ["Biology"],
      rating: 4.8,
      reviews: 89,
      hourlyRate: 40,
      bio: "PhD in Chemistry with passion for making complex concepts simple."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "ER",
      subject: "English",
      subjects: ["Literature"],
      rating: 4.9,
      reviews: 156,
      hourlyRate: 35,
      bio: "Native English speaker with expertise in literature and writing."
    }
  ];

  const timeSlots = [
    { time: "9:00 AM", available: true },
    { time: "10:00 AM", available: true, selected: true },
    { time: "12:00 PM", available: true },
    { time: "1:00 PM", available: true },
    { time: "2:00 PM", available: true, selected: true },
    { time: "4:00 PM", available: true },
    { time: "5:00 PM", available: true },
    { time: "6:00 PM", available: true, selected: true }
  ];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Adjust for Monday start (0 = Sunday, 1 = Monday, etc.)
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

    // Empty cells for previous month
    for (let i = 0; i < adjustedFirstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8"></div>);
    }

    // Days of current month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === 11;
      const isSelected = selectedDate === day;

      days.push(
        <div
          key={day}
          onClick={() => setSelectedDate(day)}
          className={`h-8 flex items-center justify-center text-sm cursor-pointer rounded ${isToday ? 'bg-[#FFF3E0] text-[#FDCB6E]' :
            isSelected ? 'bg-[#FDCB6E] text-white' :
              'hover:bg-gray-100'
            }`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header currentPage="My Bookings" />
      {/* Main Content */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Book a Tutoring Session</h1>
          <p className="text-gray-600 mb-6">Find and schedule sessions with qualified tutors</p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Sidebar - Filters and Tutors */}
            <div className="lg:col-span-1 space-y-6">
              {/* Filter Tutors */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <span className="font-medium text-gray-900">Filter Tutors</span>
                </div>

                <div className="space-y-4">
                  {/* Subject Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <div className="relative">
                      <select
                        className="w-full p-2 border border-gray-300 rounded-md text-sm"
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                      >
                        <option>All subjects</option>
                        <option>Mathematics</option>
                        <option>Physics</option>
                        <option>Chemistry</option>
                        <option>English</option>
                      </select>
                    </div>
                  </div>

                  {/* Language Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                    <div className="relative">
                      <select
                        className="w-full p-2 border border-gray-300 rounded-md text-sm"
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                      >
                        <option>All languages</option>
                        <option>English</option>
                        <option>Vietnamese</option>
                      </select>
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                    <div className="relative">
                      <select
                        className="w-full p-2 border border-gray-300 rounded-md text-sm"
                        value={selectedPriceRange}
                        onChange={(e) => setSelectedPriceRange(e.target.value)}
                      >
                        <option>Any price</option>
                        <option>$0-30/hour</option>
                        <option>$30-50/hour</option>
                        <option>$50+/hour</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Available Tutors */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-4">3 tutors found</h3>

                <div className="space-y-3">
                  {tutors.map((tutor) => (
                    <div
                      key={tutor.id}
                      onClick={() => setSelectedTutor(tutor)}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${selectedTutor?.id === tutor.id ? 'border-[#FDCB6E] bg-[#FFF3E0]' : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#FFF3E0] rounded-full flex items-center justify-center text-[#FDCB6E] font-semibold text-sm">
                          {tutor.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm text-gray-900">{tutor.name}</div>
                          <div className="flex items-center space-x-1 text-xs text-gray-600">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span>{tutor.rating}</span>
                          </div>
                          <div className="text-xs text-gray-600">${tutor.hourlyRate}/hr</div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">{tutor.subject}</span>
                            {tutor.subjects.map(subject => (
                              <span key={subject} className="text-xs bg-gray-100 px-2 py-0.5 rounded">{subject}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center - Tutor Details and Calendar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Selected Tutor Details */}
              {selectedTutor && (
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-[#FFF3E0] rounded-full flex items-center justify-center text-[#FDCB6E] font-bold text-xl">
                      {selectedTutor.avatar}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900">{selectedTutor.name}</h2>
                      <div className="flex items-center space-x-1 text-sm text-gray-600 mb-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{selectedTutor.rating} ({selectedTutor.reviews} reviews)</span>
                        <span className="ml-4">${selectedTutor.hourlyRate}/hour</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{selectedTutor.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{selectedTutor.subject}</span>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Physics</span>
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Calculus</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Select Date & Time */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-4">Select Date & Time</h3>

                {/* Date Tabs */}
                <div className="flex space-x-2 mb-4">
                  <select
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                  >
                    <option>Month</option>
                    <option>September 2025</option>
                    <option>October 2025</option>
                  </select>
                </div>

                {/* Calendar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-gray-900">
                      {new Date(currentDate.getFullYear(), currentDate.getMonth()).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </h4>
                    <div className="flex space-x-2">
                      <button
                        className="p-1 hover:bg-gray-100 rounded"
                        onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        className="p-1 hover:bg-gray-100 rounded"
                        onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                      <div key={day} className="h-8 flex items-center justify-center text-xs font-medium text-gray-500">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {renderCalendar()}
                  </div>
                </div>

                {/* Available Times */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Available Times - Wednesday, September 11, 2025</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        onClick={() => setSelectedTime(slot.time)}
                        disabled={!slot.available}
                        className={`p-2 text-sm rounded border transition-colors ${slot.selected
                          ? 'bg-[#FFF3E0] text-[#FDCB6E] border-[#FDCB6E]'
                          : selectedTime === slot.time
                            ? 'bg-[#FDCB6E] text-white border-[#FDCB6E]'
                            : slot.available
                              ? 'bg-white text-gray-700 border-gray-300 hover:border-[#FDCB6E]'
                              : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                          }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Times shown in your local timezone (ICT)</p>
                </div>
              </div>

              {/* Session Details */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-4">Session Details</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject/Topic</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                      <option>Mathematics</option>
                      <option>Physics</option>
                      <option>Chemistry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md text-sm"
                      value={selectedDuration}
                      onChange={(e) => setSelectedDuration(e.target.value)}
                    >
                      <option>1 hour</option>
                      <option>30 minutes</option>
                      <option>1.5 hours</option>
                      <option>2 hours</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Special Notes (Optional)</label>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded-md text-sm resize-none"
                      rows="3"
                      placeholder="Any specific topics or areas you'd like to focus on..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Booking Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm sticky top-6">
                <h3 className="font-medium text-gray-900 mb-4">Booking Summary</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tutor:</span>
                    <span className="font-medium">{selectedTutor?.name || 'Sarah Miller'}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">Sep 10</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-medium">9:00 AM</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">1h</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subject:</span>
                    <span className="font-medium">mathematics</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Hourly Rate:</span>
                    <span className="font-medium">$45</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between font-medium">
                    <span>Total:</span>
                    <span>$45</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-[#FDCB6E] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#E6B15C] transition-colors">
                    Book Session
                  </button>

                  <div className="text-center space-y-1">
                    <button className="text-sm text-[#FDCB6E] hover:text-[#E6B15C] underline">
                      Reschedule Existing
                    </button>
                    <br />
                    <button className="text-sm text-gray-500 hover:text-gray-600 underline">
                      Cancel Booking
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
