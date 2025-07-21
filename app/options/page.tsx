import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FixedElements from "@/components/layout/fixed-elements"
import OptionsSection from "@/components/sections/options-section"

export default function OptionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Strip - Replicated from other pages */}
      <div className="bg-gray-800 text-white text-center py-2">
        <p className="text-sm font-poppins">Custom made windows in as quick as 10 business days</p>
      </div>

      <main className="bg-white">
        <OptionsSection />
      </main>

      <Footer />
      <FixedElements />
    </div>
  )
}
