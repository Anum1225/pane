import { Button } from "@/components/ui/button"

export default function FixedElements() {
  return (
    <>
      {/* Request In-Home Estimate Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <Button className="bg-primary-orange hover:bg-orange-700 text-white px-4 py-2 font-poppins font-semibold rounded-full shadow-lg transition-colors">
          🏠 REQUEST IN-HOME ESTIMATE
        </Button>
      </div>

      {/* Limited Access Badge */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-black text-white px-4 py-2 rounded-full font-poppins text-sm flex items-center space-x-2 shadow-lg">
          <span>🔒 Limited Public Access - July Only</span>
          <button className="bg-primary-orange hover:bg-orange-700 px-3 py-1 rounded-full text-xs transition-colors">
            💬
          </button>
        </div>
      </div>
    </>
  )
}
