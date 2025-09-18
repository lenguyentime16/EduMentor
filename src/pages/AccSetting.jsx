import React, { useState } from 'react';
import { ArrowLeft, User, Camera, Bell, Shield, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';

const AccSetting = () => {
    const [formData, setFormData] = useState({
        firstName: 'Sarah',
        lastName: 'Miller',
        email: 'sarah.miller@edumentor.com',
        phone: '+1 (555) 123-4567',
        location: 'New York, NY',
        timezone: 'Eastern Time (EST)',
        bio: 'Experienced mathematics tutor with 5+ years of teaching experience. Specialized in calculus, algebra, and statistics.',
        hourlyRate: '49',
        availability: 'Mon-Fri, 9 AM - 6 PM',
        subjects: ['Mathematics', 'Statistics', 'Calculus']
    });

    const [notifications, setNotifications] = useState({
        emailNotifications: true,
        emailReminders: true,
        marketingEmails: false,
        pushNotifications: true,
        smsReminders: false,
        loginAlerts: true
    });

    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [showPasswords, setShowPasswords] = useState({
        current: false,
        new: false,
        confirm: false
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleNotificationChange = (key) => {
        setNotifications(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswords(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const togglePasswordVisibility = (field) => {
        setShowPasswords(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    const addSubject = () => {
        // Add subject logic
    };

    const removeSubject = (index) => {
        setFormData(prev => ({
            ...prev,
            subjects: prev.subjects.filter((_, i) => i !== index)
        }));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <Link 
                        to="/dashboard" 
                        className="inline-flex items-center text-[#FDCB6E] hover:text-[#E6B15C] mb-4 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Booking
                    </Link>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Settings</h1>
                    <p className="text-gray-600">Manage your account preferences and profile information</p>
                </div>

                <div className="space-y-8">
                    {/* Profile Information */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center mb-4">
                                <User className="w-5 h-5 text-[#FDCB6E] mr-2" />
                                <h2 className="text-lg font-semibold text-gray-900">Profile Information</h2>
                            </div>
                            <p className="text-sm text-gray-600">Update your personal details and profile picture</p>
                        </div>

                        <div className="p-6">
                            {/* Profile Picture */}
                            <div className="flex items-center mb-6">
                                <div className="relative">
                                    <div className="w-20 h-20 bg-gradient-to-br from-[#FDCB6E] to-[#E6B15C] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                        S
                                    </div>
                                    <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#FDCB6E] rounded-full flex items-center justify-center text-white hover:bg-[#E6B15C] transition-colors">
                                        <Camera className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="ml-4">
                                    <p className="font-medium text-gray-900">Profile Picture</p>
                                    <p className="text-sm text-gray-600">JPG, PNG or GIF, Max size 2MB</p>
                                    <button className="mt-2 text-sm text-[#FDCB6E] hover:text-[#E6B15C] font-medium">
                                        Upload New Photo
                                    </button>
                                </div>
                            </div>

                            {/* Form Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                                    <input
                                        type="text"
                                        name="timezone"
                                        value={formData.timezone}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent resize-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Tutor Profile */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center mb-4">
                                <Shield className="w-5 h-5 text-[#FDCB6E] mr-2" />
                                <h2 className="text-lg font-semibold text-gray-900">Tutor Profile</h2>
                            </div>
                            <p className="text-sm text-gray-600">Manage your tutoring preferences and rates</p>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate ($)</label>
                                    <input
                                        type="number"
                                        name="hourlyRate"
                                        value={formData.hourlyRate}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                                    <input
                                        type="text"
                                        name="availability"
                                        value={formData.availability}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subjects</label>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {formData.subjects.map((subject, index) => (
                                        <span key={index} className="inline-flex items-center px-3 py-1 bg-[#FDCB6E] text-white text-sm rounded-full">
                                            {subject}
                                            <button
                                                onClick={() => removeSubject(index)}
                                                className="ml-2 text-white hover:text-gray-200"
                                            >
                                                ×
                                            </button>
                                        </span>
                                    ))}
                                </div>
                                <button
                                    onClick={addSubject}
                                    className="text-sm text-[#FDCB6E] hover:text-[#E6B15C] font-medium"
                                >
                                    + Add Subject
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#FDCB6E]">127</div>
                                    <div className="text-sm text-gray-600">Sessions</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#FDCB6E] flex items-center justify-center">
                                        4.9 ⭐
                                    </div>
                                    <div className="text-sm text-gray-600">Rating</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#FDCB6E]">89%</div>
                                    <div className="text-sm text-gray-600">Response Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center mb-4">
                                <Bell className="w-5 h-5 text-[#FDCB6E] mr-2" />
                                <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
                            </div>
                            <p className="text-sm text-gray-600">Choose how you want to be notified</p>
                        </div>

                        <div className="p-6 space-y-4">
                            {[
                                { key: 'emailNotifications', label: 'Email Notifications', description: 'Receive booking confirmations via email' },
                                { key: 'emailReminders', label: 'Email Reminders', description: 'Get reminded about upcoming sessions' },
                                { key: 'marketingEmails', label: 'Marketing Emails', description: 'Receive updates about new features' },
                                { key: 'pushNotifications', label: 'Push Notifications', description: 'Get instant booking notifications' },
                                { key: 'smsReminders', label: 'SMS Reminders', description: 'Text message reminders for sessions' },
                                { key: 'loginAlerts', label: 'Login Alerts', description: 'Get notified of new login attempts' }
                            ].map((item) => (
                                <div key={item.key} className="flex items-center justify-between py-2">
                                    <div>
                                        <p className="font-medium text-gray-900">{item.label}</p>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={notifications[item.key]}
                                            onChange={() => handleNotificationChange(item.key)}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#FDCB6E]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FDCB6E]"></div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Security & Privacy */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center mb-4">
                                <Shield className="w-5 h-5 text-[#FDCB6E] mr-2" />
                                <h2 className="text-lg font-semibold text-gray-900">Security & Privacy</h2>
                            </div>
                            <p className="text-sm text-gray-600">Manage your account security settings</p>
                        </div>

                        <div className="p-6">
                            <div className="mb-6">
                                <h3 className="font-medium text-gray-900 mb-4">Change Password</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                                        <div className="relative">
                                            <input
                                                type={showPasswords.current ? "text" : "password"}
                                                name="currentPassword"
                                                value={passwords.currentPassword}
                                                onChange={handlePasswordChange}
                                                placeholder="Enter current password"
                                                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => togglePasswordVisibility('current')}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                            >
                                                {showPasswords.current ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                                        <div className="relative">
                                            <input
                                                type={showPasswords.new ? "text" : "password"}
                                                name="newPassword"
                                                value={passwords.newPassword}
                                                onChange={handlePasswordChange}
                                                placeholder="Enter new password"
                                                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-transparent"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => togglePasswordVisibility('new')}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                            >
                                                {showPasswords.new ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <button className="mt-4 px-4 py-2 bg-[#FDCB6E] text-white rounded-lg hover:bg-[#E6B15C] transition-colors font-medium">
                                    Update Password
                                </button>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                                            <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                                        </div>
                                        <button className="px-4 py-2 text-[#FDCB6E] border border-[#FDCB6E] rounded-lg hover:bg-[#FDCB6E] hover:text-white transition-colors">
                                            Enable
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-gray-900">Session Timeout (minutes)</p>
                                            <p className="text-sm text-gray-600">30 minutes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4 mt-8">
                    <button className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Cancel
                    </button>
                    <button className="px-6 py-2 bg-[#FDCB6E] text-white rounded-lg hover:bg-[#E6B15C] transition-colors font-medium">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccSetting;