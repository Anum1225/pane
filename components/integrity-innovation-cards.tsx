import { Heart, Activity } from "lucide-react"

export default function IntegrityInnovationCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Integrity Card */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Heart className="w-16 h-16 text-gray-800 fill-gray-800" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">INTEGRITY</h2>
            <p className="text-gray-600 leading-relaxed">
              We've always coupled our commitment to innovative and performance-driven products with an unwavering focus
              on customer service. These were our values yesterday, they are our values today, and they will be our
              values forever.
            </p>
          </div>

          {/* Innovation Card */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Activity className="w-16 h-16 text-gray-800" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">INNOVATION</h2>
            <p className="text-gray-600 leading-relaxed">
              We're driving innovation in all aspects of this industry, from the Point of Sale to the manufacturing
              floor to the installation process. We're constantly driving change and improvements to ensure unparalleled
              experiences for our customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
