import { Button } from "@/components/ui/button"

export default function FixedElements() {
  return (
    <>
      {/* Request In-Home Estimate Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <Button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 text-sm font-semibold rounded-full shadow-lg">
          🏠 REQUEST IN-HOME ESTIMATE
        </Button>
      </div>

      {/* Limited Access Badge */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm flex items-center space-x-2 shadow-lg">
          <span>🔒 Limited Public Access - July Only</span>
          <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-full text-xs transition-colors">💬</button>
        </div>
      </div>
    </>
  )
}
