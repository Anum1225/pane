import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HeroBanner() {
  return (
    <div
      className="relative bg-cover bg-center py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/placeholder.svg?height=600&width=1200')",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">FACTORY-DIRECT AT CONTRACTOR PRICING</h1>

        <div className="max-w-2xl mx-auto space-y-4">
          <Input placeholder="Get Instant Quote" className="bg-white text-gray-800 py-3 px-4 text-center" />
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 text-lg font-semibold">
            Shop In Stock Windows
          </Button>
          <Input placeholder="Schedule In-home visit" className="bg-white text-gray-800 py-3 px-4 text-center" />
        </div>
      </div>
    </div>
  )
}
