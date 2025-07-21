"use client"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

interface AcknowledgmentModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AcknowledgmentModal({ isOpen, onClose }: AcknowledgmentModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ease-in-out">
      <div className="relative bg-primary-orange w-full max-w-md rounded-xl shadow-xl overflow-hidden">
        {/* White top section with large bottom radius and icon */}
        <div className="relative bg-white h-[150px] rounded-b-[100px] flex flex-col items-center justify-center">
          <div className="bg-primary-orange rounded-full p-4">
            <AlertTriangle className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-8 text-center text-white -mt-16">
          {" "}
          {/* Adjusted negative margin for overlap */}
          <h2 className="font-bebas text-3xl mb-4">Please Acknowledge</h2>
          <p className="font-poppins text-sm leading-relaxed mb-8">
            The Window You're Configuring Will Be Made To Precisely Match The Dimensions You Enter, Without Any
            Deductions Applied.
          </p>
          <Button
            onClick={onClose}
            className="bg-white text-primary-orange hover:bg-gray-100 px-8 py-3 font-poppins font-semibold rounded-lg shadow-md transition-colors"
          >
            Ok
          </Button>
        </div>
      </div>
    </div>
  )
}
