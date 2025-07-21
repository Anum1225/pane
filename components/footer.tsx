import { Facebook, Instagram, Youtube, Clock, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">9:00 AM - 4:00 PM EST</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">1 (866) 407-2637</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">1 (905) 267-1240</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">info@panes.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>

            {/* Payment Icons */}
            <div className="flex space-x-2 mt-4">
              <div className="bg-gray-700 px-2 py-1 rounded text-xs">VISA</div>
              <div className="bg-gray-700 px-2 py-1 rounded text-xs">MC</div>
              <div className="bg-gray-700 px-2 py-1 rounded text-xs">AMEX</div>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold text-lg mb-6">Information</h3>
            <div className="space-y-3">
              {[
                "Home",
                "Career Opportunities",
                "Service Areas",
                "About Us",
                "Contact Us",
                "Warranty",
                "Terms of Use",
                "Privacy Policy",
                "Returns Policy",
                "Shipping Policy",
                "Buy Windows Online",
                "My Account",
              ].map((item, index) => (
                <Link key={index} href="#" className="block text-sm text-gray-300 hover:text-white">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-6">Products</h3>
            <div className="space-y-3">
              {[
                "Awning Windows",
                "Casement Windows",
                "High Tilt Windows",
                "Non-Radius Shapes",
                "Picture Windows",
                "Radius Shapes",
                "Double Slider Windows",
                "End Vent Sliders",
                "Single Slider Windows",
                "Double Hung Windows",
                "Single Hung Windows",
              ].map((item, index) => (
                <Link key={index} href="#" className="block text-sm text-gray-300 hover:text-white">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Blog */}
          <div>
            <h3 className="font-bold text-lg mb-6">Blog</h3>
            <div className="space-y-3">
              {[
                "What makes a company reputable?",
                "Is condensation normal on high-efficiency windows?",
                "Black Windows Are on Trend For 2023",
                "Vinyl Windows vs Wood Windows",
                "Bay Windows vs Bow Windows - What's the Difference?",
                "10 Reasons to Choose Panes.com",
                "Double Pane vs Triple Pane Windows",
              ].map((item, index) => (
                <Link key={index} href="#" className="block text-sm text-gray-300 hover:text-white">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-xs text-gray-400">Copyright © 2025 Panes Window Manufacturing Inc.</p>
        </div>
      </div>
    </footer>
  )
}
