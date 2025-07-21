import { Shield, Award, CheckCircle } from "lucide-react"

export default function QualityDurability() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 border-t">
      <h2 className="font-bebas text-3xl text-black mb-8 text-center">Glass Quality & Durability</h2>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-primary-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bebas text-xl text-black mb-4">Guardian Glass Quality</h3>
          <p className="font-poppins text-sm text-gray-700 leading-relaxed">
            We exclusively use Guardian glass, known for superior clarity, consistency, and performance. Each piece
            meets strict quality standards for optical clarity and structural integrity.
          </p>
        </div>

        <div className="text-center">
          <div className="bg-primary-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bebas text-xl text-black mb-4">Dual Seal Construction</h3>
          <p className="font-poppins text-sm text-gray-700 leading-relaxed">
            Our IGUs feature dual seal construction with primary butyl sealant and secondary structural sealant,
            providing superior moisture protection and long-term durability.
          </p>
        </div>

        <div className="text-center">
          <div className="bg-primary-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bebas text-xl text-black mb-4">Moisture Barrier</h3>
          <p className="font-poppins text-sm text-gray-700 leading-relaxed">
            Advanced desiccant technology and vapor barrier systems prevent moisture infiltration, ensuring clear
            visibility and preventing fogging between glass panes.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 p-8 rounded-lg">
        <h3 className="font-bebas text-2xl text-black mb-6 text-center">Quality Certifications</h3>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="bg-white p-4 rounded-lg mb-2">
              <span className="font-bebas text-lg text-primary-orange">IGMA</span>
            </div>
            <p className="font-poppins text-xs text-gray-600">Certified Member</p>
          </div>
          <div>
            <div className="bg-white p-4 rounded-lg mb-2">
              <span className="font-bebas text-lg text-primary-orange">ENERGY STAR</span>
            </div>
            <p className="font-poppins text-xs text-gray-600">Qualified Products</p>
          </div>
          <div>
            <div className="bg-white p-4 rounded-lg mb-2">
              <span className="font-bebas text-lg text-primary-orange">NFRC</span>
            </div>
            <p className="font-poppins text-xs text-gray-600">Rated Performance</p>
          </div>
          <div>
            <div className="bg-white p-4 rounded-lg mb-2">
              <span className="font-bebas text-lg text-primary-orange">CSA</span>
            </div>
            <p className="font-poppins text-xs text-gray-600">Certified Quality</p>
          </div>
        </div>
      </div>
    </section>
  )
}
