"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ProductQA() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 border-t">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">?</div>
        <h2 className="font-bebas text-3xl text-black mb-2">PATIO DOORS</h2>
        <h3 className="font-bebas text-2xl text-black mb-4">COMMONLY QUESTIONS & ANSWERS</h3>
        <p className="font-poppins text-sm text-gray-600 mb-6">
          ASK ANY QUESTION ABOUT PATIO DOORS USING THE FORM BELOW
        </p>
        <Button className="bg-primary-orange hover:bg-orange-700 text-white px-8 py-2 font-poppins font-semibold">
          ASK A QUESTION
        </Button>
        <p className="font-poppins text-xs text-gray-500 mt-4">NO ONE HAS ASKED A QUESTION ABOUT THIS PRODUCT YET</p>
      </div>
    </section>
  )
}
