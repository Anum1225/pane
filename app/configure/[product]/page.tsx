"use client"

import { notFound } from "next/navigation"
import { useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FixedElements from "@/components/layout/fixed-elements"
import AcknowledgmentModal from "@/components/ui/acknowledgment-modal"
import ProductConfigurator from "@/components/sections/product-configurator"

interface ConfigurePageProps {
  params: {
    product: string
  }
}

export default function ConfigurePage({ params }: ConfigurePageProps) {
  const { product } = params
  const [showAcknowledgmentModal, setShowAcknowledgmentModal] = useState(true)

  // Valid product IDs
  const validProducts = [
    "casement-windows",
    "awning-windows",
    "high-fix-windows",
    "picture-windows",
    "single-hung-windows",
    "double-hung-windows",
    "single-slider-windows",
    "double-slider-windows",
    "end-vent-sliders",
    "radius-shapes",
    "non-radius-shapes",
    "insulated-glass-units",
    "patio-doors",
    "window-screens",
    "flex-screen",
  ]

  if (!validProducts.includes(product)) {
    notFound()
  }

  // Convert product ID to display name
  const getProductName = (id: string) => {
    return id
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Strip */}
      <div className="bg-gray-800 text-white text-center py-2">
        <p className="text-sm font-poppins">Custom made windows in as quick as 10 business days</p>
      </div>

      <main className="py-12 bg-gray-100 min-h-screen">
        {/* Render the new ProductConfigurator component */}
        <ProductConfigurator productName={getProductName(product)} />
      </main>

      <Footer />
      <FixedElements />

      {/* Acknowledgment Modal */}
      <AcknowledgmentModal isOpen={showAcknowledgmentModal} onClose={() => setShowAcknowledgmentModal(false)} />
    </div>
  )
}
