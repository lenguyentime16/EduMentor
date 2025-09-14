import { ChevronLeft } from "lucide-react"

export function BackButton() {
    return (
        <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-[#1F1F1F] hover:text-[#E6B15C] transition-colors duration-200 font-medium"
        >
            <ChevronLeft className="w-4 h-4" />
            Back to website
        </button>
    )
}
