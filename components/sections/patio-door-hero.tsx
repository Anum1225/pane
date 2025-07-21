import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"

export default function ProductHeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Product Image */}
        <div className="flex justify-center">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="w-80 h-96 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Patio Doors"
                width={300}
                height={400}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="text-center font-poppins text-xs text-gray-500 mt-4">* Image not to scale dimensions</p>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="font-bebas text-4xl text-black mb-4">Patio Doors</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="font-bebas text-3xl text-black">STARTING FROM $0.00</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <Button className="w-full bg-primary-orange hover:bg-orange-700 text-white py-4 px-8 font-poppins font-semibold text-base">
                GET INSTANT QUOTE
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 font-poppins font-semibold text-base">
                REQUEST IN-HOME ESTIMATE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
