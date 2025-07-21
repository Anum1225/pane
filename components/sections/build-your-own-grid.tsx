"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface Product {
  id: string
  title: string
  price: string
  image: string
  category: string
}

interface ProductGridProps {
  activeCategory: string
}

export default function ProductGrid({ activeCategory }: ProductGridProps) {
  const products: Product[] = [
    // Vinyl Windows
    {
      id: "casement-windows",
      title: "CASEMENT WINDOWS",
      price: "STARTING FROM $204.82",
      image: "casement",
      category: "vinyl-windows",
    },
    {
      id: "awning-windows",
      title: "AWNING WINDOWS",
      price: "STARTING FROM $204.82",
      image: "awning",
      category: "vinyl-windows",
    },
    {
      id: "high-fix-windows",
      title: "HIGH FIX WINDOWS",
      price: "STARTING FROM $204.82",
      image: "high-fix",
      category: "vinyl-windows",
    },
    {
      id: "picture-windows",
      title: "PICTURE WINDOWS",
      price: "STARTING FROM $138.37",
      image: "picture",
      category: "vinyl-windows",
    },
    {
      id: "single-hung-windows",
      title: "SINGLE HUNG WINDOWS",
      price: "STARTING FROM $204.82",
      image: "single-hung",
      category: "vinyl-windows",
    },
    {
      id: "double-hung-windows",
      title: "DOUBLE HUNG WINDOWS",
      price: "STARTING FROM $204.82",
      image: "double-hung",
      category: "vinyl-windows",
    },
    {
      id: "single-slider-windows",
      title: "SINGLE SLIDER WINDOWS",
      price: "STARTING FROM $138.94",
      image: "single-slider",
      category: "vinyl-windows",
    },
    {
      id: "double-slider-windows",
      title: "DOUBLE SLIDER WINDOWS",
      price: "STARTING FROM $204.82",
      image: "double-slider",
      category: "vinyl-windows",
    },
    {
      id: "end-vent-sliders",
      title: "END VENT SLIDERS",
      price: "STARTING FROM $522.60",
      image: "end-vent",
      category: "vinyl-windows",
    },
    {
      id: "radius-shapes",
      title: "RADIUS SHAPES",
      price: "STARTING FROM $719.04",
      image: "radius",
      category: "vinyl-windows",
    },
    {
      id: "non-radius-shapes",
      title: "NON-RADIUS SHAPES",
      price: "STARTING FROM $719.04",
      image: "non-radius",
      category: "vinyl-windows",
    },
    // Replacement Glass
    {
      id: "insulated-glass-units",
      title: "INSULATED GLASS UNITS",
      price: "STARTING FROM $108.37",
      image: "igu",
      category: "replacement-glass",
    },
    // Patio Doors
    {
      id: "patio-doors",
      title: "PATIO DOORS",
      price: "CONTACT FOR PRICING",
      image: "patio-door",
      category: "patio-doors",
    },
    // Window Screens
    {
      id: "window-screens",
      title: "WINDOW SCREENS",
      price: "CONTACT FOR PRICING",
      image: "screen",
      category: "window-screens",
    },
    {
      id: "flex-screen",
      title: "FLEX SCREEN",
      price: "CONTACT FOR PRICING",
      image: "flex-screen",
      category: "window-screens",
    },
  ]

  const filteredProducts = products.filter((product) => product.category === activeCategory)

  const WindowIcon = ({ type }: { type: string }) => {
    const iconProps = {
      className: "w-24 h-24 text-gray-400 stroke-2",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 100 100",
    }

    switch (type) {
      case "casement":
        return (
          <svg {...iconProps}>
            <rect x="20" y="20" width="60" height="60" />
            <line x1="50" y1="20" x2="50" y2="80" />
            <line x1="20" y1="50" x2="80" y2="50" />
            <circle cx="45" cy="45" r="2" fill="currentColor" />
          </svg>
        )
      case "awning":
        return (
          <svg {...iconProps}>
            <rect x="20" y="25" width="60" height="50" />
            <line x1="20" y1="50" x2="80" y2="50" />
            <line x1="50" y1="25" x2="50" y2="75" />
          </svg>
        )
      case "high-fix":
        return (
          <svg {...iconProps}>
            <rect x="20" y="20" width="60" height="60" />
            <line x1="50" y1="20" x2="50" y2="80" />
            <line x1="20" y1="50" x2="80" y2="50" />
          </svg>
        )
      case "picture":
        return (
          <svg {...iconProps}>
            <rect x="20" y="20" width="60" height="60" />
          </svg>
        )
      case "single-hung":
        return (
          <svg {...iconProps}>
            <rect x="20" y="20" width="60" height="60" />
            <line x1="20" y1="50" x2="80" y2="50" />
            <line x1="50" y1="20" x2="50" y2="80" />
            <rect x="22" y="22" width="26" height="26" fill="none" />
          </svg>
        )
      case "double-hung":
        return (
          <svg {...iconProps}>
            <rect x="20" y="20" width="60" height="60" />
            <line x1="20" y1="50" x2="80" y2="50" />
            <line x1="50" y1="20" x2="50" y2="80" />
            <rect x="22" y="22" width="26" height="26" fill="none" />
            <rect x="52" y="52" width="26" height="26" fill="none" />
          </svg>
        )
      case "single-slider":
        return (
          <svg {...iconProps}>
            <rect x="20" y="25" width="60" height="50" />
            <line x1="50" y1="25" x2="50" y2="75" />
            <line x1="20" y1="50" x2="80" y2="50" />
          </svg>
        )
      case "double-slider":
        return (
          <svg {...iconProps}>
            <rect x="20" y="25" width="60" height="50" />
            <line x1="35" y1="25" x2="35" y2="75" />
            <line x1="65" y1="25" x2="65" y2="75" />
            <line x1="20" y1="50" x2="80" y2="50" />
          </svg>
        )
      case "end-vent":
        return (
          <svg {...iconProps}>
            <rect x="15" y="25" width="70" height="50" />
            <line x1="30" y1="25" x2="30" y2="75" />
            <line x1="55" y1="25" x2="55" y2="75" />
            <line x1="70" y1="25" x2="70" y2="75" />
            <line x1="15" y1="50" x2="85" y2="50" />
          </svg>
        )
      case "radius":
        return (
          <svg {...iconProps}>
            <circle cx="35" cy="35" r="12" />
            <circle cx="65" cy="35" r="12" />
            <path d="M 25 60 Q 50 45 75 60" />
            <circle cx="50" cy="70" r="8" />
          </svg>
        )
      case "non-radius":
        return (
          <svg {...iconProps}>
            <polygon points="50,25 70,45 50,65 30,45" />
            <rect x="25" y="55" width="50" height="20" />
          </svg>
        )
      case "igu":
        return (
          <svg {...iconProps}>
            <rect x="25" y="25" width="50" height="50" />
            <rect x="30" y="30" width="40" height="40" />
          </svg>
        )
      case "patio-door":
        return (
          <svg {...iconProps}>
            <rect x="15" y="20" width="70" height="60" />
            <line x1="50" y1="20" x2="50" y2="80" />
            <line x1="15" y1="50" x2="85" y2="50" />
            <circle cx="40" cy="50" r="2" fill="currentColor" />
          </svg>
        )
      case "screen":
        return (
          <svg {...iconProps}>
            <rect x="20" y="20" width="60" height="60" />
            <defs>
              <pattern id="mesh" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                <rect width="4" height="4" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect x="22" y="22" width="56" height="56" fill="url(#mesh)" />
          </svg>
        )
      case "flex-screen":
        return (
          <svg {...iconProps}>
            <rect x="20" y="20" width="60" height="60" />
            <path d="M 25 25 Q 50 35 75 25 Q 75 50 75 75 Q 50 65 25 75 Q 25 50 25 25" fill="none" />
          </svg>
        )
      default:
        return (
          <svg {...iconProps}>
            <rect x="20" y="20" width="60" height="60" />
          </svg>
        )
    }
  }

  const getGridCols = () => {
    if (activeCategory === "vinyl-windows") return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    if (activeCategory === "window-screens") return "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
    return "grid-cols-1 max-w-md mx-auto"
  }

  return (
    <div className={`grid gap-8 ${getGridCols()}`}>
      {filteredProducts.map((product) => (
        <Card
          key={product.id}
          className="bg-white hover:shadow-lg transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-primary-orange focus-within:ring-offset-2"
        >
          <CardContent className="p-8 text-center">
            {/* Product Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 flex items-center justify-center">
                <WindowIcon type={product.image} />
              </div>
            </div>

            {/* Product Title */}
            <h3 className="font-bebas text-xl text-black mb-2">{product.title}</h3>

            {/* Product Price */}
            <p className="font-poppins text-sm text-gray-600 mb-8">{product.price}</p>

            {/* Customize Button */}
            <Link href={`/configure/${product.id}`}>
              <Button
                className="bg-primary-orange hover:bg-orange-700 text-white px-8 py-2 font-poppins font-semibold transition-colors w-full sm:w-auto"
                aria-label={`Customize ${product.title}`}
              >
                Customize
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
