import FoamOptionsPage from "@/components/pages/foam-options-page"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FixedElements from "@/components/layout/fixed-elements"

export default function FoamOptionsPageRoute() {
  return (
    <>
      <Header />
      <FoamOptionsPage />
      <Footer />
      <FixedElements />
    </>
  )
}
