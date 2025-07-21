"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { HelpCircle, ChevronDown } from "lucide-react"
import Link from "next/link"
import WindowDetailsConfigurator from "./window-details-configurator"

interface ProductConfiguratorProps {
  productName: string
}

export default function ProductConfigurator({ productName }: ProductConfiguratorProps) {
  const [selectedMeasurementType, setSelectedMeasurementType] = useState<"frame-size" | "rough-opening">("frame-size")
  const [frameWidth, setFrameWidth] = useState<number | null>(null)
  const [frameHeight, setFrameHeight] = useState<number | null>(null)
  const [numberOfVerticalWindows, setNumberOfVerticalWindows] = useState<number | null>(null)
  const [numberOfHorizontalWindows, setNumberOfHorizontalWindows] = useState<number | null>(null)
  const [isVerticalDropdownOpen, setIsVerticalDropdownOpen] = useState(false)
  const [isHorizontalDropdownOpen, setIsHorizontalDropdownOpen] = useState(false)
  const [showAdvancedConfigurator, setShowAdvancedConfigurator] = useState(false)

  // Effect to check if all initial inputs are complete
  useEffect(() => {
    const isWidthValid = typeof frameWidth === "number" && frameWidth > 0
    const isHeightValid = typeof frameHeight === "number" && frameHeight > 0
    const isVerticalWindowsSelected = typeof numberOfVerticalWindows === "number" && numberOfVerticalWindows > 0
    const isHorizontalWindowsSelected = typeof numberOfHorizontalWindows === "number" && numberOfHorizontalWindows > 0

    if (isWidthValid && isHeightValid && isVerticalWindowsSelected && isHorizontalWindowsSelected) {
      setShowAdvancedConfigurator(true)
    } else {
      setShowAdvancedConfigurator(false)
    }
  }, [frameWidth, frameHeight, numberOfVerticalWindows, numberOfHorizontalWindows])

  // Function to render dynamic window icons for Measurement Type
  const renderMeasurementIcon = (type: "frame-size" | "rough-opening") => {
    const iconProps = {
      className: "text-primary-orange stroke-2",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 100 100",
    }
    if (type === "frame-size") {
      return (
        <svg {...iconProps} className="w-12 h-12">
          {/* Outer frame */}
          <rect x="15" y="15" width="70" height="70" strokeWidth="4" />
          {/* Inner window pane */}
          <rect x="25" y="25" width="50" height="50" strokeWidth="2" />
          {/* Measurement lines */}
          <line x1="10" y1="15" x2="10" y2="85" strokeWidth="1" />
          <line x1="5" y1="15" x2="15" y2="15" strokeWidth="1" />
          <line x1="5" y1="85" x2="15" y2="85" strokeWidth="1" />
          <line x1="15" y1="10" x2="85" y2="10" strokeWidth="1" />
          <line x1="15" y1="5" x2="15" y2="15" strokeWidth="1" />
          <line x1="85" y1="5" x2="85" y2="15" strokeWidth="1" />
        </svg>
      )
    } else {
      return (
        <svg {...iconProps} className="w-12 h-12">
          {/* Rough opening outline */}
          <rect x="10" y="10" width="80" height="80" strokeWidth="4" strokeDasharray="4 2" />
          {/* Inner window pane */}
          <rect x="25" y="25" width="50" height="50" strokeWidth="2" />
          {/* Rough opening indicators */}
          <line x1="5" y1="10" x2="15" y2="10" strokeWidth="1" />
          <line x1="5" y1="90" x2="15" y2="90" strokeWidth="1" />
          <line x1="10" y1="5" x2="10" y2="15" strokeWidth="1" />
          <line x1="90" y1="5" x2="90" y2="15" strokeWidth="1" />
          <text x="50" y="5" textAnchor="middle" fontSize="10" fill="currentColor" className="font-poppins">
            RO
          </text>
        </svg>
      )
    }
  }

  if (showAdvancedConfigurator) {
    return (
      <WindowDetailsConfigurator
        productName={productName}
        frameWidth={frameWidth as number}
        frameHeight={frameHeight as number}
        numberOfVerticalWindows={numberOfVerticalWindows as number}
        numberOfHorizontalWindows={numberOfHorizontalWindows as number}
      />
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="font-bebas text-5xl text-black text-center mb-12">Build Your Own {productName}</h1>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column: Configurator Form */}
        <div>
          {/* Product Type Tab */}
          <div className="bg-primary-orange text-white font-bebas text-xl text-center py-3 px-6 rounded-t-lg mb-8">
            Window Screens
          </div>

          {/* Measurement Type */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <div className="flex items-center justify-between mb-4">
              <label className="font-bebas text-lg text-black">Measurement Type</label>
              <HelpCircle className="w-5 h-5 text-gray-500" />
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <div
                className={`border-2 rounded-md p-2 flex items-center justify-center cursor-pointer transition-colors ${
                  selectedMeasurementType === "frame-size" ? "border-primary-orange" : "border-gray-300"
                }`}
                onClick={() => setSelectedMeasurementType("frame-size")}
              >
                {renderMeasurementIcon("frame-size")}
              </div>
              <div
                className={`border-2 rounded-md p-2 flex items-center justify-center cursor-pointer transition-colors ${
                  selectedMeasurementType === "rough-opening" ? "border-primary-orange" : "border-gray-300"
                }`}
                onClick={() => setSelectedMeasurementType("rough-opening")}
              >
                {renderMeasurementIcon("rough-opening")}
              </div>
            </div>
            <Select
              value={selectedMeasurementType}
              onValueChange={(value: "frame-size" | "rough-opening") => setSelectedMeasurementType(value)}
            >
              <SelectTrigger className="w-full font-poppins text-gray-700">
                <SelectValue placeholder="Frame Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="frame-size">Frame Size</SelectItem>
                <SelectItem value="rough-opening">Rough Opening</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Frame Width & Height */}
          <div className="bg-orange-50 p-6 rounded-lg shadow-sm mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-bebas text-lg text-black mb-2 block">Frame Width</label>
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                  <Input
                    type="number"
                    className="flex-1 border-none focus-visible:ring-0 font-poppins"
                    value={frameWidth === null ? "" : frameWidth}
                    onChange={(e) => setFrameWidth(Number(e.target.value) || null)}
                    min="0"
                  />
                  <span className="bg-gray-100 px-3 py-2 text-gray-600 font-poppins text-sm">Inches</span>
                </div>
              </div>
              <div>
                <label className="font-bebas text-lg text-black mb-2 block">Frame Height</label>
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                  <Input
                    type="number"
                    className="flex-1 border-none focus-visible:ring-0 font-poppins"
                    value={frameHeight === null ? "" : frameHeight}
                    onChange={(e) => setFrameHeight(Number(e.target.value) || null)}
                    min="0"
                  />
                  <span className="bg-gray-100 px-3 py-2 text-gray-600 font-poppins text-sm">Inches</span>
                </div>
              </div>
            </div>
          </div>

          {/* Number of Vertical Windows */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <div className="flex items-center justify-between mb-4">
              <label className="font-bebas text-lg text-black">Number Of Vertical Windows</label>
              <HelpCircle className="w-5 h-5 text-gray-500" />
            </div>
            <div className="space-y-4">
              <Select
                onOpenChange={setIsVerticalDropdownOpen}
                value={numberOfVerticalWindows !== null ? String(numberOfVerticalWindows) : ""}
                onValueChange={(value) => setNumberOfVerticalWindows(Number(value))}
              >
                <SelectTrigger className="w-full font-poppins text-gray-700">
                  <SelectValue placeholder="Choose The Number Of Windows High For Your Opening (Vertical Windows)" />
                  <ChevronDown className="w-4 h-4 opacity-50" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4].map((num) => (
                    <SelectItem key={num} value={String(num)}>
                      {num} Window(s) High
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div
                className={`bg-orange-50 border-2 border-primary-orange rounded-md flex items-center justify-between transition-all duration-300 ease-in-out ${
                  isVerticalDropdownOpen
                    ? "max-h-40 opacity-100 p-4 mt-4"
                    : "max-h-0 opacity-0 p-0 mt-0 overflow-hidden"
                }`}
              >
                <div className="w-16 h-16 border border-gray-300 rounded-md flex-shrink-0 bg-white flex items-center justify-center">
                  <div className="w-10 h-10 bg-white border border-gray-300"></div>
                </div>
                <span className="font-poppins text-gray-700 text-sm">
                  {numberOfVerticalWindows !== null ? numberOfVerticalWindows : 0} Window(s) High
                </span>
              </div>
            </div>
          </div>

          {/* Number of Horizontal Windows */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <label className="font-bebas text-lg text-black">Number Of Horizontal Windows</label>
              <HelpCircle className="w-5 h-5 text-gray-500" />
            </div>
            <div className="space-y-4">
              <Select
                onOpenChange={setIsHorizontalDropdownOpen}
                value={numberOfHorizontalWindows !== null ? String(numberOfHorizontalWindows) : ""}
                onValueChange={(value) => setNumberOfHorizontalWindows(Number(value))}
              >
                <SelectTrigger className="w-full font-poppins text-gray-700">
                  <SelectValue placeholder="Choose The Number Of Windows Wide For Your Opening (Horizontal Windows)" />
                  <ChevronDown className="w-4 h-4 opacity-50" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4].map((num) => (
                    <SelectItem key={num} value={String(num)}>
                      {num} Window(s) Wide
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div
                className={`bg-orange-50 border-2 border-primary-orange rounded-md flex items-center justify-between transition-all duration-300 ease-in-out ${
                  isHorizontalDropdownOpen
                    ? "max-h-40 opacity-100 p-4 mt-4"
                    : "max-h-0 opacity-0 p-0 mt-0 overflow-hidden"
                }`}
              >
                <div className="w-16 h-16 border border-gray-300 rounded-md flex-shrink-0 bg-white flex items-center justify-center">
                  <div className="w-10 h-10 bg-white border border-gray-300"></div>
                </div>
                <span className="font-poppins text-gray-700 text-sm">
                  {numberOfHorizontalWindows !== null ? numberOfHorizontalWindows : 0} Window(s) Wide
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Instructions */}
        <div className="space-y-8">
          <div>
            <h2 className="font-bebas text-3xl text-black mb-4">Welcome To The RAF Window Configurator!</h2>
            <p className="font-poppins text-gray-600 leading-relaxed">
              This Configurator Allows You To Customize Your Window With Endless Possibilities. Don't Worry, It's Very
              Simple To Use. If You Get Stuck, We're Here To Walk You Through The Steps!{" "}
              <Link href="#" className="text-primary-orange font-semibold hover:underline">
                Chat With Us
              </Link>
            </p>
          </div>

          <div>
            <h3 className="font-bebas text-2xl text-black mb-3">Let's Begin</h3>
            <p className="font-poppins text-gray-600 leading-relaxed">
              Enter The <span className="text-primary-orange font-semibold">Width</span> And{" "}
              <span className="text-primary-orange font-semibold">Height</span> Of The Window You Want To Configure, And
              Click Away.
            </p>
          </div>

          <div>
            <h3 className="font-bebas text-2xl text-black mb-3">Almost There</h3>
            <p className="font-poppins text-gray-600 leading-relaxed">
              You Can Fit Multiple Windows In Your Opening. Select How Many Vertical Windows You Want To Fit Into Your
              Frame.
            </p>
          </div>

          <div>
            <h3 className="font-bebas text-2xl text-black mb-3">Last Step</h3>
            <p className="font-poppins text-gray-600 leading-relaxed">
              Your Opening May Also Be Able To Fit Multiple Windows Beside Each Other. Select How Many Horizontal
              Windows You Want To Fit Into Your Frame. After This Step, The Entire Configurator Will Open Up
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
