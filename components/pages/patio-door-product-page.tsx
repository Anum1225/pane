"use client"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FixedElements from "@/components/layout/fixed-elements"
import ProductHeroSection from "@/components/sections/patio-door-hero"
import ProductDescription from "@/components/sections/patio-door-description"
import ProductSpecifications from "@/components/sections/patio-door-specifications"
import ProductQA from "@/components/sections/patio-door-qa"
import ProductReviews from "@/components/sections/patio-door-reviews"
import ProductPolicies from "@/components/sections/patio-door-policies"

export default function PatioDoorProductPage() {
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
            <span>Products</span> <span className="mx-2">›</span>
            <span>Patio Doors</span> <span className="mx-2">›</span>
            <span className="text-black">Patio Doors</span>
          </nav>
        </div>

        {/* Product Hero */}
        <ProductHeroSection />

        {/* Product Description */}
        <ProductDescription />

        {/* Specifications */}
        <ProductSpecifications />

        {/* Q&A Section */}
        <ProductQA />

        {/* Reviews */}
        <ProductReviews />

        {/* Policies */}
        <ProductPolicies />
      </main>

      <Footer />
      <FixedElements />
    </div>
  )
}
