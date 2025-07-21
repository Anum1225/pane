import Link from "next/link"

export default function InStockWindows() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="font-bebas text-3xl text-black mb-4">Newest In-stock Windows</h2>
        <Link href="#" className="text-primary-orange hover:text-orange-700 font-poppins font-medium transition-colors">
          View All
        </Link>
      </div>
    </div>
  )
}
