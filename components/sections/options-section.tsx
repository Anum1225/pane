import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Droplets, Wrench, Palette, Eye, Thermometer, Grid3X3 } from "lucide-react"

export default function OptionsSection() {
  const options = [
    {
      title: "Accessories",
      description:
        "Exterior brickmoulds, jamb extensions, interior casing, and handle colors with detailed specifications",
      icon: Droplets,
      href: "/features/accessories",
      features: ['Brickmoulds (0" to 2")', "Wood & Vinyl Extensions", "Interior Casing Options", "Handle Colors"],
    },
    {
      title: "FlexScreen",
      description: "Revolutionary screen technology that's nearly indestructible and barely visible",
      icon: Eye,
      href: "/features/flex-screen",
      features: ["Spring Steel Frame", "PVC Coating", "Tool-Free Installation", "20+ Year Lifespan"],
    },
    {
      title: "Colour Options",
      description: "Comprehensive selection of window frame colors with AAMA certified finishes",
      icon: Palette,
      href: "/features/colour-options",
      features: ["50+ Standard Colors", "AAMA 2604/2605 Rated", "Custom Color Matching", "Fade Resistant Finishes"],
    },
    {
      title: "Glazing Options",
      description: "Advanced glass technologies including Low-E coatings, argon gas, and multi-pane configurations",
      icon: Wrench,
      href: "/features/glazing-options",
      features: ["ClimaGuard Low-E", "Argon Gas Fill", "Triple Pane Available", "Energy Star Certified"],
    },
    {
      title: "Foam Insulation",
      description: "USDA certified organic foam injection for superior thermal performance",
      icon: Thermometer,
      href: "/features/foam-options",
      features: ["R-6.5 per inch", "USDA Certified Organic", "40-60% Better Thermal", "Zero VOC Emissions"],
    },
    {
      title: "Grills & Frosting",
      description: "Decorative grills, frosting patterns, and tinting options for enhanced aesthetics",
      icon: Grid3X3,
      href: "/features/frosting-tints-grills",
      features: [
        "Multiple Grill Patterns",
        "Between Glass Installation",
        "Frosting & Tint Options",
        "Lifetime Warranty",
      ],
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bebas mb-4">Window Options & Features</h2>
          <p className="text-lg font-poppins text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of window options with detailed technical specifications and performance
            data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <Link key={index} href={option.href}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary-orange/10 rounded-lg group-hover:bg-primary-orange/20 transition-colors">
                      <option.icon className="w-6 h-6 text-primary-orange" />
                    </div>
                    <h3 className="text-xl font-bebas">{option.title}</h3>
                  </div>

                  <p className="text-gray-600 font-poppins text-sm mb-4 leading-relaxed">{option.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-bebas text-sm text-gray-800">Key Features:</h4>
                    <ul className="space-y-1">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs font-poppins text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary-orange rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-primary-orange font-poppins text-sm font-medium group-hover:underline">
                      View Technical Specifications →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-6 rounded-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-xl font-bebas mb-3">Need Custom Specifications?</h3>
            <p className="text-sm font-poppins text-gray-600 mb-4">
              Our technical team can provide detailed performance data, CAD drawings, and custom specifications for any
              project requirements.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-orange text-white px-6 py-2 rounded font-poppins text-sm hover:bg-orange-600 transition-colors"
            >
              Contact Technical Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
