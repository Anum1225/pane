"use client"

import { useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FixedElements from "@/components/layout/fixed-elements"
import ProductGrid from "@/components/sections/product-grid"

export default function InstantQuotePage() {
  const [activeTab, setActiveTab] = useState("vinyl-windows")

  const tabs = [
    { id: "vinyl-windows", label: "Vinyl Windows" },
    { id: "replacement-glass", label: "Replacement Glass" },
    { id: "patio-doors", label: "Patio Doors" },
    { id: "window-screens", label: "Window Screens" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Strip */}
      <div className="bg-gray-800 text-white text-center py-2">
        <p className="text-sm font-poppins">Custom made windows in as quick as 10 business days</p>
      </div>

      {/* Main Content */}
      <main className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          {/* Build Your Own Title */}
          <div className="text-center mb-8">
            <h1 className="font-bebas text-4xl text-black mb-8">Build Your Own</h1>
          </div>

          {/* Product Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-poppins font-medium text-sm transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white text-primary-orange border-2 border-primary-orange shadow-md"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-primary-orange hover:text-primary-orange"
                }`}
                aria-pressed={activeTab === tab.id}
                role="tab"
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <ProductGrid activeCategory={activeTab} />
        </div>
      </main>

      <Footer />
      <FixedElements />
    </div>
  )
}
