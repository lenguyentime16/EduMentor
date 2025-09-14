// src/App.jsx
import React, { useState, useEffect } from 'react';
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

function App() {
  const [currentPage, setCurrentPage] = useState('login'); // 'landing', 'login', 'register'

  useEffect(() => {
    const handleNavigateToLogin = () => {
      console.log('Navigating to login');
      setCurrentPage('login');
    };
    const handleNavigateToRegister = () => {
      console.log('Navigating to register');
      setCurrentPage('register');
    };
    const handleNavigateToLanding = () => {
      console.log('Navigating to landing');
      setCurrentPage('landing');
    };

    window.addEventListener('navigateToLogin', handleNavigateToLogin);
    window.addEventListener('navigateToRegister', handleNavigateToRegister);
    window.addEventListener('navigateToLanding', handleNavigateToLanding);

    return () => {
      window.removeEventListener('navigateToLogin', handleNavigateToLogin);
      window.removeEventListener('navigateToRegister', handleNavigateToRegister);
      window.removeEventListener('navigateToLanding', handleNavigateToLanding);
    };
  }, []);

  if (currentPage === 'login') {
    return <Login />;
  }

  if (currentPage === 'register') {
    return <Register />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Test Navigation Buttons */}
      <div className="fixed top-4 right-4 z-50 space-x-2">
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('navigateToLogin'))}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Go to Login
        </button>
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('navigateToRegister'))}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Go to Register
        </button>
      </div>

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
}

export default App;