import { Facebook, Instagram, Youtube, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="font-bebas text-2xl text-white mb-6 border-b-2 border-primary-orange pb-2">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-orange p-2 rounded-full" aria-hidden="true">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a
                  href="tel:+11234567890"
                  className="text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label="Call us at 123-456-7890"
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-orange p-2 rounded-full" aria-hidden="true">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a
                  href="tel:+19054567890"
                  className="text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label="Call us at 905-456-7890"
                >
                  (905) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-orange p-2 rounded-full" aria-hidden="true">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a
                  href="mailto:info@panes.com"
                  className="text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label="Email us at info@panes.com"
                >
                  info@panes.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-orange p-2 rounded-full" aria-hidden="true">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-poppins text-white">9:00 AM - 4:00 PM EST</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3 mt-6" role="group" aria-label="Social media links">
              <a
                href="https://facebook.com/panes"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-black" />
              </a>
              <a
                href="https://youtube.com/panes"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-orange p-2 rounded hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com/panes"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-orange p-2 rounded hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bebas text-2xl text-white mb-6 border-b-2 border-primary-orange pb-2">Quick Links</h3>
            <nav aria-label="Quick links navigation">
              <div className="space-y-3">
                <Link
                  href="/"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Home
                </Link>
                <Link
                  href="/careers"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Career Opportunities
                </Link>
                <Link
                  href="/service-areas"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Service Areas
                </Link>
                <Link
                  href="/about"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • About Us
                </Link>
                <Link
                  href="/contact"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Contact Us
                </Link>
                <Link
                  href="/warranty"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Warranty
                </Link>
                <Link
                  href="/terms"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Terms Of Use
                </Link>
                <Link
                  href="/privacy"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Privacy Policy
                </Link>
                <Link
                  href="/returns"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Returns Policy
                </Link>
                <Link
                  href="/shipping"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Shipping Policy
                </Link>
                <Link
                  href="/shop"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Buy Windows Online
                </Link>
                <Link
                  href="/sign-in"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • My Account
                </Link>
              </div>
            </nav>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bebas text-2xl text-white mb-6 border-b-2 border-primary-orange pb-2">Products</h3>
            <nav aria-label="Products navigation">
              <div className="space-y-3">
                <Link
                  href="/products/awning-windows"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Awning Windows
                </Link>
                <Link
                  href="/products/casement-windows"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Casement Windows
                </Link>
                <Link
                  href="/products/high-fix-windows"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • High Fix Windows
                </Link>
                <Link
                  href="/products/non-radius-shapes"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Non-Radius Shapes
                </Link>
                <Link
                  href="/products/picture-windows"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Picture Windows
                </Link>
                <Link
                  href="/products/radius-shapes"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Radius Shapes
                </Link>
                <Link
                  href="/products/double-slider-windows"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Double Slider Windows
                </Link>
                <Link
                  href="/products/end-vent-sliders"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • End Vent Sliders
                </Link>
                <Link
                  href="/products/single-slider-windows"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Single Slider Windows
                </Link>
                <Link
                  href="/products/double-hung-windows"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Double Hung Windows
                </Link>
                <Link
                  href="/products/single-hung-windows"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Single Hung Windows
                </Link>
              </div>
            </nav>
          </div>

          {/* Blog */}
          <div>
            <h3 className="font-bebas text-2xl text-white mb-6 border-b-2 border-primary-orange pb-2">Blog</h3>
            <nav aria-label="Blog navigation">
              <div className="space-y-3">
                <Link
                  href="/blog/what-makes-company-reputable"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • What Makes A Company Reputable?
                </Link>
                <Link
                  href="/blog/condensation-high-efficiency-windows"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Is Condensation Normal On High-Efficiency Windows?
                </Link>
                <Link
                  href="/blog/black-windows-trend-2023"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Black Windows Are On Trend For 2023
                </Link>
                <Link
                  href="/blog/vinyl-vs-wood-windows"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Vinyl Windows Vs Wood Windows
                </Link>
                <Link
                  href="/blog/bay-vs-bow-windows"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Bay Windows Vs Bow Windows - What's Better?
                </Link>
                <Link
                  href="/blog/10-reasons-choose-panes"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • 10 Reasons To Choose Panes.Com
                </Link>
                <Link
                  href="/blog/double-vs-triple-pane-windows"
                  className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  • Double Pane Vs Triple Pane Windows
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Bottom section with copyright and payment methods */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="bg-primary-orange py-4 px-6 rounded">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-white font-poppins text-sm text-center sm:text-left">
                © 2024 Panes Window Manufacturing Inc. - All Rights Reserved
              </p>

              {/* Payment Methods */}
              <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Accepted payment methods">
                <div
                  className="bg-white px-3 py-1 rounded text-xs font-poppins font-bold text-black"
                  aria-label="Google Pay accepted"
                >
                  G Pay
                </div>
                <div
                  className="bg-blue-600 px-3 py-1 rounded text-xs font-poppins font-bold text-white"
                  aria-label="PayPal accepted"
                >
                  PayPal
                </div>
                <div
                  className="bg-blue-800 px-3 py-1 rounded text-xs font-poppins font-bold text-white"
                  aria-label="American Express accepted"
                >
                  AMEX
                </div>
                <div
                  className="bg-red-600 px-3 py-1 rounded text-xs font-poppins font-bold text-white"
                  aria-label="Mastercard accepted"
                >
                  MC
                </div>
                <div
                  className="bg-blue-900 px-3 py-1 rounded text-xs font-poppins font-bold text-white"
                  aria-label="Visa accepted"
                >
                  VISA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
