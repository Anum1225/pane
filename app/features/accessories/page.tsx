import AccessoriesPage from "@/components/pages/accessories-page"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FixedElements from "@/components/layout/fixed-elements"

export default function AccessoriesPageRoute() {
  return (
    <>
      <Header />
      <AccessoriesPage />
      <Footer />
      <FixedElements />
    </>
  )
}
