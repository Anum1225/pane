import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

interface ProductHeroProps {
  selectedSpecs: {
    width: number
    height: number
    thickness: number
    coating: string
    spacer: string
    gasFill: string
    grid: string
  }
}

export default function ProductHero({ selectedSpecs }: ProductHeroProps) {
  const calculatePrice = () => {
    const basePrice = 108.37
    const area = (selectedSpecs.width * selectedSpecs.height) / 144 // sq ft
    let price = basePrice * area

    // Add coating premium
    if (selectedSpecs.coating === "low-e-plus") price *= 1.15
    if (selectedSpecs.coating === "triple-silver") price *= 1.25

    // Add gas fill premium
    if (selectedSpecs.gasFill === "krypton") price *= 1.2

    return price.toFixed(2)
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Product Info */}
        <div>
          <h1 className="font-bebas text-4xl text-black mb-4">Insulated Glass Units</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-poppins text-sm text-gray-600">(127 reviews)</span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className="font-bebas text-3xl text-black">${calculatePrice()}</span>
              <span className="font-poppins text-sm text-gray-600">starting from</span>
            </div>
            <p className="font-poppins text-sm text-gray-600 mt-1">
              Price based on {selectedSpecs.width}" × {selectedSpecs.height}" configuration
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary-orange hover:bg-orange-700 text-white px-8 py-3 font-poppins font-semibold">
              Get Instant Quote
            </Button>
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 font-poppins font-semibold">
              Add to Cart
            </Button>
          </div>

          {/* Key Features */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-bebas text-xl text-black mb-4">Key Features</h3>
            <ul className="space-y-2 font-poppins text-sm text-gray-700">
              <li>• Custom sizing available</li>
              <li>• Low-E coatings for energy efficiency</li>
              <li>• Argon or Krypton gas fills</li>
              <li>• Warm-edge spacer technology</li>
              <li>• Guardian glass quality</li>
              <li>• Dual seal construction</li>
            </ul>
          </div>
        </div>

        {/* Quick Specs */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-bebas text-xl text-black mb-4">Current Configuration</h3>
          <div className="space-y-3 font-poppins text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Dimensions:</span>
              <span className="font-semibold">
                {selectedSpecs.width}" × {selectedSpecs.height}"
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Thickness:</span>
              <span className="font-semibold">{selectedSpecs.thickness}"</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Coating:</span>
              <span className="font-semibold capitalize">{selectedSpecs.coating.replace("-", " ")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Spacer:</span>
              <span className="font-semibold capitalize">{selectedSpecs.spacer.replace("-", " ")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Gas Fill:</span>
              <span className="font-semibold capitalize">{selectedSpecs.gasFill}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Grid:</span>
              <span className="font-semibold capitalize">
                {selectedSpecs.grid === "none" ? "No Grid" : selectedSpecs.grid}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
