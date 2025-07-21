import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FixedElements from "@/components/layout/fixed-elements"
import ContactSections from "@/components/sections/contact-sections"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactSections />
      <Footer />
      <FixedElements />
    </div>
  )
}
