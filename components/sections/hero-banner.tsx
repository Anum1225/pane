import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroBanner() {
  return (
    <div
      className="relative min-h-[600px] bg-cover bg-center flex items-center justify-center py-12 px-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/placeholder.svg?height=600&width=1200')",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bebas font-bold text-white mb-8 md:mb-12 leading-tight">
          EXCEPTIONAL FACTORY VALUE WITH
          <br className="hidden md:block" />
          CONTRACTOR SAVINGS
        </h1>

        {/* Stacked CTA Buttons */}
        <div className="max-w-md mx-auto space-y-4">
          <Link href="/shop">
            <Button className="w-full bg-white text-primary-orange hover:bg-gray-100 py-3 md:py-4 px-8 text-base md:text-lg font-poppins font-semibold transition-colors">
              Shop In Stock Windows
            </Button>
          </Link>

          <Link href="/instant-quote">
            <Button className="w-full bg-primary-orange text-white hover:bg-orange-700 py-3 md:py-4 px-8 text-base md:text-lg font-poppins font-semibold transition-colors">
              Get Instant Quote
            </Button>
          </Link>

          <Link href="/contact">
            <Button className="w-full bg-white text-primary-orange hover:bg-gray-100 py-3 md:py-4 px-8 text-base md:text-lg font-poppins font-semibold transition-colors">
              Schedule In Home Visit
            </Button>
          </Link>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 w-full px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {/* HomeStars Best Award */}
          <div className="bg-white p-2 md:p-3 rounded-lg shadow-lg flex-shrink-0">
            <div className="text-center">
              <div className="text-accent-skyblue font-bebas text-xs md:text-sm">HOMESTARS</div>
              <div className="bg-accent-gold text-white px-1 md:px-2 py-0.5 rounded text-xs font-poppins font-bold">
                BEST OF AWARD WINNER
              </div>
              <div className="text-black text-xs font-poppins">2017-2024</div>
            </div>
          </div>

          {/* HomeStars Verified */}
          <div className="bg-accent-skyblue p-2 md:p-3 rounded-lg shadow-lg flex-shrink-0">
            <div className="text-center text-white">
              <div className="font-bebas text-xs md:text-sm">HOMESTARS</div>
              <div className="font-poppins text-xs">VERIFIED</div>
            </div>
          </div>

          {/* Google Reviews */}
          <div className="bg-white p-2 md:p-3 rounded-lg shadow-lg flex-shrink-0">
            <div className="flex items-center space-x-1 md:space-x-2">
              <div className="text-accent-skyblue font-bold text-base md:text-lg">G</div>
              <div>
                <div className="text-black text-xs font-poppins">Google Rating</div>
                <div className="flex text-yellow-400">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <div className="text-black text-xs font-poppins">5.0 ★★★★★ (24 reviews)</div>
              </div>
            </div>
          </div>

          {/* SSL Secure */}
          <div className="bg-white p-2 md:p-3 rounded-lg shadow-lg flex-shrink-0">
            <div className="text-center">
              <div className="text-accent-green font-bebas text-xs md:text-sm">SECURE</div>
              <div className="text-black text-xs font-poppins">SSL ENCRYPTED</div>
            </div>
          </div>

          {/* Houzz */}
          <div className="bg-white p-2 md:p-3 rounded-lg shadow-lg flex-shrink-0">
            <div className="text-center">
              <div className="text-black font-bebas text-xs md:text-sm">FEATURED ON</div>
              <div className="text-accent-green font-bold text-base md:text-lg">houzz</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
