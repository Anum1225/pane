"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, ShoppingCart, Star, Phone, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import SearchBarOverlay from "@/components/ui/search-bar-overlay"
import CartPreviewOverlay from "@/components/ui/cart-preview-overlay"

export default function Header() {
  const pathname = usePathname()
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [showCartPreview, setShowCartPreview] = useState(false)

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path)
  }

  return (
    <header className="bg-white sticky top-0 z-50">
      {/* Top black bar */}
      <div className="bg-black py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-end items-center space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-right">
          <Link href="#" className="flex items-center gap-2 text-white hover:text-primary-orange transition-colors">
            <Star className="w-4 h-4 text-primary-orange" />
            <span className="text-sm font-poppins">Reviews</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 text-white hover:text-primary-orange transition-colors">
            <User className="w-4 h-4 text-primary-orange" />
            <span className="text-sm font-poppins">My Quotes</span>
          </Link>
          <Link
            href="tel:(123)-456-7890"
            className="flex items-center gap-2 text-white hover:text-primary-orange transition-colors"
          >
            <Phone className="w-4 h-4 text-primary-orange" />
            <span className="text-sm font-poppins">(123)-456-7890</span>
          </Link>
          <Link
            href="/sign-in"
            className="flex items-center gap-2 text-white hover:text-primary-orange transition-colors"
          >
            <User className="w-4 h-4 text-primary-orange" />
            <span className="text-sm font-poppins">Sign In / Create Account</span>
          </Link>
        </div>
      </div>

      {/* Main header with logo */}
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center sm:justify-center relative">
            {/* RAF Logo */}
            <Link href="/" className="flex items-center mb-4 sm:mb-0">
              <div className="text-center">
                <span className="block text-6xl font-bebas font-bold text-black">RAF</span>
              </div>
            </Link>

            {/* Right side icons - positioned absolutely on larger screens */}
            <div className="flex items-center space-x-4 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2">
              <Search
                className="w-6 h-6 text-black cursor-pointer hover:text-primary-orange transition-colors"
                onClick={() => setShowSearchBar(true)}
                aria-label="Open search bar"
              />
              <div className="relative">
                <ShoppingCart
                  className="w-6 h-6 text-black cursor-pointer hover:text-primary-orange transition-colors"
                  onClick={() => setShowCartPreview(true)}
                  aria-label="Open cart preview"
                />
                <span className="absolute -top-2 -right-2 bg-primary-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-poppins">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-primary-orange">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <Link
                href="/about"
                className={`text-white font-poppins font-medium text-sm hover:text-black transition-colors ${
                  isActive("/about") ? "text-black" : ""
                }`}
              >
                ABOUT US
              </Link>
              <Link
                href="/instant-quote"
                className={`text-white font-poppins font-medium text-sm hover:text-black transition-colors ${
                  isActive("/instant-quote") || pathname.includes("vinyl-windows") ? "text-black" : ""
                }`}
              >
                VINYL WINDOWS
              </Link>
              <Link
                href="/products/insulated-glass-units"
                className={`text-white font-poppins font-medium text-sm hover:text-black transition-colors ${
                  isActive("/products/insulated-glass-units") ? "text-black" : ""
                }`}
              >
                SEALED GLASS UNITS
              </Link>
              <Link
                href="/products/patio-doors"
                className={`text-white font-poppins font-medium text-sm hover:text-black transition-colors ${
                  isActive("/products/patio-doors") ? "text-black" : ""
                }`}
              >
                PATIO DOORS
              </Link>
              <Link
                href="/options"
                className={`text-white font-poppins font-medium text-sm hover:text-black transition-colors ${
                  isActive("/options") || pathname.includes("options") ? "text-black" : ""
                }`}
              >
                OPTIONS
              </Link>
              <Link href="#" className="text-white font-poppins font-medium text-sm hover:text-black transition-colors">
                OUR WORK
              </Link>
              <Link
                href="/contact"
                className={`text-white font-poppins font-medium text-sm hover:text-black transition-colors ${
                  isActive("/contact") ? "text-black" : ""
                }`}
              >
                CONTACT
              </Link>
            </nav>
            <Link href="/instant-quote">
              <Button
                className={`bg-white text-primary-orange hover:bg-gray-100 px-6 py-2 font-poppins font-semibold text-sm transition-colors ${
                  isActive("/instant-quote") ? "bg-gray-100" : ""
                }`}
              >
                INSTANT QUOTE
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Search Bar Overlay */}
      <SearchBarOverlay isOpen={showSearchBar} onClose={() => setShowSearchBar(false)} />

      {/* Cart Preview Overlay */}
      <CartPreviewOverlay isOpen={showCartPreview} onClose={() => setShowCartPreview(false)} />
    </header>
  )
}
