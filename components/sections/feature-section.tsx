import { Clock, Building, Star } from "lucide-react"

export default function FeatureSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bebas text-xl text-black mb-4">INSTANT, TRANSPARENT QUOTING</h3>
            <p className="text-sm font-poppins text-gray-600 leading-relaxed">
              Get an instant quote without having to speak to any pushy sales people. The quote that you receive is
              transparent and honest. We don't play games with our pricing. We make it simple. Get instant quote.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bebas text-xl text-black mb-4">SAME DAY INVENTORY</h3>
            <p className="text-sm font-poppins text-gray-600 leading-relaxed">
              Need a window right away? We stock hundreds of popular window sizes that can be shipped or picked up the
              same day. We also stock hundreds of Patio & Patio doors.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bebas text-xl text-black mb-4">A COMPANY YOU CAN TRUST</h3>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm font-poppins text-gray-600 leading-relaxed">
              Read what previous customers have to say about RAF Windows.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
