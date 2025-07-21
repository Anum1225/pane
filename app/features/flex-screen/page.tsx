import FlexScreenPage from "@/components/pages/flex-screen-page"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FixedElements from "@/components/layout/fixed-elements"

export default function FlexScreenPageRoute() {
  return (
    <>
      <Header />
      <FlexScreenPage />
      <Footer />
      <FixedElements />
    </>
  )
}
