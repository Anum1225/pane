import { Award, Shield, Star } from "lucide-react"

export default function TrustBadges() {
  return (
    <div className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-12">
          <div className="flex flex-col items-center">
            <Award className="w-12 h-12 text-orange-500 mb-2" />
            <span className="text-xs font-semibold text-gray-700">BEST</span>
            <span className="text-xs text-gray-600">AWARD</span>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 text-gray-600 mb-2" />
            <span className="text-xs text-gray-600">CERTIFIED</span>
          </div>
          <div className="flex items-center">
            <span className="text-lg font-bold text-gray-700 mr-1">G</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 px-3 py-1 rounded">
              <span className="text-xs font-semibold">houzz</span>
            </div>
          </div>
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-gray-600 mr-2" />
            <div>
              <span className="text-xs font-semibold text-gray-700 block">SECURE</span>
              <span className="text-xs text-gray-600">SSL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
