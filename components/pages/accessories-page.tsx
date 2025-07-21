import { Droplets } from "lucide-react"

export default function AccessoriesPage() {
  const brickmoulds = [
    {
      name: '2" Brickmould',
      image: "/placeholder.svg?height=120&width=120",
      specs: {
        width: '2.000"',
        depth: '1.125"',
        material: "Cellular PVC",
        weight: "0.85 lbs/ft",
        thermalExpansion: "3.4 x 10⁻⁵ in/in/°F",
      },
    },
    {
      name: '1 7/8" Retro. Brickmould',
      image: "/placeholder.svg?height=120&width=120",
      specs: {
        width: '1.875"',
        depth: '1.125"',
        material: "Cellular PVC",
        weight: "0.78 lbs/ft",
        thermalExpansion: "3.4 x 10⁻⁵ in/in/°F",
      },
    },
    {
      name: '1 1/2" Brickmould',
      image: "/placeholder.svg?height=120&width=120",
      specs: {
        width: '1.500"',
        depth: '1.125"',
        material: "Cellular PVC",
        weight: "0.65 lbs/ft",
        thermalExpansion: "3.4 x 10⁻⁵ in/in/°F",
      },
    },
    {
      name: '1 1/4" Brickmould',
      image: "/placeholder.svg?height=120&width=120",
      specs: {
        width: '1.250"',
        depth: '1.125"',
        material: "Cellular PVC",
        weight: "0.58 lbs/ft",
        thermalExpansion: "3.4 x 10⁻⁵ in/in/°F",
      },
    },
    {
      name: '1" Brickmould',
      image: "/placeholder.svg?height=120&width=120",
      specs: {
        width: '1.000"',
        depth: '1.125"',
        material: "Cellular PVC",
        weight: "0.48 lbs/ft",
        thermalExpansion: "3.4 x 10⁻⁵ in/in/°F",
      },
    },
    {
      name: '0" Brickmould',
      image: "/placeholder.svg?height=120&width=120",
      specs: {
        width: "Flush Mount",
        depth: "N/A",
        material: "Integrated Frame",
        weight: "N/A",
        thermalExpansion: "N/A",
      },
    },
  ]

  const woodJambExtensions = [
    {
      name: '7 1/4"',
      image: "/placeholder.svg?height=80&width=120",
      specs: {
        width: '7.250"',
        thickness: '0.750"',
        material: "Pine/Fir Primed",
        moistureContent: "19% max",
        grade: "Finger Joint Clear",
      },
    },
    {
      name: '4 5/8"',
      image: "/placeholder.svg?height=80&width=120",
      specs: {
        width: '4.625"',
        thickness: '0.750"',
        material: "Pine/Fir Primed",
        moistureContent: "19% max",
        grade: "Finger Joint Clear",
      },
    },
    {
      name: '3 3/8"',
      image: "/placeholder.svg?height=80&width=120",
      specs: {
        width: '3.375"',
        thickness: '0.750"',
        material: "Pine/Fir Primed",
        moistureContent: "19% max",
        grade: "Finger Joint Clear",
      },
    },
    {
      name: '2 3/8"',
      image: "/placeholder.svg?height=80&width=120",
      specs: {
        width: '2.375"',
        thickness: '0.750"',
        material: "Pine/Fir Primed",
        moistureContent: "19% max",
        grade: "Finger Joint Clear",
      },
    },
    {
      name: '1 3/8"',
      image: "/placeholder.svg?height=80&width=120",
      specs: {
        width: '1.375"',
        thickness: '0.750"',
        material: "Pine/Fir Primed",
        moistureContent: "19% max",
        grade: "Finger Joint Clear",
      },
    },
  ]

  const vinylJambExtensions = [
    {
      name: '7 1/4"',
      image: "/placeholder.svg?height=80&width=120",
      specs: {
        width: '7.250"',
        thickness: '0.625"',
        material: "Rigid PVC",
        weight: "1.2 lbs/ft",
        thermalExpansion: "3.4 x 10⁻⁵ in/in/°F",
      },
    },
    {
      name: '4 5/8"',
      image: "/placeholder.svg?height=80&width=120",
      specs: {
        width: '4.625"',
        thickness: '0.625"',
        material: "Rigid PVC",
        weight: "0.85 lbs/ft",
        thermalExpansion: "3.4 x 10⁻⁵ in/in/°F",
      },
    },
    {
      name: '3 3/8"',
      image: "/placeholder.svg?height=80&width=120",
      specs: {
        width: '3.375"',
        thickness: '0.625"',
        material: "Rigid PVC",
        weight: "0.68 lbs/ft",
        thermalExpansion: "3.4 x 10⁻⁵ in/in/°F",
      },
    },
    {
      name: '2 3/8"',
      image: "/placeholder.svg?height=80&width=120",
      specs: {
        width: '2.375"',
        thickness: '0.625"',
        material: "Rigid PVC",
        weight: "0.52 lbs/ft",
        thermalExpansion: "3.4 x 10⁻⁵ in/in/°F",
      },
    },
    {
      name: '1 3/8"',
      image: "/placeholder.svg?height=80&width=120",
      specs: {
        width: '1.375"',
        thickness: '0.625"',
        material: "Rigid PVC",
        weight: "0.38 lbs/ft",
        thermalExpansion: "3.4 x 10⁻⁵ in/in/°F",
      },
    },
  ]

  const interiorCasing = [
    {
      name: "VINYL CASING WITH ROSETTES",
      image: "/placeholder.svg?height=120&width=120",
      description: 'AVAILABLE IN 2 3/8" & 3 3/8"',
      specs: {
        material: "Rigid PVC",
        profile: "Colonial",
        thickness: '0.625"',
        cornerType: "Rosette Block",
        weight: '0.45 lbs/ft (2 3/8"), 0.62 lbs/ft (3 3/8")',
        installation: "Nail-on Application",
      },
    },
    {
      name: "VINYL CASING WITH 45° CORNER CAP",
      image: "/placeholder.svg?height=120&width=120",
      description: 'AVAILABLE IN 2 3/8" & 3 3/8"',
      specs: {
        material: "Rigid PVC",
        profile: "Colonial",
        thickness: '0.625"',
        cornerType: "45° Mitered Cap",
        weight: '0.45 lbs/ft (2 3/8"), 0.62 lbs/ft (3 3/8")',
        installation: "Nail-on Application",
      },
    },
    {
      name: "OAK CASING",
      image: "/placeholder.svg?height=120&width=120",
      description: 'NATURAL UNFINISHED\nAVAILABLE IN 2 3/8" & 3 3/8"\nAVAILABLE IN CUSTOM ORDER',
      specs: {
        material: "Red Oak",
        profile: "Colonial",
        thickness: '0.750"',
        grade: "Select & Better",
        moistureContent: "6-8%",
        finish: "Unfinished (Ready for Stain/Paint)",
      },
    },
  ]

  const handleColors = [
    {
      name: "Standard White",
      image: "/placeholder.svg?height=60&width=120",
      specs: {
        finish: "Powder Coated",
        durability: "AAMA 2604",
        uvResistance: "Excellent",
        corrosionResistance: "1000+ hours salt spray",
        operatingTemp: "-40°F to +180°F",
      },
    },
    {
      name: "Black",
      image: "/placeholder.svg?height=60&width=120",
      specs: {
        finish: "Powder Coated",
        durability: "AAMA 2604",
        uvResistance: "Excellent",
        corrosionResistance: "1000+ hours salt spray",
        operatingTemp: "-40°F to +180°F",
      },
    },
    {
      name: "Coppertone",
      image: "/placeholder.svg?height=60&width=120",
      specs: {
        finish: "Powder Coated",
        durability: "AAMA 2604",
        uvResistance: "Excellent",
        corrosionResistance: "1000+ hours salt spray",
        operatingTemp: "-40°F to +180°F",
      },
    },
    {
      name: "Cream",
      image: "/placeholder.svg?height=60&width=120",
      specs: {
        finish: "Powder Coated",
        durability: "AAMA 2604",
        uvResistance: "Excellent",
        corrosionResistance: "1000+ hours salt spray",
        operatingTemp: "-40°F to +180°F",
      },
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/images/accessories-hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-5xl font-bebas">Accessories</h1>
            <Droplets className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Exterior Brickmoulds */}
        <section className="mb-16">
          <h2 className="text-3xl font-bebas text-center mb-12">Exterior Brickmoulds</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brickmoulds.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-24 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bebas mb-4">{item.name}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Width:</span>
                    <span className="font-poppins">{item.specs.width}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Depth:</span>
                    <span className="font-poppins">{item.specs.depth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Material:</span>
                    <span className="font-poppins">{item.specs.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Weight:</span>
                    <span className="font-poppins">{item.specs.weight}</span>
                  </div>
                  {item.specs.thermalExpansion !== "N/A" && (
                    <div className="flex justify-between">
                      <span className="font-poppins font-medium">Thermal Exp:</span>
                      <span className="font-poppins text-xs">{item.specs.thermalExpansion}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Primed Wood Jamb Extension */}
        <section className="mb-16">
          <h2 className="text-3xl font-bebas text-center mb-12">Primed Wood Jamb Extension</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {woodJambExtensions.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bebas mb-4">{item.name}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Width:</span>
                    <span className="font-poppins">{item.specs.width}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Thickness:</span>
                    <span className="font-poppins">{item.specs.thickness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Material:</span>
                    <span className="font-poppins">{item.specs.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Moisture:</span>
                    <span className="font-poppins">{item.specs.moistureContent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Grade:</span>
                    <span className="font-poppins">{item.specs.grade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm font-poppins text-gray-600 mt-6">* Wood Casing profiles may vary</p>
        </section>

        {/* Vinyl Jamb Extensions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bebas text-center mb-12">Vinyl Jamb Extensions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vinylJambExtensions.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bebas mb-4">{item.name}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Width:</span>
                    <span className="font-poppins">{item.specs.width}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Thickness:</span>
                    <span className="font-poppins">{item.specs.thickness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Material:</span>
                    <span className="font-poppins">{item.specs.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Weight:</span>
                    <span className="font-poppins">{item.specs.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Thermal Exp:</span>
                    <span className="font-poppins text-xs">{item.specs.thermalExpansion}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm font-poppins text-gray-600 mt-6">
            * Vinyl Casing is only available with a Colonial profile.
          </p>
        </section>

        {/* Interior Casing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bebas text-center mb-12">Interior Casing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interiorCasing.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="bg-gray-100 p-6 rounded-lg mb-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-32 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bebas mb-2">{item.name}</h3>
                  <p className="text-sm font-poppins text-gray-600 whitespace-pre-line mb-4">{item.description}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Material:</span>
                    <span className="font-poppins">{item.specs.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Profile:</span>
                    <span className="font-poppins">{item.specs.profile}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Thickness:</span>
                    <span className="font-poppins">{item.specs.thickness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Corner Type:</span>
                    <span className="font-poppins">{item.specs.cornerType}</span>
                  </div>
                  {item.specs.weight && (
                    <div className="flex justify-between">
                      <span className="font-poppins font-medium">Weight:</span>
                      <span className="font-poppins text-xs">{item.specs.weight}</span>
                    </div>
                  )}
                  {item.specs.grade && (
                    <div className="flex justify-between">
                      <span className="font-poppins font-medium">Grade:</span>
                      <span className="font-poppins">{item.specs.grade}</span>
                    </div>
                  )}
                  {item.specs.moistureContent && (
                    <div className="flex justify-between">
                      <span className="font-poppins font-medium">Moisture:</span>
                      <span className="font-poppins">{item.specs.moistureContent}</span>
                    </div>
                  )}
                  {item.specs.finish && (
                    <div className="flex justify-between">
                      <span className="font-poppins font-medium">Finish:</span>
                      <span className="font-poppins text-xs">{item.specs.finish}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Handle Colours */}
        <section>
          <h2 className="text-3xl font-bebas text-center mb-12">Handle Colours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {handleColors.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bebas mb-4">{item.name}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Finish:</span>
                    <span className="font-poppins">{item.specs.finish}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Durability:</span>
                    <span className="font-poppins">{item.specs.durability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">UV Resistance:</span>
                    <span className="font-poppins">{item.specs.uvResistance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Corrosion:</span>
                    <span className="font-poppins text-xs">{item.specs.corrosionResistance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-medium">Temp Range:</span>
                    <span className="font-poppins text-xs">{item.specs.operatingTemp}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
