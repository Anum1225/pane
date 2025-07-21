import { AlertTriangle } from "lucide-react"

export default function LimitedAccessBanner() {
  return (
    <div className="bg-blue-50 border border-blue-200 mx-4 my-4 p-4 rounded">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <span className="font-semibold text-gray-800">Limited Public Access - July Only</span>
            <p className="text-gray-700 mt-1">
              Panes Window Manufacturing Inc. is a high-volume custom windows manufacturer, traditionally serving
              customers through our exclusive dealer network.
            </p>
            <p className="text-gray-700 mt-1">
              For July only, we've allocated limited production capacity for the general public.
            </p>
            <p className="text-blue-600 mt-2">
              <span className="font-semibold">⚡ Remaining Window Available:</span> 2117
            </p>
            <p className="text-gray-600 text-xs mt-2">
              These spots are limited and filling fast. Order online or contact us today to be 7 year project qualifier.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
