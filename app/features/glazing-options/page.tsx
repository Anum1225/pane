import GlazingOptionsPage from "@/components/pages/glazing-options-page"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FixedElements from "@/components/layout/fixed-elements"

export default function GlazingOptionsPageRoute() {
  return (
    <>
      <Header />
      <GlazingOptionsPage />
      <Footer />
      <FixedElements />
    </>
  )
}
