import { Wrench } from "lucide-react"

export default function GlazingOptionsPage() {
  const climaguardOptions = [
    {
      name: "CLIMAGUARD 80/71",
      subtitle: "ENERGY STAR COMPLIANT",
      description:
        "Reflects heat from the sun back up to the atmosphere, keeping your home naturally cool and provides maximum protection from heat loss escaping.",
      image: "/placeholder.svg?height=200&width=300",
      specs: {
        uValue: "0.27 BTU/hr·ft²·°F",
        shgc: "0.71",
        vt: "0.80",
        lse: "0.04",
        airLeakage: "≤0.30 cfm/ft²",
      },
      features: [
        "Reflects heat naturally Low-E on 75% of the sun's heat",
        "The most energy efficient glazing selection: High light transmission of 73%",
      ],
    },
    {
      name: "CLIMAGUARD 70/36",
      subtitle: "ENERGY STAR COMPLIANT & ENERGY STAR MOST EFFICIENT",
      description: "Offers the ultimate in year-round comfort and reduces heat transfer in climates with hot summers.",
      image: "/placeholder.svg?height=200&width=300",
      specs: {
        uValue: "0.26 BTU/hr·ft²·°F",
        shgc: "0.36",
        vt: "0.70",
        lse: "0.03",
        airLeakage: "≤0.30 cfm/ft²",
      },
      features: [
        "All-season comfort: Saves you money on heating and cooling",
        "Thermal insulation: 36% more insulating than standard glass",
        "Solar control: Blocks 64% of the sun's heat",
      ],
    },
    {
      name: "CLIMAGUARD SNX 62/27",
      subtitle: "ENERGY STAR COMPLIANT & ENERGY STAR MOST EFFICIENT",
      description: "Provides excellent solar heat gain ratio from Solarban coated glass.",
      image: "/placeholder.svg?height=200&width=300",
      specs: {
        uValue: "0.25 BTU/hr·ft²·°F",
        shgc: "0.27",
        vt: "0.62",
        lse: "0.02",
        airLeakage: "≤0.30 cfm/ft²",
      },
      features: [
        "Low solar heat gain ratio: Lets in natural light but does little heat",
        "Neutral glass: SNX 62/27 coated glass product provides a neutral blue appearance",
        "Triple silver coating: An excellent choice for moderate to warm climates",
      ],
    },
    {
      name: "CLIMAGUARD IS-20",
      subtitle: "ALL SEASON COMFORT",
      description:
        "Enhances performance by lowering U-factor and reducing unwanted solar heat gain while maintaining visible light transmittance.",
      image: "/placeholder.svg?height=200&width=300",
      specs: {
        uValue: "0.20 BTU/hr·ft²·°F",
        shgc: "0.23",
        vt: "0.41",
        lse: "0.02",
        airLeakage: "≤0.30 cfm/ft²",
      },
      features: [
        "A blend to maintain its easy-to-clean appearance: Coated glass",
        "Long lasting coating: Maintains its clarity and performance as the glass ages",
        "Superior performance: Achieves superior performance",
      ],
    },
  ]

  const glassTypes = {
    tempered: {
      strength: "4-5x stronger than annealed glass",
      breakagePattern: "Small, relatively harmless pieces",
      thermalStress: "Up to 250°F temperature differential",
      applications: "Safety glazing, large windows, doors",
      thickness: "3mm to 19mm available",
      standards: "ANSI Z97.1, CPSC 16 CFR 1201",
    },
    laminated: {
      strength: "Maintains structural integrity when broken",
      breakagePattern: "Glass adheres to interlayer",
      soundReduction: "Up to 50% noise reduction",
      uvProtection: "99.9% UV ray blocking",
      thickness: "6.38mm to 17.52mm standard",
      standards: "ANSI Z97.1, ASTM F1233",
    },
  }

  const paneComparison = {
    double: {
      uValue: "0.25-0.30 BTU/hr·ft²·°F",
      rValue: "3.3-4.0 hr·ft²·°F/BTU",
      airSpace: '1/2" or 5/8" standard',
      weight: '5.2 lbs/ft² (1" IG)',
      soundReduction: "26-32 STC rating",
      condensationResistance: "45-55 CRF",
    },
    triple: {
      uValue: "0.15-0.20 BTU/hr·ft²·°F",
      rValue: "5.0-6.7 hr·ft²·°F/BTU",
      airSpace: 'Two 1/2" spaces standard',
      weight: '7.8 lbs/ft² (1.5" IG)',
      soundReduction: "32-38 STC rating",
      condensationResistance: "60-70 CRF",
    },
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/images/glazing-hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-5xl font-bebas">Glazing Options</h1>
            <Wrench className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Low E Glass Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bebas text-center mb-8">Low E Glass</h2>

          <div className="prose max-w-none mb-12">
            <p className="text-gray-700 font-poppins leading-relaxed mb-4">
              All surfaces reflect, absorb and transmit heat. Guardian low-emissivity thin-film coatings help control
              the transfer of heat to help make buildings more comfortable, energy efficient and filled with natural
              light. As one of the world's largest glass coaters, Guardian offers numerous low-E coatings that can
              achieve the proper balance between light and heat.
            </p>
            <p className="text-gray-700 font-poppins leading-relaxed mb-4">
              Technological advances in the last three decades have made it possible to manipulate light in ways that
              were previously impossible. These coatings are made with extremely thin layers of metallic oxides and
              other compounds to achieve specific optical and thermal properties. Depending on the layers used, coatings
              can manipulate light, reduce heat gain or loss, and achieve a desired color or appearance.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-bebas mb-4">Solutions for any climate, any setting</h3>
            <p className="text-gray-700 font-poppins leading-relaxed mb-4">
              No matter the location or application, Guardian low-E coatings can help meet your performance requirements
              for light, comfort and sustainability. We offer high-solar-gain coatings designed for cold northern
              climates, and low-solar gain for hot southern climates. Explore our solutions for residential and
              commercial space below.
            </p>
            <p className="text-gray-700 font-poppins leading-relaxed">
              See all the low-E coatings that Panes Window Manufacturing uses under the ClimaGuard® product line.
            </p>
          </div>

          {/* CLIMAGUARD Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {climaguardOptions.map((option, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <img src={option.image || "/placeholder.svg"} alt={option.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bebas mb-2">{option.name}</h4>
                  <p className="text-sm font-poppins text-primary-orange font-semibold mb-3">{option.subtitle}</p>
                  <p className="text-gray-700 font-poppins text-sm leading-relaxed mb-4">{option.description}</p>

                  {/* Performance Specifications */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h5 className="font-bebas text-lg mb-3">Performance Data</h5>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex justify-between">
                        <span className="font-poppins font-medium">U-Value:</span>
                        <span className="font-poppins">{option.specs.uValue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-poppins font-medium">SHGC:</span>
                        <span className="font-poppins">{option.specs.shgc}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-poppins font-medium">VT:</span>
                        <span className="font-poppins">{option.specs.vt}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-poppins font-medium">LSE:</span>
                        <span className="font-poppins">{option.specs.lse}</span>
                      </div>
                      <div className="flex justify-between col-span-2">
                        <span className="font-poppins font-medium">Air Leakage:</span>
                        <span className="font-poppins">{option.specs.airLeakage}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm font-poppins text-gray-600 flex items-start">
                        <span className="text-primary-orange mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Glass Types */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Tempered Glass */}
            <div className="text-center">
              <h3 className="text-2xl font-bebas mb-6">Tempered Glass</h3>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Tempered Glass"
                  className="w-full h-32 object-contain"
                />
              </div>
              <p className="text-sm font-poppins text-gray-700 leading-relaxed mb-6">
                Tempered glass is a type of safety glass that is 4-5 times stronger than regular glass. Because of how
                it's made through a process of extreme heating and rapid cooling it is a much stronger glass. When
                tempered glass does break, it shatters into small pebbles without any dangerous sharp edges.
              </p>

              <div className="bg-white border border-gray-200 rounded-lg p-4 text-left">
                <h4 className="font-bebas text-lg mb-3 text-primary-orange">Technical Specifications</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Strength:</span>
                    <span className="font-poppins">{glassTypes.tempered.strength}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Breakage:</span>
                    <span className="font-poppins">{glassTypes.tempered.breakagePattern}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Thermal Stress:</span>
                    <span className="font-poppins">{glassTypes.tempered.thermalStress}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Thickness:</span>
                    <span className="font-poppins">{glassTypes.tempered.thickness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Standards:</span>
                    <span className="font-poppins text-xs">{glassTypes.tempered.standards}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Laminated Glass */}
            <div className="text-center">
              <h3 className="text-2xl font-bebas mb-6">Laminated Glass</h3>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Laminated Glass"
                  className="w-full h-32 object-contain"
                />
              </div>
              <p className="text-sm font-poppins text-gray-700 leading-relaxed mb-6">
                Laminated Glass is both a safety and security glass. It is made by bonding two pieces of glass together
                with a plastic inner layer called polyvinyl butyral. However, laminated glass looks much better than
                tempered on breakage.
              </p>

              <div className="bg-white border border-gray-200 rounded-lg p-4 text-left">
                <h4 className="font-bebas text-lg mb-3 text-primary-orange">Technical Specifications</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Strength:</span>
                    <span className="font-poppins">{glassTypes.laminated.strength}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Breakage:</span>
                    <span className="font-poppins">{glassTypes.laminated.breakagePattern}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Sound Reduction:</span>
                    <span className="font-poppins">{glassTypes.laminated.soundReduction}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">UV Protection:</span>
                    <span className="font-poppins">{glassTypes.laminated.uvProtection}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Thickness:</span>
                    <span className="font-poppins">{glassTypes.laminated.thickness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Standards:</span>
                    <span className="font-poppins text-xs">{glassTypes.laminated.standards}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Double vs Triple Pane */}
        <section className="mb-16">
          <h3 className="text-2xl font-bebas text-center mb-8">Pane Configuration Comparison</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Double Pane */}
            <div className="text-center">
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Double Pane Glass"
                  className="w-full h-32 object-contain"
                />
              </div>
              <h4 className="text-2xl font-bebas mb-4">DOUBLE PANE GLASS</h4>
              <p className="text-sm font-poppins text-gray-700 leading-relaxed mb-6">
                Double pane glass is when two sheets of glass are used rather than a single pane. A tiny space is left
                between the two sheets of glass to create an insulating air pocket. This space is filled with a gas to
                increase the energy efficiency of your windows.
              </p>

              <div className="bg-white border border-gray-200 rounded-lg p-4 text-left">
                <h5 className="font-bebas text-lg mb-3 text-primary-orange">Performance Specifications</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">U-Value:</span>
                    <span className="font-poppins">{paneComparison.double.uValue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">R-Value:</span>
                    <span className="font-poppins">{paneComparison.double.rValue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Air Space:</span>
                    <span className="font-poppins">{paneComparison.double.airSpace}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Weight:</span>
                    <span className="font-poppins">{paneComparison.double.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Sound Rating:</span>
                    <span className="font-poppins">{paneComparison.double.soundReduction}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Condensation:</span>
                    <span className="font-poppins">{paneComparison.double.condensationResistance}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Triple Pane */}
            <div className="text-center">
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Triple Pane Glass"
                  className="w-full h-32 object-contain"
                />
              </div>
              <h4 className="text-2xl font-bebas mb-4">TRIPLE PANE GLASS</h4>
              <p className="text-sm font-poppins text-gray-700 leading-relaxed mb-6">
                Triple pane glass is when three sheets of glass are used rather than a single or double pane. A tiny
                space is left between each sheet of glass. This space is filled with a gas to increase the energy
                efficiency of your windows.
              </p>

              <div className="bg-white border border-gray-200 rounded-lg p-4 text-left">
                <h5 className="font-bebas text-lg mb-3 text-primary-orange">Performance Specifications</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">U-Value:</span>
                    <span className="font-poppins">{paneComparison.triple.uValue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">R-Value:</span>
                    <span className="font-poppins">{paneComparison.triple.rValue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Air Space:</span>
                    <span className="font-poppins">{paneComparison.triple.airSpace}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Weight:</span>
                    <span className="font-poppins">{paneComparison.triple.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Sound Rating:</span>
                    <span className="font-poppins">{paneComparison.triple.soundReduction}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Condensation:</span>
                    <span className="font-poppins">{paneComparison.triple.condensationResistance}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Argon Gas */}
        <section>
          <div className="bg-purple-100 p-8 rounded-lg">
            <div className="flex items-start gap-6">
              <div className="bg-purple-600 p-4 rounded-lg flex-shrink-0">
                <span className="text-white text-4xl font-bold">Ar</span>
                <div className="text-white text-xs text-center">ARGON</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bebas mb-4">ARGON GAS</h3>
                <p className="text-gray-700 font-poppins text-sm leading-relaxed mb-4">
                  Argon gas is used to increase the energy efficiency and general performance of thermal windows.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bebas text-lg mb-3 text-purple-600">Performance Benefits</h4>
                    <ul className="space-y-2 text-sm font-poppins text-gray-700">
                      <li>
                        • Improves U-value: the measure of a window's thermal performance, similar to the R-value of
                        wall insulation
                      </li>
                      <li>• Enhances Soundproofing characteristics</li>
                      <li>• Prevents condensation between glass panes</li>
                      <li>• Reduces the possibility of condensation and frost</li>
                      <li>• Can be used in all climates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bebas text-lg mb-3 text-purple-600">Technical Specifications</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-poppins font-medium">Density:</span>
                        <span className="font-poppins">1.784 kg/m³</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-poppins font-medium">Thermal Conductivity:</span>
                        <span className="font-poppins">0.016 W/m·K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-poppins font-medium">Fill Percentage:</span>
                        <span className="font-poppins">97%+ certified</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-poppins font-medium">Retention Rate:</span>
                        <span className="font-poppins">1% loss/year max</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-poppins font-medium">U-Value Improvement:</span>
                        <span className="font-poppins">15-20% better</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="text-sm font-poppins text-gray-600">
                    <strong>Quality Assurance:</strong> Panes Windows are certified to 97% or more Argon Gas by ENERGY
                    STAR. All units undergo gas chromatography testing to verify fill levels and retention rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
