export default function ProductDescription() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 border-t">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="font-bebas text-3xl text-black mb-6">Product Description</h2>
          <div className="prose prose-gray max-w-none font-poppins">
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Insulated Glass Units (IGUs) are engineered for superior energy efficiency and durability. Each unit
              is custom manufactured to your exact specifications, ensuring a perfect fit for your project.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Featuring Guardian glass with advanced Low-E coatings, our IGUs significantly reduce heat transfer while
              maintaining excellent visibility. The warm-edge spacer technology minimizes thermal bridging, and argon
              gas fill provides additional insulation properties.
            </p>
            <p className="text-gray-700 leading-relaxed">
              All units are manufactured with dual seal construction using primary and secondary sealants to ensure
              long-term performance and prevent moisture infiltration.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-bebas text-xl text-black mb-4">Why Choose Our IGUs?</h3>
          <ul className="space-y-3 font-poppins text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-primary-orange">✓</span>
              <span>Custom sizing up to 96" x 96"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-orange">✓</span>
              <span>Energy Star qualified options</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-orange">✓</span>
              <span>10-year warranty included</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-orange">✓</span>
              <span>Fast 5-7 day production</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-orange">✓</span>
              <span>Professional installation available</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
