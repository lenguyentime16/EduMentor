import { useState } from "react"
import Button from "./ui/Button"
import { Input } from "./ui/Input"
import { Label } from "./ui/label"
import { Eye, EyeOff } from "lucide-react"
import { SocialLoginButtons } from "./social-login-button"

export function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "Alex",
        lastName: "Ferguson",
        email: "robert.langster@gmail.com",
        phone: "01234567890",
        password: "password123",
        confirmPassword: "password123"
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Register attempt:", formData)
    }

    return (
        <div className="w-full max-w-md space-y-6">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-gray-900">Welcome !</h1>
                <p className="text-gray-700">
                    <span className="font-medium">Sign Up</span> as a Student
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-900 font-medium">
                            First name
                        </Label>
                        <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-900 font-medium">
                            Last name
                        </Label>
                        <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-900 font-medium">
                        Email
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-900 font-medium">
                        Phone number
                    </Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-900 font-medium">
                        Password
                    </Label>
                    <div className="relative">
                        <Input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleInputChange}
                            className="border-orange-200 focus:border-orange-500 focus:ring-orange-500 pr-10"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-500 hover:text-orange-600 transition-colors"
                        >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-gray-900 font-medium">
                        Confirm Password
                    </Label>
                    <div className="relative">
                        <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className="border-orange-200 focus:border-orange-500 focus:ring-orange-500 pr-10"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-500 hover:text-orange-600 transition-colors"
                        >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                    </div>
                </div>

                <Button type="submit" className="w-full py-3 rounded-lg font-medium">
                    Sign Up
                </Button>
            </form>

            <div className="text-center">
                <p className="text-gray-700">
                    Have an account?{" "}
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent('navigateToLogin'))}
                        className="font-medium text-gray-900 hover:text-orange-600 transition-colors"
                    >
                        Login
                    </button>
                </p>
            </div>

            <div className="text-center text-gray-500 text-sm">
                Or, register with
            </div>

            <SocialLoginButtons />
        </div>
    )
}