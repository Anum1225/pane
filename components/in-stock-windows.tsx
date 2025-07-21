import Link from "next/link"

export default function InStockWindows() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Newest In-stock Windows</h2>
        <Link href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          View All
        </Link>
      </div>
    </div>
  )
}
