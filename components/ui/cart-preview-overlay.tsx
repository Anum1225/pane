"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { X, ShoppingCart } from "lucide-react"
import Link from "next/link"

interface CartPreviewOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartPreviewOverlay({ isOpen, onClose }: CartPreviewOverlayProps) {
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    } else {
      document.removeEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex justify-end transition-opacity duration-300 ease-in-out"
      onClick={(e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
          onClose()
        }
      }}
    >
      <div
        ref={sidebarRef}
        className="bg-white w-full max-w-sm h-full shadow-lg p-6 md:p-8 transform transition-transform duration-300 ease-in-out animate-slide-in-right"
      >
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="font-bebas text-2xl text-black flex items-center gap-2">
            <ShoppingCart className="w-6 h-6 text-primary-orange" />
            Your Cart
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
            aria-label="Close cart preview"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Cart Content - Placeholder */}
        <div className="flex flex-col items-center justify-center h-48 text-gray-600 font-poppins">
          <p className="text-lg mb-2">Your cart is empty.</p>
          <p className="text-sm">Start shopping to add items!</p>
        </div>

        {/* Example of a cart item (uncomment to see) */}
        {/*
        <div className="border-b pb-4 mb-4">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg?height=60&width=60" alt="Product" className="w-16 h-16 object-cover rounded" />
            <div>
              <h3 className="font-poppins font-medium text-gray-800">Casement Window</h3>
              <p className="font-poppins text-sm text-gray-600">Qty: 1</p>
              <p className="font-poppins text-sm text-primary-orange">$204.82</p>
            </div>
          </div>
        </div>
        */}

        <div className="mt-auto pt-6 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bebas text-xl text-black">Subtotal:</span>
            <span className="font-bebas text-xl text-primary-orange">$0.00</span>
          </div>
          <Link href="/checkout">
            <Button className="w-full bg-primary-orange hover:bg-orange-700 text-white py-3 font-poppins font-semibold transition-colors">
              Proceed to Checkout
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full mt-2 border-gray-300 text-gray-700 hover:bg-gray-100 font-poppins font-semibold transition-colors bg-transparent"
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  )
}
