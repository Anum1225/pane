import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FixedElements from "@/components/layout/fixed-elements"
import HeroSection from "@/components/sections/about-hero-section"
import IntegrityInnovationCards from "@/components/sections/integrity-innovation-cards"
import OfferList from "@/components/sections/offer-list"
import NafsBanner from "@/components/sections/nafs-banner"
import VideoSections from "@/components/sections/video-sections"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <IntegrityInnovationCards />
      <OfferList />
      <NafsBanner />
      <VideoSections />
      <Footer />
      <FixedElements />
    </div>
  )
}
