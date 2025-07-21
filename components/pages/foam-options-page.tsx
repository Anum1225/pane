export default function FoamOptionsPage() {
  const foamSpecs = {
    material: {
      type: "Polyurethane Foam",
      certification: "USDA Certified Organic",
      density: "2.0 lbs/ft³",
      rValue: "R-6.5 per inch",
      thermalConductivity: "0.024 BTU·in/hr·ft²·°F",
    },
    performance: {
      thermalImprovement: "40-60% better than hollow",
      airInfiltration: "Reduces by 85%",
      structuralStrength: "Increases by 300%",
      soundReduction: "Up to 50% improvement",
      moistureResistance: "Closed cell structure",
    },
    environmental: {
      voc: "Zero VOC emissions",
      ozoneDepleting: "Zero ODP",
      globalWarming: "Low GWP",
      fireRating: "Class A flame spread",
      lifespan: "50+ years",
    },
    installation: {
      temperature: "Injected at 140°F",
      expansionRatio: "30:1",
      cureTime: "2-3 minutes",
      coverage: "100% cavity fill",
      quality: "No voids or gaps",
    },
  }

  const thermalComparison = [
    {
      type: "Hollow Frame",
      uValue: "0.35 BTU/hr·ft²·°F",
      rValue: "R-2.9",
      airLeakage: "0.30 cfm/ft²",
      condensationRisk: "High",
    },
    {
      type: "Foam Injected",
      uValue: "0.22 BTU/hr·ft²·°F",
      rValue: "R-4.5",
      airLeakage: "0.05 cfm/ft²",
      condensationRisk: "Very Low",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/images/foam-hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bebas">Foam Injected Windows</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Description */}
        <div className="mb-16">
          <p className="text-lg font-poppins text-gray-700 leading-relaxed mb-8">
            These two windows are the same except for what is inside the vinyl frames. The frame on the left is hollow,
            while the frame on the right is filled with insulating foam. The units have the same insulated glazing unit,
            a superwarm unit with R-5 center of glass. The hollow window frame allows air to circulate inside the frame;
            this circulation effect is eliminated by filling the frame with foam. As you can see from the thermal image,
            the foam injected window doesn't show this effect. These windows are being cooled on the back side with dry
            ice (-78.5°C).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Thermal comparison"
                className="w-full h-64 object-contain bg-gray-100 rounded-lg mb-4"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <img
                    src="/placeholder.svg?height=100&width=150"
                    alt="USDA Certified Biobased Product"
                    className="w-full h-20 object-contain mb-2"
                  />
                </div>
                <div className="text-center">
                  <img
                    src="/placeholder.svg?height=100&width=150"
                    alt="Energy Star"
                    className="w-full h-20 object-contain mb-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bebas text-center mb-12">Foam Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bebas mb-4 text-primary-orange">Material Properties</h3>
              <div className="space-y-2 text-sm">
                {Object.entries(foamSpecs.material).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="font-poppins font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                    <span className="font-poppins text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bebas mb-4 text-primary-orange">Performance Data</h3>
              <div className="space-y-2 text-sm">
                {Object.entries(foamSpecs.performance).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="font-poppins font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                    <span className="font-poppins text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bebas mb-4 text-primary-orange">Environmental</h3>
              <div className="space-y-2 text-sm">
                {Object.entries(foamSpecs.environmental).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="font-poppins font-medium">{key.toUpperCase()}:</span>
                    <span className="font-poppins text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bebas mb-4 text-primary-orange">Installation</h3>
              <div className="space-y-2 text-sm">
                {Object.entries(foamSpecs.installation).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="font-poppins font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                    <span className="font-poppins text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Performance Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bebas text-center mb-8">Performance Comparison</h2>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bebas text-gray-500 uppercase tracking-wider">
                      Frame Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bebas text-gray-500 uppercase tracking-wider">
                      U-Value
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bebas text-gray-500 uppercase tracking-wider">
                      R-Value
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bebas text-gray-500 uppercase tracking-wider">
                      Air Leakage
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bebas text-gray-500 uppercase tracking-wider">
                      Condensation Risk
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {thermalComparison.map((item, index) => (
                    <tr key={index} className={index === 1 ? "bg-green-50" : ""}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-poppins font-medium text-gray-900">
                        {item.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-poppins text-gray-500">{item.uValue}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-poppins text-gray-500">{item.rValue}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-poppins text-gray-500">
                        {item.airLeakage}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-poppins text-gray-500">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            item.condensationRisk === "Very Low"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {item.condensationRisk}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Increasing Thermal Efficiency */}
        <section className="mb-16">
          <h2 className="text-3xl font-bebas text-center mb-8">Increasing Thermal Efficiency</h2>

          <div className="flex items-start gap-8">
            <div className="flex-shrink-0">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Foam insulated window"
                className="w-48 h-48 object-contain"
              />
            </div>
            <div>
              <p className="text-gray-700 font-poppins leading-relaxed mb-6">
                Foam insulated window frames give a higher thermal efficiency over hollow frames. When cavities within
                the frame, millions of small air pockets are created that significantly improve thermal efficiency. For
                years, people have used polyurethane foam for numerous thermal applications. Today polyurethane foam can
                be found in steel and fiberglass doors, walls, attic insulation, pretty much anywhere an airspace needs
                insulation. Panes Window Manufacturing uses only USDA (United States Department of Agriculture)
                certified organic foam - safe, odourless, and the highest performance available on the market today.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bebas text-lg mb-2 text-blue-800">Energy Savings Calculator</h4>
                <p className="text-sm font-poppins text-blue-700 mb-2">
                  Based on a 2000 sq ft home with 300 sq ft of windows:
                </p>
                <ul className="text-sm font-poppins text-blue-700 space-y-1">
                  <li>• Annual heating cost reduction: $180-$240</li>
                  <li>• Annual cooling cost reduction: $120-$160</li>
                  <li>• Total annual savings: $300-$400</li>
                  <li>• Payback period: 3-5 years</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Diagram */}
        <section className="bg-gray-900 py-16 -mx-4 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Technical diagram of foam injected window"
                className="w-full max-w-4xl mx-auto"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              <div>
                <h3 className="text-xl font-bebas mb-4">1. Organic Foam</h3>
                <p className="text-sm font-poppins mb-6">
                  USDA (United States Department of Agriculture) Certified polyurethane foam, ensures safe and toxin
                  free insulation, while improving the overall thermal performance of the window.
                </p>
                <div className="bg-gray-800 p-3 rounded text-xs font-poppins">
                  <strong>Technical Details:</strong> Closed-cell structure with 97% air content, R-6.5 per inch thermal
                  resistance, zero off-gassing after cure.
                </div>

                <h3 className="text-xl font-bebas mb-4 mt-6">3. Highest Glass Efficiency</h3>
                <p className="text-sm font-poppins mb-3">
                  When combined with Triple Pane Low-E, Argon glass pack, the window meets and exceeds the highest
                  thermal efficiency set by Energy Star.
                </p>
                <div className="bg-gray-800 p-3 rounded text-xs font-poppins">
                  <strong>Performance:</strong> Overall window U-value as low as 0.15, ENERGY STAR Most Efficient
                  qualified.
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bebas mb-4">2. Warm-Edge Spacer</h3>
                <p className="text-sm font-poppins mb-6">
                  Our glass has the latest Warm-edge Spacer technology on the market today, using non-conductive, energy
                  efficient materials, and dual sealant, ensuring highest thermal performance and improved longevity.
                </p>
                <div className="bg-gray-800 p-3 rounded text-xs font-poppins">
                  <strong>Specifications:</strong> Stainless steel with thermal break, dual seal with polyisobutylene
                  and structural silicone, 20+ year warranty.
                </div>

                <h3 className="text-xl font-bebas mb-4 mt-6">4. Precision Welded Corners</h3>
                <p className="text-sm font-poppins mb-3">
                  We fusion weld our UPVC window frame and sash 1/8" on each side, at 260° Celsius, creating a strong
                  and durable bond, making our welded sill longer.
                </p>
                <div className="bg-gray-800 p-3 rounded text-xs font-poppins">
                  <strong>Quality Control:</strong> Weld strength tested to 3000 PSI, corner strength exceeds AAMA
                  standards by 200%.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
