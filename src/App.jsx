// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import TutorsSection from './components/sections/TutorsSection';
import StatsSection from './components/sections/StatsSection';
import FeaturesSection from './components/sections/FeaturesSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import AppSection from './components/sections/AppSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import CTASection from './components/sections/CTASection';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import FindTutor from './pages/FindTutor';
import MyBookings from './pages/MyBookings';
import TutorBookingInf from './pages/TutorBookingInf';
import Booking from './pages/Booking';
import Messages from './pages/Messages';
import AccSetting from './pages/AccSetting';
import Payment from './pages/Payment';
import PaymentMethod from './pages/PaymentMethod';
import Confirmation from './pages/Confirmation';
import PaymentSuccess from './pages/PaymentSuccess';   


// Landing Page Component
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <TutorsSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <AppSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Route */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Find Tutor Route */}
        <Route path="/find-tutor" element={<FindTutor />} />

        {/* Landing Page Route */}
        <Route path="/landing" element={<LandingPage />} />        {/* Catch all route - redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
       
        {/* My Bookings Route */}
        <Route path="/my-bookings" element={<MyBookings />} />

        {/* Tutor Booking Info Route */}
        <Route path="/tutor/:tutorId" element={<TutorBookingInf />} />

        {/* Booking Route */}
        <Route path="/booking" element={<Booking />} />

        {/* Messages Route */}
        <Route path="/messages" element={<Messages />} />

        {/* Account Settings Route */}
        <Route path="/account-settings" element={<AccSetting />} />

        {/* Payment Route */}
        <Route path="/payment" element={<Payment />} />

        {/* Payment Method Route */}
        <Route path="/payment-method" element={<PaymentMethod />} />

        {/* Confirmation Route */}
        <Route path="/confirmation" element={<Confirmation />} />

        {/* Payment Success Route */}
        <Route path="/payment-success" element={<PaymentSuccess />} />

      </Routes>
    </Router>
  );
}

export default App;