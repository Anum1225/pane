import { Button } from "@/components/ui/button"
import { Search, ShoppingCart, User, Phone } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-100 py-1 px-4">
        <div className="max-w-7xl mx-auto flex justify-end items-center text-xs text-gray-600 space-x-4">
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" />
            Sign In | Create Account
          </span>
          <span>Reviews</span>
          <span>My Quotes</span>
          <span className="flex items-center gap-1">
            <Phone className="w-3 h-3" />
            (866) 407-2637
          </span>
          <span className="text-red-500">Privacy</span>
          <span className="text-red-500">🛡️</span>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-800">
              <div className="flex flex-col items-center">
                <div className="bg-gray-800 text-white px-3 py-2 transform -skew-x-12 mb-1">
                  <span className="block transform skew-x-12 text-xl font-bold">PANES</span>
                </div>
                <div className="text-xs text-gray-600 font-normal">
                  <div>WINDOW MANUFACTURING</div>
                  <div className="text-center text-[10px] mt-1">WINDOW SHOPPING. REVOLUTIONIZED.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-8 text-sm font-medium text-gray-700">
              <Link href="#" className="hover:text-blue-600">
                ABOUT US
              </Link>
              <Link href="#" className="hover:text-blue-600">
                VINYL WINDOWS
              </Link>
              <Link href="#" className="hover:text-blue-600">
                SEALED GLASS UNITS
              </Link>
              <Link href="#" className="hover:text-blue-600">
                PATIO DOORS
              </Link>
              <Link href="#" className="hover:text-blue-600">
                OPTIONS
              </Link>
              <Link href="#" className="hover:text-blue-600">
                OUR WORK
              </Link>
              <Link href="#" className="hover:text-blue-600">
                CONTACT
              </Link>
            </div>
            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 text-sm">INSTANT QUOTE</Button>
          </div>
        </nav>
      </div>

      {/* Custom made windows banner */}
      <div className="bg-gray-800 text-white text-center py-2">
        <p className="text-sm">Custom made windows in as quick as 10 business days</p>
      </div>
    </header>
  )
}
