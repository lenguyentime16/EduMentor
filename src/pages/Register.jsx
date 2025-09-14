import React from 'react';
import { RegisterForm } from '../components/register-form';
import { StudentIllustration } from '../components/student-illustration';
import { BackButton } from '../components/back-button';

const Register = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Left side - Illustration */}
            <div className="flex-1 bg-white flex items-center justify-center p-8">
                <div className="max-w-lg">
                    <StudentIllustration />
                </div>
            </div>

            {/* Right side - Register Form */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <div className="mb-6">
                        <BackButton />
                    </div>
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
};

export default Register;