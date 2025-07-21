"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

interface Product {
  id: string
  title: string
  subtitle?: string
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
      subtitle: "STARTING FROM $204.82",
      price: "$204.82",
      image: "/placeholder.svg?height=120&width=120",
      category: "vinyl-windows",
    },
    {
      id: "awning-windows",
      title: "AWNING WINDOWS",
      subtitle: "STARTING FROM $204.82",
      price: "$204.82",
      image: "/placeholder.svg?height=120&width=120",
      category: "vinyl-windows",
    },
    {
      id: "high-fix-windows",
      title: "HIGH FIX WINDOWS",
      subtitle: "STARTING FROM $204.82",
      price: "$204.82",
      image: "/placeholder.svg?height=120&width=120",
      category: "vinyl-windows",
    },
    {
      id: "picture-windows",
      title: "PICTURE WINDOWS",
      subtitle: "STARTING FROM $138.37",
      price: "$138.37",
      image: "/placeholder.svg?height=120&width=120",
      category: "vinyl-windows",
    },
    {
      id: "single-hung-windows",
      title: "SINGLE HUNG WINDOWS",
      subtitle: "STARTING FROM $204.82",
      price: "$204.82",
      image: "/placeholder.svg?height=120&width=120",
      category: "vinyl-windows",
    },
    {
      id: "double-hung-windows",
      title: "DOUBLE HUNG WINDOWS",
      subtitle: "STARTING FROM $204.82",
      price: "$204.82",
      image: "/placeholder.svg?height=120&width=120",
      category: "vinyl-windows",
    },
    {
      id: "single-slider-windows",
      title: "SINGLE SLIDER WINDOWS",
      subtitle: "STARTING FROM $138.94",
      price: "$138.94",
      image: "/placeholder.svg?height=120&width=120",
      category: "vinyl-windows",
    },
    {
      id: "double-slider-windows",
      title: "DOUBLE SLIDER WINDOWS",
      subtitle: "STARTING FROM $204.82",
      price: "$204.82",
      image: "/placeholder.svg?height=120&width=120",
      category: "vinyl-windows",
    },
    {
      id: "end-vent-sliders",
      title: "END VENT SLIDERS",
      subtitle: "STARTING FROM $522.60",
      price: "$522.60",
      image: "/placeholder.svg?height=120&width=120",
      category: "vinyl-windows",
    },
    {
      id: "radius-shapes",
      title: "RADIUS SHAPES",
      subtitle: "STARTING FROM $719.04",
      price: "$719.04",
      image: "/placeholder.svg?height=120&width=120",
      category: "vinyl-windows",
    },
    {
      id: "non-radius-shapes",
      title: "NON-RADIUS SHAPES",
      subtitle: "STARTING FROM $719.04",
      price: "$719.04",
      image: "/placeholder.svg?height=120&width=120",
      category: "vinyl-windows",
    },
    // Replacement Glass
    {
      id: "insulated-glass-units",
      title: "INSULATED GLASS UNITS",
      subtitle: "STARTING FROM $108.37",
      price: "$108.37",
      image: "/placeholder.svg?height=200&width=200",
      category: "replacement-glass",
    },
    // Patio Doors
    {
      id: "patio-doors",
      title: "PATIO DOORS",
      subtitle: "",
      price: "Contact for Pricing",
      image: "/placeholder.svg?height=200&width=200",
      category: "patio-doors",
    },
    // Window Screens
    {
      id: "window-screens",
      title: "WINDOW SCREENS",
      subtitle: "",
      price: "Contact for Pricing",
      image: "/placeholder.svg?height=200&width=200",
      category: "window-screens",
    },
    {
      id: "flex-screen",
      title: "FLEX SCREEN",
      subtitle: "",
      price: "Contact for Pricing",
      image: "/placeholder.svg?height=200&width=200",
      category: "window-screens",
    },
  ]

  const filteredProducts = products.filter((product) => product.category === activeCategory)

  const getGridCols = () => {
    if (activeCategory === "vinyl-windows") return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    if (activeCategory === "window-screens") return "grid-cols-1 md:grid-cols-2"
    return "grid-cols-1 md:grid-cols-1 lg:grid-cols-1 max-w-md mx-auto"
  }

  return (
    <div className={`grid gap-8 ${getGridCols()}`}>
      {filteredProducts.map((product) => (
        <Card
          key={product.id}
          className="bg-white hover:shadow-lg transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-primary-orange focus-within:ring-offset-2"
        >
          <CardContent className="p-8 text-center">
            {/* Product Image */}
            <div className="mb-6 flex justify-center">
              <div className="w-32 h-32 flex items-center justify-center bg-gray-50 rounded-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Product Title */}
            <h3 className="font-bebas text-xl text-black mb-2">{product.title}</h3>

            {/* Product Subtitle/Price */}
            {product.subtitle && <p className="font-poppins text-sm text-gray-600 mb-6">{product.subtitle}</p>}

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
