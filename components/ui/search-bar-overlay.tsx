"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"

interface SearchBarOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchBarOverlay({ isOpen, onClose }: SearchBarOverlayProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const overlayRef = useRef<HTMLDivElement>(null)

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchTerm)
    // Implement actual search logic here
    onClose() // Close after search
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-[100] flex items-start justify-center p-4 transition-opacity duration-300 ease-in-out"
      onClick={(e) => {
        if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
          onClose()
        }
      }}
    >
      <div
        ref={overlayRef}
        className="relative bg-white w-full max-w-3xl rounded-lg shadow-xl p-6 md:p-8 mt-20 transform transition-all duration-300 ease-in-out animate-slide-down"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          aria-label="Close search bar"
        >
          <X className="w-6 h-6" />
        </Button>
        <h2 className="font-bebas text-3xl text-black mb-6 text-center">Search Our Products</h2>
        <form onSubmit={handleSearch} className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Enter keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-orange focus:border-primary-orange font-poppins"
            aria-label="Search input"
          />
          <Button
            type="submit"
            className="bg-primary-orange hover:bg-orange-700 text-white px-6 py-2 font-poppins font-semibold transition-colors"
            aria-label="Perform search"
          >
            <Search className="w-5 h-5 mr-2" />
            Search
          </Button>
        </form>
        <p className="text-sm text-gray-500 mt-4 text-center font-poppins">
          Type to search for windows, glass units, patio doors, and more.
        </p>
      </div>
    </div>
  )
}
