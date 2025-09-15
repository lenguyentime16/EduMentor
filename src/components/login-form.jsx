
import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "./ui/Button"
import { Input } from "./ui/Input"
import { Label } from "./ui/label"
import { Eye, EyeOff } from "lucide-react"
import { SocialLoginButtons } from "./social-login-button"

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("robert.langster@gmail.com")
    const [password, setPassword] = useState("password123")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Login attempt:", { email, password })
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
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-900 font-medium">
                        Email / Username
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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

                <Button type="submit" className="w-full py-3 rounded-lg font-medium">
                    Login
                </Button>
            </form>

            <div className="text-center">
                <p className="text-gray-700">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="font-medium text-gray-900 hover:text-orange-600 transition-colors"
                    >
                        Register
                    </Link>
                </p>
            </div>

            <SocialLoginButtons />
        </div>
    )
}
