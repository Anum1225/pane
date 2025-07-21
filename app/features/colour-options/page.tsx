import ColourOptionsPage from "@/components/pages/colour-options-page"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FixedElements from "@/components/layout/fixed-elements"

export default function ColourOptionsPageRoute() {
  return (
    <>
      <Header />
      <ColourOptionsPage />
      <Footer />
      <FixedElements />
    </>
  )
}
