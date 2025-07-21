import { Droplets } from "lucide-react"

export default function FrostingTintsGrillsPage() {
  const grillPatterns = [
    {
      name: "COLONIAL",
      image: "/placeholder.svg?height=120&width=120",
      specs: {
        style: "Traditional",
        bars: "Horizontal & Vertical",
        spacing: "Equal divisions",
        applications: "All window types",
      },
    },
    {
      name: "PRAIRIE",
      image: "/placeholder.svg?height=120&width=120",
      specs: {
        style: "Arts & Crafts",
        bars: "Top section only",
        spacing: "1/3 top division",
        applications: "Single & double hung",
      },
    },
    {
      name: "LADDER",
      image: "/placeholder.svg?height=120&width=120",
      specs: {
        style: "Contemporary",
        bars: "Horizontal only",
        spacing: "Equal horizontal",
        applications: "Casement & awning",
      },
    },
    {
      name: "DIAMOND",
      image: "/placeholder.svg?height=120&width=120",
      specs: {
        style: "Decorative",
        bars: "Diagonal pattern",
        spacing: "Diamond grid",
        applications: "Specialty windows",
      },
    },
  ]

  const grillTypes = [
    {
      name: '11/16" GEORGIAN BAR',
      image: "/placeholder.svg?height=120&width=120",
      specs: {
        width: "11/16 inch (17.5mm)",
        profile: "Raised rectangular",
        material: "Extruded vinyl",
        installation: "Between glass panes",
        durability: "Lifetime warranty",
      },
    },
    {
      name: '1" GEORGIAN BAR',
      image: "/placeholder.svg?height=120&width=120",
      specs: {
        width: "1 inch (25.4mm)",
        profile: "Raised rectangular",
        material: "Extruded vinyl",
        installation: "Between glass panes",
        durability: "Lifetime warranty",
      },
    },
    {
      name: "PENCIL",
      image: "/placeholder.svg?height=120&width=120",
      specs: {
        width: "1/4 inch (6.4mm)",
        profile: "Thin line",
        material: "Extruded vinyl",
        installation: "Between glass panes",
        durability: "Lifetime warranty",
      },
    },
    {
      name: '5/16" FLAT BAR',
      image: "/placeholder.svg?height=120&width=120",
      specs: {
        width: "5/16 inch (7.9mm)",
        profile: "Flat rectangular",
        material: "Extruded vinyl",
        installation: "Between glass panes",
        durability: "Lifetime warranty",
      },
    },
    {
      name: '5/8" FLAT BAR',
      image: "/placeholder.svg?height=120&width=120",
      specs: {
        width: "5/8 inch (15.9mm)",
        profile: "Flat rectangular",
        material: "Extruded vinyl",
        installation: "Between glass panes",
        durability: "Lifetime warranty",
      },
    },
    {
      name: '1" FLAT BAR',
      image: "/placeholder.svg?height=120&width=120",
      specs: {
        width: "1 inch (25.4mm)",
        profile: "Flat rectangular",
        material: "Extruded vinyl",
        installation: "Between glass panes",
        durability: "Lifetime warranty",
      },
    },
    {
      name: '3/4" SDL',
      image: "/placeholder.svg?height=120&width=120",
      specs: {
        width: "3/4 inch (19.1mm)",
        profile: "Simulated divided lite",
        material: "Applied exterior/interior",
        installation: "Surface mounted",
        durability: "20+ years",
      },
    },
    {
      name: '2" SDL',
      image: "/placeholder.svg?height=120&width=120",
      specs: {
        width: "2 inch (50.8mm)",
        profile: "Simulated divided lite",
        material: "Applied exterior/interior",
        installation: "Surface mounted",
        durability: "20+ years",
      },
    },
  ]

  const frostingTints = [
    {
      name: "Pinhead",
      image: "/placeholder.svg?height=100&width=100",
      specs: {
        pattern: "Fine textured dots",
        opacity: "85% obscuration",
        lightTransmission: "82%",
        maintenance: "Easy clean",
        applications: "Privacy glass",
      },
    },
    {
      name: "Rain",
      image: "/placeholder.svg?height=100&width=100",
      specs: {
        pattern: "Water droplet texture",
        opacity: "80% obscuration",
        lightTransmission: "85%",
        maintenance: "Easy clean",
        applications: "Bathroom windows",
      },
    },
    {
      name: "Glue Chip",
      image: "/placeholder.svg?height=100&width=100",
      specs: {
        pattern: "Ice crystal texture",
        opacity: "75% obscuration",
        lightTransmission: "88%",
        maintenance: "Moderate",
        applications: "Decorative panels",
      },
    },
    {
      name: "Sandblasted",
      image: "/placeholder.svg?height=100&width=100",
      specs: {
        pattern: "Uniform frosted",
        opacity: "90% obscuration",
        lightTransmission: "78%",
        maintenance: "Easy clean",
        applications: "Office partitions",
      },
    },
    {
      name: "Gray Tint",
      image: "/placeholder.svg?height=100&width=100",
      specs: {
        pattern: "Uniform color",
        opacity: "Variable (20-70%)",
        lightTransmission: "30-80%",
        maintenance: "Standard",
        applications: "Solar control",
      },
    },
    {
      name: "Bronze Tint",
      image: "/placeholder.svg?height=100&width=100",
      specs: {
        pattern: "Uniform color",
        opacity: "Variable (20-70%)",
        lightTransmission: "30-80%",
        maintenance: "Standard",
        applications: "Solar control",
      },
    },
  ]

  const grillMaterials = {
    vinyl: {
      durability: "Lifetime warranty",
      maintenance: "No painting required",
      thermalExpansion: "Matches frame expansion",
      colorOptions: "Matches frame colors",
      cost: "Standard pricing",
    },
    aluminum: {
      durability: "25+ years",
      maintenance: "Periodic cleaning",
      thermalExpansion: "Minimal expansion",
      colorOptions: "Powder coat finishes",
      cost: "Premium pricing",
    },
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/images/frosting-hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-5xl font-bebas">Frosting, Tints and Grills</h1>
            <Droplets className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Grill Patterns */}
        <section className="mb-16">
          <h2 className="text-3xl font-bebas text-center mb-12">Grill Patterns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {grillPatterns.map((pattern, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="bg-gray-100 p-6 rounded-lg mb-4">
                    <img
                      src={pattern.image || "/placeholder.svg"}
                      alt={pattern.name}
                      className="w-full h-24 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bebas mb-4">{pattern.name}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Style:</span>
                    <span className="font-poppins">{pattern.specs.style}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Bars:</span>
                    <span className="font-poppins">{pattern.specs.bars}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Spacing:</span>
                    <span className="font-poppins">{pattern.specs.spacing}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Applications:</span>
                    <span className="font-poppins text-xs">{pattern.specs.applications}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bebas text-center mb-12">Grill Types & Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {grillTypes.map((grill, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="text-center mb-4">
                  <div className="bg-gray-100 p-4 rounded-lg mb-3">
                    <img
                      src={grill.image || "/placeholder.svg"}
                      alt={grill.name}
                      className="w-full h-20 object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-bebas mb-3">{grill.name}</h3>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Width:</span>
                    <span className="font-poppins">{grill.specs.width}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Profile:</span>
                    <span className="font-poppins">{grill.specs.profile}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Material:</span>
                    <span className="font-poppins">{grill.specs.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Install:</span>
                    <span className="font-poppins text-xs">{grill.specs.installation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Warranty:</span>
                    <span className="font-poppins">{grill.specs.durability}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grill Material Comparison */}
        <section className="mb-16">
          <h3 className="text-2xl font-bebas text-center mb-8">Grill Material Comparison</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-bebas mb-4 text-primary-orange">Vinyl Grills</h4>
              <div className="space-y-3 text-sm">
                {Object.entries(grillMaterials.vinyl).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="font-poppins font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                    <span className="font-poppins">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-bebas mb-4 text-primary-orange">Aluminum Grills</h4>
              <div className="space-y-3 text-sm">
                {Object.entries(grillMaterials.aluminum).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="font-poppins font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                    <span className="font-poppins">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Frosting and Tints */}
        <section className="bg-black py-16 -mx-4 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bebas text-center mb-12 text-white">Frosting and Tints</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frostingTints.map((item, index) => (
                <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                  <div className="text-center mb-4">
                    <div className="bg-gray-700 p-4 rounded-lg mb-3">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-16 object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bebas mb-3 text-white">{item.name}</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span className="font-poppins font-medium">Pattern:</span>
                      <span className="font-poppins">{item.specs.pattern}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-poppins font-medium">Opacity:</span>
                      <span className="font-poppins">{item.specs.opacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-poppins font-medium">Light Trans:</span>
                      <span className="font-poppins">{item.specs.lightTransmission}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-poppins font-medium">Maintenance:</span>
                      <span className="font-poppins">{item.specs.maintenance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-poppins font-medium">Best For:</span>
                      <span className="font-poppins text-xs">{item.specs.applications}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Information */}
            <div className="mt-12 bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bebas mb-4 text-white">Glass Treatment Technical Data</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
                <div>
                  <h4 className="font-bebas text-lg mb-2 text-primary-orange">Frosting Process</h4>
                  <ul className="space-y-1">
                    <li>• Acid etching for permanent finish</li>
                    <li>• Uniform surface texture</li>
                    <li>• Maintains structural integrity</li>
                    <li>• Easy to clean surface</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bebas text-lg mb-2 text-primary-orange">Tinting Process</h4>
                  <ul className="space-y-1">
                    <li>• Body tinted during manufacturing</li>
                    <li>• Consistent color throughout</li>
                    <li>• UV stable pigments</li>
                    <li>• No delamination risk</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bebas text-lg mb-2 text-primary-orange">Performance Standards</h4>
                  <ul className="space-y-1">
                    <li>• ASTM C1036 glass standards</li>
                    <li>• 20+ year durability</li>
                    <li>• Thermal shock resistant</li>
                    <li>• Impact safety rated</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
