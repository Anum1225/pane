"use client"

import { useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FixedElements from "@/components/layout/fixed-elements"
import ProductTabs from "@/components/sections/product-tabs"
import ProductGrid from "@/components/sections/build-your-own-grid"

export default function BuildYourOwnPage() {
  const [activeTab, setActiveTab] = useState("vinyl-windows")

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Strip */}
      <div className="bg-gray-800 text-white text-center py-2">
        <p className="text-sm font-poppins">Custom made windows in as quick as 10 business days</p>
      </div>

      {/* Main Content */}
      <main className="py-12 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          {/* Build Your Own Title */}
          <div className="text-center mb-12">
            <h1 className="font-bebas text-5xl text-black mb-8">Build Your Own</h1>
          </div>

          {/* Product Category Tabs */}
          <ProductTabs activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Product Grid */}
          <ProductGrid activeCategory={activeTab} />
        </div>
      </main>

      <Footer />
      <FixedElements />
    </div>
  )
}
