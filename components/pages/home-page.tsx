import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FixedElements from "@/components/layout/fixed-elements"
import HeroBanner from "@/components/sections/hero-banner"
import FeatureSection from "@/components/sections/feature-section"
import ProductCards from "@/components/sections/product-cards"
import PaymentOptions from "@/components/sections/payment-options"
import InStockWindows from "@/components/sections/in-stock-windows"
import BlogSection from "@/components/sections/blog-section"
import ContactForm from "@/components/sections/contact-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <FeatureSection />
      <ProductCards />
      <PaymentOptions />
      <InStockWindows />
      <BlogSection />
      <ContactForm />
      <Footer />
      <FixedElements />
    </div>
  )
}
