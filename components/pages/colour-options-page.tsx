export default function ColourOptionsPage() {
  const colorCategories = [
    {
      name: "Neutral Tones",
      colors: [
        {
          name: "White",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "RAL 9003", finish: "Matte", durability: "AAMA 2604", fadeResistance: "Excellent" },
        },
        {
          name: "Almond",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "Custom", finish: "Matte", durability: "AAMA 2604", fadeResistance: "Excellent" },
        },
        {
          name: "Cream",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "RAL 1013", finish: "Matte", durability: "AAMA 2604", fadeResistance: "Excellent" },
        },
        {
          name: "Antique Ivory",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "Custom", finish: "Matte", durability: "AAMA 2604", fadeResistance: "Very Good" },
        },
        {
          name: "Cashmere",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "Custom", finish: "Matte", durability: "AAMA 2604", fadeResistance: "Excellent" },
        },
        {
          name: "Brownstone",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "Custom", finish: "Matte", durability: "AAMA 2604", fadeResistance: "Very Good" },
        },
      ],
    },
    {
      name: "Earth Tones",
      colors: [
        {
          name: "Rio Copper",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "Custom", finish: "Metallic", durability: "AAMA 2605", fadeResistance: "Excellent" },
        },
        {
          name: "Antique Brown",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "RAL 8025", finish: "Matte", durability: "AAMA 2604", fadeResistance: "Very Good" },
        },
        {
          name: "Chestnut Brown",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "RAL 8015", finish: "Matte", durability: "AAMA 2604", fadeResistance: "Good" },
        },
        {
          name: "Harvest Wheat",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "Custom", finish: "Matte", durability: "AAMA 2604", fadeResistance: "Very Good" },
        },
        {
          name: "Sandstone",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "RAL 1035", finish: "Textured", durability: "AAMA 2604", fadeResistance: "Excellent" },
        },
        {
          name: "Tan",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "RAL 1001", finish: "Matte", durability: "AAMA 2604", fadeResistance: "Very Good" },
        },
      ],
    },
    {
      name: "Bold Colors",
      colors: [
        {
          name: "Black",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "RAL 9005", finish: "Matte", durability: "AAMA 2604", fadeResistance: "Excellent" },
        },
        {
          name: "Black Metallic",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "Custom", finish: "Metallic", durability: "AAMA 2605", fadeResistance: "Excellent" },
        },
        {
          name: "Bright Red",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "RAL 3020", finish: "Gloss", durability: "AAMA 2605", fadeResistance: "Good" },
        },
        {
          name: "Forest Green",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "RAL 6035", finish: "Matte", durability: "AAMA 2604", fadeResistance: "Very Good" },
        },
        {
          name: "Coastal Blue",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "Custom", finish: "Matte", durability: "AAMA 2604", fadeResistance: "Very Good" },
        },
        {
          name: "Burgundy",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "RAL 3005", finish: "Matte", durability: "AAMA 2604", fadeResistance: "Good" },
        },
      ],
    },
    {
      name: "Gray Scale",
      colors: [
        {
          name: "Chesapeake Gray",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "Custom", finish: "Matte", durability: "AAMA 2604", fadeResistance: "Excellent" },
        },
        {
          name: "Dover Gray",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "Custom", finish: "Matte", durability: "AAMA 2604", fadeResistance: "Excellent" },
        },
        {
          name: "Graphite",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "RAL 7024", finish: "Matte", durability: "AAMA 2604", fadeResistance: "Excellent" },
        },
        {
          name: "Stone Gray",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "RAL 7030", finish: "Textured", durability: "AAMA 2604", fadeResistance: "Excellent" },
        },
        {
          name: "Storm",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "Custom", finish: "Matte", durability: "AAMA 2604", fadeResistance: "Very Good" },
        },
        {
          name: "Slate",
          image: "/placeholder.svg?height=120&width=80",
          specs: { code: "RAL 7015", finish: "Matte", durability: "AAMA 2604", fadeResistance: "Excellent" },
        },
      ],
    },
  ]

  const finishSpecs = {
    Matte: {
      gloss: "5-15 units @ 60°",
      texture: "Smooth",
      maintenance: "Low",
      durability: "20+ years",
    },
    Metallic: {
      gloss: "20-40 units @ 60°",
      texture: "Fine metallic",
      maintenance: "Medium",
      durability: "25+ years",
    },
    Textured: {
      gloss: "5-10 units @ 60°",
      texture: "Fine sand",
      maintenance: "Very Low",
      durability: "25+ years",
    },
    Gloss: {
      gloss: "80+ units @ 60°",
      texture: "Smooth",
      maintenance: "High",
      durability: "15+ years",
    },
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/images/colours-hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bebas">Colours</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bebas mb-4">Don't settle for White</h2>
          <p className="text-lg font-poppins text-gray-600">With so many colours at your fingertips why not explore?</p>
        </div>

        {/* Color Categories */}
        {colorCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <h3 className="text-2xl font-bebas text-center mb-8">{category.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.colors.map((color, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="text-center mb-4">
                    <div className="bg-gray-100 p-2 rounded-lg mb-3">
                      <img
                        src={color.image || "/placeholder.svg"}
                        alt={color.name}
                        className="w-full h-24 object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-bebas mb-3">{color.name}</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-poppins font-medium">Color Code:</span>
                      <span className="font-poppins">{color.specs.code}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-poppins font-medium">Finish:</span>
                      <span className="font-poppins">{color.specs.finish}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-poppins font-medium">Durability:</span>
                      <span className="font-poppins">{color.specs.durability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-poppins font-medium">Fade Resistance:</span>
                      <span className="font-poppins">{color.specs.fadeResistance}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Finish Specifications */}
        <section className="mb-16">
          <h3 className="text-2xl font-bebas text-center mb-8">Finish Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(finishSpecs).map(([finish, specs]) => (
              <div key={finish} className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-bebas mb-4 text-primary-orange">{finish}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Gloss Level:</span>
                    <span className="font-poppins">{specs.gloss}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Texture:</span>
                    <span className="font-poppins">{specs.texture}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Maintenance:</span>
                    <span className="font-poppins">{specs.maintenance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Durability:</span>
                    <span className="font-poppins">{specs.durability}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Information */}
        <section className="bg-gray-50 p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bebas text-center mb-6">Color Performance Standards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bebas mb-3 text-primary-orange">AAMA 2604 Standard</h4>
              <ul className="text-sm font-poppins space-y-1">
                <li>• 10-year finish warranty</li>
                <li>• Excellent color retention</li>
                <li>• Superior chalk resistance</li>
                <li>• UV protection rating: Excellent</li>
                <li>• Salt spray resistance: 3000+ hours</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bebas mb-3 text-primary-orange">AAMA 2605 Standard</h4>
              <ul className="text-sm font-poppins space-y-1">
                <li>• 20-year finish warranty</li>
                <li>• Premium color retention</li>
                <li>• Outstanding chalk resistance</li>
                <li>• UV protection rating: Superior</li>
                <li>• Salt spray resistance: 4000+ hours</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bebas mb-3 text-primary-orange">Environmental Testing</h4>
              <ul className="text-sm font-poppins space-y-1">
                <li>• QUV accelerated weathering</li>
                <li>• Florida exposure testing</li>
                <li>• Thermal cycling resistance</li>
                <li>• Humidity resistance testing</li>
                <li>• Impact resistance verification</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="text-center">
          <p className="text-sm font-poppins text-gray-600">
            We can make your windows whatever colour you want - Above are the standard colours, but if you have custom
            needs, you can order it on the configurator! All colors subject to availability and may have extended lead
            times. Color matching accuracy ±ΔE 2.0 under standard illuminant D65.
          </p>
        </div>
      </div>
    </div>
  )
}
