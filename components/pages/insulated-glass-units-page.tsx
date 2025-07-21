"use client"

import { useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FixedElements from "@/components/layout/fixed-elements"
import ProductHero from "@/components/sections/product-hero"
import ProductViewer from "@/components/sections/product-viewer"
import ProductDescription from "@/components/sections/product-description"
import ProductSpecifications from "@/components/sections/product-specifications"
import QualityDurability from "@/components/sections/quality-durability"
import TechnicalDiagrams from "@/components/sections/technical-diagrams"
import ProductFAQ from "@/components/sections/product-faq"

export default function InsulatedGlassUnitsPage() {
  const [selectedSpecs, setSelectedSpecs] = useState({
    width: 24,
    height: 36,
    thickness: 1,
    coating: "low-e",
    spacer: "warm-edge",
    gasFill: "argon",
    grid: "none",
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Strip */}
      <div className="bg-gray-800 text-white text-center py-2">
        <p className="text-sm font-poppins">Custom made windows in as quick as 10 business days</p>
      </div>

      <main className="bg-white">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="text-sm font-poppins text-gray-600">
            <span>Home</span> <span className="mx-2">›</span>
            <span>Products</span> <span className="mx-2">›</span>
            <span>Replacement Glass</span> <span className="mx-2">›</span>
            <span className="text-black">Insulated Glass Units</span>
          </nav>
        </div>

        {/* Product Hero Section */}
        <ProductHero selectedSpecs={selectedSpecs} />

        {/* Product Viewer and Customization */}
        <ProductViewer selectedSpecs={selectedSpecs} onSpecChange={setSelectedSpecs} />

        {/* Product Description */}
        <ProductDescription />

        {/* Specifications */}
        <ProductSpecifications />

        {/* Quality & Durability */}
        <QualityDurability />

        {/* Technical Diagrams */}
        <TechnicalDiagrams />

        {/* FAQ Section */}
        <ProductFAQ />
      </main>

      <Footer />
      <FixedElements />
    </div>
  )
}
