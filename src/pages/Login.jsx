import { BackButton } from "../components/back-button"
import { LoginForm } from "../components/login-form"
import { StudentIllustration } from "../components/student-illustration"

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <BackButton />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left side - Illustration */}
                    <div className="order-2 lg:order-1">
                        <StudentIllustration />
                    </div>

                    {/* Right side - Login Form */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
