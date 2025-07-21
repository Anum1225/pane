import { Button } from "@/components/ui/button"

export default function FlexScreenPage() {
  const features = [
    {
      title: "Simple Design",
      description:
        "FlexScreen uses a revolutionary design that utilizes a PVC coated, high-performance spring steel frame. However, innovation does not need to be complex, so you will not find unnecessary attachment hardware on FlexScreen.",
      image: "/placeholder.svg?height=200&width=300",
      specs: {
        frameType: "Spring Steel Core",
        coating: "PVC Polymer",
        attachmentHardware: "None Required",
        designLife: "20+ Years",
      },
    },
    {
      title: "Effortless Installation",
      description:
        "Built with you in mind. Simply hold the screen in your hands, bend the sides in, and fit FlexScreen into your screen track. It is that easy.",
      image: "/placeholder.svg?height=200&width=300",
      specs: {
        installationTime: "< 30 seconds",
        toolsRequired: "None",
        skillLevel: "Homeowner Friendly",
        removalForce: "< 5 lbs",
      },
    },
    {
      title: "Damage Resistant",
      description:
        "We were tired of bent aluminum frames, scratched paint, and broken hardware. So we found a window screen that can be thrown from the top of a five-story building without being damaged.",
      image: "/placeholder.svg?height=200&width=300",
      specs: {
        impactResistance: "5-Story Drop Test",
        bendRadius: "180° without damage",
        materialStrength: "65,000 PSI",
        weatherResistance: "UV Stabilized",
      },
    },
    {
      title: "Beautifully Invisible",
      description:
        "FlexScreen hides in the window screen pocket, drastically improving sight lines and eliminating the need for color matching. Your windows will never look better.",
      image: "/placeholder.svg?height=200&width=300",
      specs: {
        visibilityImprovement: "40% better sight lines",
        frameVisibility: "Virtually invisible",
        colorMatching: "Not required",
        aestheticRating: "Premium",
      },
    },
  ]

  const technicalSpecs = {
    material: {
      frame: "Spring Steel with PVC Coating",
      mesh: "Fiberglass 18x16 mesh",
      coating: "Vinyl polymer coating",
      hardware: "Stainless steel springs",
    },
    performance: {
      airflow: "65% open area",
      visibility: "90% transparency",
      durability: "20+ year lifespan",
      warranty: "10 years limited",
    },
    dimensions: {
      thickness: "0.25 inches",
      compression: "Up to 0.125 inches",
      maxSize: '48" x 72"',
      minSize: '12" x 12"',
    },
    environmental: {
      uvResistance: "Excellent (ASTM G154)",
      temperatureRange: "-40°F to +160°F",
      humidityResistance: "100% RH",
      saltSprayResistance: "1000+ hours",
    },
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/images/flexscreen-hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="bg-white text-black px-8 py-4 rounded-lg inline-block mb-8">
            <span className="text-4xl font-bebas">FLEXSCREEN</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bebas mb-4">FlexScreen, Only by Panes</h1>
          <p className="text-lg font-poppins text-gray-600 mb-8">
            NEARLY INDESTRUCTIBLE. BARELY VISIBLE. EVERYTHING YOU WANT A SCREEN TO BE.
          </p>
          <p className="text-2xl font-bebas text-primary-orange mb-8">Starting at only C$65.00</p>
          <Button className="bg-black text-white hover:bg-gray-800 px-12 py-3 text-lg font-poppins">
            Purchase your Flex Screen
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex gap-6 mb-6">
                <div className="flex-shrink-0">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bebas mb-3">{feature.title}</h3>
                  <p className="text-sm font-poppins text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bebas text-lg mb-3">Technical Specifications</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {Object.entries(feature.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="font-poppins font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                      <span className="font-poppins text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bebas text-center mb-12">Complete Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bebas mb-4 text-primary-orange">Material Composition</h3>
              <div className="space-y-2 text-sm">
                {Object.entries(technicalSpecs.material).map(([key, value]) => (
                  <div key={key}>
                    <span className="font-poppins font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                    <p className="font-poppins text-gray-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bebas mb-4 text-primary-orange">Performance Data</h3>
              <div className="space-y-2 text-sm">
                {Object.entries(technicalSpecs.performance).map(([key, value]) => (
                  <div key={key}>
                    <span className="font-poppins font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                    <p className="font-poppins text-gray-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bebas mb-4 text-primary-orange">Dimensional Specs</h3>
              <div className="space-y-2 text-sm">
                {Object.entries(technicalSpecs.dimensions).map(([key, value]) => (
                  <div key={key}>
                    <span className="font-poppins font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                    <p className="font-poppins text-gray-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bebas mb-4 text-primary-orange">Environmental</h3>
              <div className="space-y-2 text-sm">
                {Object.entries(technicalSpecs.environmental).map(([key, value]) => (
                  <div key={key}>
                    <span className="font-poppins font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                    <p className="font-poppins text-gray-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <p className="text-sm font-poppins text-gray-600 mb-4">
            FlexScreen fit most but not all window profiles, and may require fitting alteration. Panes, Inc. is not
            responsible for any fitting alterations and costs.
          </p>
          <p className="text-sm font-poppins text-gray-600 mb-2">
            <strong>NOTICE:</strong> FlexScreen units are made to order based on your measurements. FlexScreen units
            cannot be returned. FlexScreen unit orders cannot be edited or cancelled once placed. Shipping and handling
            charges are non-refundable.
          </p>
          <p className="text-sm font-poppins text-gray-600">
            <strong>WARNING:</strong> FlexScreen is not meant to prevent children and pets from falling out of the
            window. Please keep children and pets clear from open window.
          </p>
        </div>
      </div>
    </div>
  )
}
