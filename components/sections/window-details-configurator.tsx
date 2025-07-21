"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Scale,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
} from "lucide-react"
import Window3DViewer, { type Window3DViewerRef } from "@/components/ui/3d-window-viewer"

interface WindowDetailsConfiguratorProps {
  productName: string
  frameWidth: number
  frameHeight: number
  numberOfVerticalWindows: number
  numberOfHorizontalWindows: number
}

export default function WindowDetailsConfigurator({
  productName,
  frameWidth,
  frameHeight,
  numberOfVerticalWindows,
  numberOfHorizontalWindows,
}: WindowDetailsConfiguratorProps) {
  // State for all configuration options
  const [glazingType, setGlazingType] = useState("double-pane")
  const [lowECoating1st, setLowECoating1st] = useState("climaguard-80-70")
  const [lowECoating2nd, setLowECoating2nd] = useState("none")
  const [gasType, setGasType] = useState("argon")
  const [requireBrickmould, setRequireBrickmould] = useState("no")
  const [snapInNailingFin, setSnapInNailingFin] = useState("no")
  const [windowType, setWindowType] = useState("awning-window")
  const [hardwareType, setHardwareType] = useState("roto-classic")
  const [hardwareColour, setHardwareColour] = useState("white")
  const [requireTintFrosting, setRequireTintFrosting] = useState("none")
  const [requireSecurityGlass, setRequireSecurityGlass] = useState("none")
  const [spacerType, setSpacerType] = useState("spacer-type")
  const [rotoCornerLock, setRotoCornerLock] = useState("no")
  const [bugScreenType, setBugScreenType] = useState("regular-screen")
  const [specialGlazing, setSpecialGlazing] = useState("default-glazing")
  const [requireGrills, setRequireGrills] = useState("no")
  const [interiorFinish, setInteriorFinish] = useState("white") // State for interior finish
  const [exteriorFinish, setExteriorFinish] = useState("white") // State for exterior finish
  const [pendingExteriorFinish, setPendingExteriorFinish] = useState<string | null>(null) // For delayed color change
  const [isChangingColor, setIsChangingColor] = useState(false) // For spinner/fade
  const [quantity, setQuantity] = useState(1)
  const [currentFrameWidth, setCurrentFrameWidth] = useState(frameWidth)
  const [currentFrameHeight, setCurrentFrameHeight] = useState(frameHeight)

  // State for UI sections
  const [wholeOpeningExpanded, setWholeOpeningExpanded] = useState(false)
  const [exteriorOptionsExpanded, setExteriorOptionsExpanded] = useState(true)
  const [interiorOptionsExpanded, setInteriorOptionsExpanded] = useState(false)
  const [glassOptionsExpanded, setGlassOptionsExpanded] = useState(true)
  const [specificOptionsExpanded, setSpecificOptionsExpanded] = useState(true)
  const [showMeasurements, setShowMeasurements] = useState(true) // State for measurements visibility

  // 3D Viewer ref
  const viewer3DRef = useRef<Window3DViewerRef>(null)

  // Pricing calculations
  const [pricing, setPricing] = useState({
    basePrice: 273.17,
    glassOptions: 20.97,
    lowECoating: 8.34,
    gasOptions: 2.93,
    screenOption: 18.51,
    totalPrice: 323.93,
  })

  // Energy ratings
  const [energyRatings, setEnergyRatings] = useState({
    er: 34,
    shgc: 0.47,
    vt: 0.52,
    uFactorIP: 1.2,
    uFactorSI: 0.27,
  })

  // Update pricing based on selections
  useEffect(() => {
    const newPricing = { ...pricing }

    // Recalculate based on selections
    if (glazingType === "triple-pane") {
      newPricing.glassOptions = 35.5
    } else {
      newPricing.glassOptions = 20.97
    }

    if (lowECoating1st !== "none") {
      newPricing.lowECoating = 8.34
    } else {
      newPricing.lowECoating = 0
    }

    if (gasType === "argon") {
      newPricing.gasOptions = 2.93
    } else if (gasType === "krypton") {
      newPricing.gasOptions = 15.5
    } else {
      newPricing.gasOptions = 0
    }

    // Add premium for grills
    if (requireGrills === "yes") {
      newPricing.screenOption = 28.51
    } else {
      newPricing.screenOption = 18.51
    }

    newPricing.totalPrice =
      newPricing.basePrice +
      newPricing.glassOptions +
      newPricing.lowECoating +
      newPricing.gasOptions +
      newPricing.screenOption

    setPricing(newPricing)
  }, [glazingType, lowECoating1st, gasType, requireGrills])

  // Keyboard event listener for 3D viewer controls
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!viewer3DRef.current) return

      switch (event.key) {
        case "ArrowLeft":
          viewer3DRef.current.rotateLeft()
          break
        case "ArrowRight":
          viewer3DRef.current.rotateRight()
          break
        case "ArrowUp":
          viewer3DRef.current.rotateUp()
          break
        case "ArrowDown":
          viewer3DRef.current.rotateDown()
          break
        // Add other key bindings if necessary, e.g., for pan/zoom
        // For example, 'q' for zoom in, 'e' for zoom out
        case "q":
          viewer3DRef.current.zoomIn()
          break
        case "e":
          viewer3DRef.current.zoomOut()
          break
        case "w": // Pan up
          viewer3DRef.current.panUp()
          break
        case "s": // Pan down
          viewer3DRef.current.panDown()
          break
        case "a": // Pan left
          viewer3DRef.current.panLeft()
          break
        case "d": // Pan right
          viewer3DRef.current.panRight()
          break
        case "r": // Reset
          viewer3DRef.current.resetView()
          break
        case "t": // Toggle wireframe
          viewer3DRef.current.toggleWireframe()
          break
        case "m": // Toggle measurements
          setShowMeasurements((prev) => !prev)
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, []) // Empty dependency array means this runs once on mount and cleans up on unmount

  const renderGlassIcon = (type: string) => {
    return (
      <div className="w-12 h-16 flex items-center justify-center">
        <svg viewBox="0 0 40 60" className="w-8 h-12">
          <rect x="5" y="5" width="30" height="50" fill="none" stroke="#22d3ee" strokeWidth="2" rx="2" />
          {type === "double-pane" && (
            <rect x="10" y="10" width="20" height="40" fill="none" stroke="#22d3ee" strokeWidth="1" rx="1" />
          )}
          {type === "triple-pane" && (
            <>
              <rect x="8" y="8" width="24" height="44" fill="none" stroke="#22d3ee" strokeWidth="1" rx="1" />
              <rect x="12" y="12" width="16" height="36" fill="none" stroke="#22d3ee" strokeWidth="1" rx="1" />
            </>
          )}
        </svg>
      </div>
    )
  }

  // 3D Viewer control functions
  const handle3DControl = (action: string) => {
    if (!viewer3DRef.current) return

    switch (action) {
      case "zoom-in":
        viewer3DRef.current.zoomIn()
        break
      case "zoom-out":
        viewer3DRef.current.zoomOut()
        break
      case "pan-left":
        viewer3DRef.current.panLeft()
        break
      case "pan-right":
        viewer3DRef.current.panRight()
        break
      case "pan-up":
        viewer3DRef.current.panUp()
        break
      case "pan-down":
        viewer3DRef.current.panDown()
        break
      case "reset":
        viewer3DRef.current.resetView()
        break
      case "wireframe":
        viewer3DRef.current.toggleWireframe()
        break
      case "toggle-measurements": // New action for toggling measurements
        setShowMeasurements((prev) => !prev)
        break
    }
  }

  const handleAddToCart = () => {
    const currentConfig = {
      productName,
      frameWidth: currentFrameWidth,
      frameHeight: currentFrameHeight,
      numberOfVerticalWindows,
      numberOfHorizontalWindows,
      glazingType,
      lowECoating1st,
      lowECoating2nd,
      gasType,
      requireBrickmould,
      snapInNailingFin,
      windowType,
      hardwareType,
      hardwareColour,
      requireTintFrosting,
      requireSecurityGlass,
      spacerType,
      rotoCornerLock,
      bugScreenType,
      specialGlazing,
      requireGrills,
      interiorFinish,
      exteriorFinish, // Include exteriorFinish in cart data
      quantity,
      pricing,
      energyRatings,
    }
    console.log("Adding to cart:", currentConfig)
    alert("Product added to cart! Check console for details.")
    // In a real application, you would send this data to a backend or a global cart state
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-primary-orange text-white text-center py-3">
        <p className="font-poppins text-sm font-medium">Custom Made Windows In As Quick As 10 Business Days</p>
      </div>

      {/* Main Title */}
      <div className="text-center py-8">
        <h1 className="font-bebas text-5xl text-black">Build Your Own {productName}</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Window Diagram and Controls */}
          <div className="col-span-3 space-y-6">
            {/* Window Configuration Header */}
            <div className="bg-primary-orange text-white text-center py-3 rounded-lg">
              <h2 className="font-bebas text-xl">Window Configuration</h2>
            </div>

            {/* Number of Vertical Windows */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <label className="font-poppins text-sm font-semibold text-gray-800">Number Of Vertical Windows</label>
                <HelpCircle className="w-4 h-4 text-primary-orange" />
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 border border-gray-300 rounded flex-shrink-0 bg-gray-50"></div>
                <Select value={numberOfVerticalWindows.toString()}>
                  <SelectTrigger className="flex-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Window(S) High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Number of Horizontal Windows */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <label className="font-poppins text-sm font-semibold text-gray-800">Number Of Horizontal Windows</label>
                <HelpCircle className="w-4 h-4 text-primary-orange" />
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 border border-gray-300 rounded flex-shrink-0 bg-gray-50"></div>
                <Select value={numberOfHorizontalWindows.toString()}>
                  <SelectTrigger className="flex-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Window(S) High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* 3D Window Viewer - Reduced Width */}
            <div className="space-y-4">
              <div className="relative bg-gray-300 p-6 rounded-lg" style={{ width: "100%", height: "320px" }}>
                <div className="bg-white border-2 border-gray-400 rounded-md relative h-full">
                  <div className="absolute top-2 left-2 font-poppins text-xs font-semibold text-gray-700 bg-white px-1">
                    W1.1
                  </div>
                  <div className="h-full relative flex items-center justify-center">
                    {isChangingColor ? (
                      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white bg-opacity-80 transition-opacity">
                        <div className="w-16 h-16 border-4 border-primary-orange border-t-transparent rounded-full animate-spin mb-2"></div>
                        <div className="font-poppins text-sm text-gray-600">Updating Model Color...</div>
                      </div>
                    ) : null}
                    <Window3DViewer
                      ref={viewer3DRef}
                      glazingType={glazingType}
                      gasType={gasType}
                      hardwareColour={hardwareColour}
                      requireGrills={requireGrills}
                      frameWidth={currentFrameWidth}
                      frameHeight={currentFrameHeight}
                      interiorFinish={interiorFinish}
                      exteriorFinish={exteriorFinish} // Pass exteriorFinish to the 3D viewer
                    />
                  </div>
                </div>
                {showMeasurements && ( // Conditionally render based on showMeasurements state
                  <>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center">
                      <div className="border-t border-gray-600 w-8"></div>
                      <span className="mx-2 font-poppins text-xs font-semibold text-gray-700">
                        {currentFrameWidth}"
                      </span>
                      <div className="border-t border-gray-600 w-8"></div>
                    </div>
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90">
                      <span className="font-poppins text-xs font-semibold text-gray-700">{currentFrameHeight}"</span>
                    </div>
                  </>
                )}
              </div>

              {/* Control Panel - 8 Functional Buttons */}
              <div className="bg-primary-orange p-3 rounded-lg">
                <div className="grid grid-cols-4 gap-2">
                  <button
                    onClick={() => handle3DControl("zoom-in")}
                    className="flex items-center justify-center p-2 text-white hover:bg-orange-600 rounded transition-colors"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handle3DControl("zoom-out")}
                    className="flex items-center justify-center p-2 text-white hover:bg-orange-600 rounded transition-colors"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => viewer3DRef.current?.rotateLeft()} // Direct call to rotateLeft
                    className="flex items-center justify-center p-2 text-white hover:bg-orange-600 rounded transition-colors"
                    title="Rotate Left"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => viewer3DRef.current?.rotateUp()} // Direct call to rotateUp
                    className="flex items-center justify-center p-2 text-white hover:bg-orange-600 rounded transition-colors"
                    title="Rotate Up"
                  >
                    <ArrowUp className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => viewer3DRef.current?.rotateRight()} // Direct call to rotateRight
                    className="flex items-center justify-center p-2 text-white hover:bg-orange-600 rounded transition-colors"
                    title="Rotate Right"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => viewer3DRef.current?.rotateDown()} // Direct call to rotateDown
                    className="flex items-center justify-center p-2 text-white hover:bg-orange-600 rounded transition-colors"
                    title="Rotate Down"
                  >
                    <ArrowDown className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handle3DControl("toggle-measurements")} // Changed action to toggle measurements
                    className="flex items-center justify-center p-2 text-white hover:bg-orange-600 rounded transition-colors"
                    title="Toggle Measurements"
                  >
                    <Scale className="w-5 h-5" /> {/* Changed icon to Scale */}
                  </button>
                  <button
                    onClick={() => handle3DControl("reset")}
                    className="flex items-center justify-center p-2 text-white hover:bg-orange-600 rounded transition-colors"
                    title="Reset View"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="bg-primary-orange text-white p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-bebas text-xl">Total Price</span>
                  <span className="font-bebas text-xl">${pricing.totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Configuration Options */}
          <div className="col-span-5 space-y-6">
            {/* Whole Opening Details */}
            <div
              className="bg-primary-orange text-white p-3 rounded-lg cursor-pointer"
              onClick={() => setWholeOpeningExpanded(!wholeOpeningExpanded)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bebas text-lg">Whole Opening Details</h3>
                {wholeOpeningExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </div>

            {wholeOpeningExpanded && (
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-poppins text-sm font-semibold text-gray-800">Overall Window Depth: 3.250"</span>
                  <HelpCircle className="w-4 h-4 text-primary-orange" />
                </div>
              </div>
            )}

            {/* Exterior Options */}
            <div
              className="bg-primary-orange text-white p-3 rounded-lg cursor-pointer"
              onClick={() => setExteriorOptionsExpanded(!exteriorOptionsExpanded)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bebas text-lg">Exterior Options</h3>
                {exteriorOptionsExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </div>

            {exteriorOptionsExpanded && (
              <>
                {/* Exterior Finish */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-poppins text-sm font-semibold text-gray-800">Exterior Finish</label>
                    <HelpCircle className="w-4 h-4 text-primary-orange" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 border border-gray-300 rounded ${exteriorFinish === "white" ? "bg-white" : exteriorFinish === "beige" ? "bg-amber-200" : "bg-stone-700"}`}
                    ></div>
                    <Select
                      value={pendingExteriorFinish || exteriorFinish}
                      onValueChange={(value) => {
                        if (value === exteriorFinish) return;
                        setPendingExteriorFinish(value);
                        setIsChangingColor(true);
                        setTimeout(() => {
                          setExteriorFinish(value);
                          setPendingExteriorFinish(null);
                          setIsChangingColor(false);
                        }, 2000);
                      }}
                    >
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="white">White</SelectItem>
                        <SelectItem value="beige">Beige</SelectItem>
                        <SelectItem value="black">Black</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Do You Require A Brickmould? */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-poppins text-sm font-semibold text-gray-800">
                      Do You Require A Brickmould?
                    </label>
                    <HelpCircle className="w-4 h-4 text-primary-orange" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-50 border border-gray-300 rounded flex items-center justify-center">
                      <div className="text-xs text-gray-600">😊</div>
                    </div>
                    <Select value={requireBrickmould} onValueChange={setRequireBrickmould}>
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="yes">Yes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Snap-In Nailing Fin */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-poppins text-sm font-semibold text-gray-800">Snap-In Nailing Fin?</label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-50 border border-gray-300 rounded flex items-center justify-center">
                      <div className="text-xs text-gray-600">😊</div>
                    </div>
                    <Select value={snapInNailingFin} onValueChange={setSnapInNailingFin}>
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="yes">Yes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </>
            )}

            {/* Interior Options */}
            <div
              className="bg-primary-orange text-white p-3 rounded-lg cursor-pointer"
              onClick={() => setInteriorOptionsExpanded(!interiorOptionsExpanded)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bebas text-lg">Interior Options</h3>
                {interiorOptionsExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </div>

            {interiorOptionsExpanded && (
              <>
                {/* Interior Finish */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-poppins text-sm font-semibold text-gray-800">Interior Finish</label>
                    <HelpCircle className="w-4 h-4 text-primary-orange" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 border border-gray-300 rounded ${interiorFinish === "white" ? "bg-white" : interiorFinish === "beige" ? "bg-amber-200" : "bg-stone-700"}`}
                    ></div>
                    <Select value={interiorFinish} onValueChange={setInteriorFinish}>
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="white">White</SelectItem>
                        <SelectItem value="beige">Beige</SelectItem>
                        <SelectItem value="black">Black</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </>
            )}

            {/* Glass Options */}
            <div
              className="bg-primary-orange text-white p-3 rounded-lg cursor-pointer"
              onClick={() => setGlassOptionsExpanded(!glassOptionsExpanded)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bebas text-lg">Glass Options</h3>
                {glassOptionsExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </div>

            {glassOptionsExpanded && (
              <>
                {/* Choose Glazing Type */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-poppins text-sm font-semibold text-gray-800">Choose Glazing Type</label>
                    <HelpCircle className="w-4 h-4 text-primary-orange" />
                  </div>

                  <Select value={glazingType} onValueChange={setGlazingType}>
                    <SelectTrigger className="w-full mb-4">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="double-pane">Double Pane Glass</SelectItem>
                      <SelectItem value="triple-pane">Triple Pane Glass</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="space-y-3">
                    <div
                      className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer ${glazingType === "double-pane" ? "bg-orange-50 border border-primary-orange" : "border border-gray-200"}`}
                      onClick={() => setGlazingType("double-pane")}
                    >
                      {renderGlassIcon("double-pane")}
                      <span className="font-poppins text-sm font-medium">Double Pane Glass</span>
                    </div>
                    <div
                      className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer ${glazingType === "triple-pane" ? "bg-orange-50 border border-primary-orange" : "border border-gray-200"}`}
                      onClick={() => setGlazingType("triple-pane")}
                    >
                      {renderGlassIcon("triple-pane")}
                      <span className="font-poppins text-sm font-medium">Triple Pane Glass</span>
                    </div>
                  </div>
                </div>

                {/* 1st Pane Low-E Coating */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-poppins text-sm font-semibold text-gray-800">1st Pane Low-E Coating</label>
                    <HelpCircle className="w-4 h-4 text-primary-orange" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-8 bg-blue-100 border border-blue-300 rounded flex items-center justify-center">
                      <span className="text-xs text-blue-600 font-bold">CG</span>
                    </div>
                    <Select value={lowECoating1st} onValueChange={setLowECoating1st}>
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="climaguard-80-70">ClimaGuard 80/70 (Single)</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* 2nd Pane Low-E Coating */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-poppins text-sm font-semibold text-gray-800">2nd Pane Low-E Coating</label>
                    <HelpCircle className="w-4 h-4 text-primary-orange" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-50 border border-gray-300 rounded flex items-center justify-center">
                      <div className="text-xs text-gray-600">😊</div>
                    </div>
                    <Select value={lowECoating2nd} onValueChange={setLowECoating2nd}>
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Select Gas Type */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-poppins text-sm font-semibold text-gray-800">Select Gas Type</label>
                    <HelpCircle className="w-4 h-4 text-primary-orange" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-50 border border-blue-300 rounded flex items-center justify-center">
                      <svg viewBox="0 0 20 20" className="w-4 h-4 text-blue-500">
                        <path
                          d="M2 10c0 0 4-8 8-8s8 8 8 8-4 8-8 8-8-8-8-8z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M6 10c0 0 2-4 4-4s4 4 4 4-2 4-4 4-4-4-4-4z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>
                    <Select value={gasType} onValueChange={setGasType}>
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="argon">Argon</SelectItem>
                        <SelectItem value="air">Air</SelectItem>
                        <SelectItem value="krypton">Krypton</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Additional Options */}
                <div className="space-y-4">
                  {/* Do You Require Tint Or Frosting? */}
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <label className="font-poppins text-sm font-semibold text-gray-800">
                        Do You Require Tint Or Frosting?
                      </label>
                      <HelpCircle className="w-4 h-4 text-primary-orange" />
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-50 border border-gray-300 rounded flex items-center justify-center">
                        <div className="text-xs text-gray-600">😊</div>
                      </div>
                      <Select value={requireTintFrosting} onValueChange={setRequireTintFrosting}>
                        <SelectTrigger className="flex-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="tint">Tint</SelectItem>
                          <SelectItem value="frosting">Frosting</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Do You Require Security Glass? */}
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <label className="font-poppins text-sm font-semibold text-gray-800">
                        Do You Require Security Glass?
                      </label>
                      <HelpCircle className="w-4 h-4 text-primary-orange" />
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-50 border border-gray-300 rounded flex items-center justify-center">
                        <div className="text-xs text-gray-600">😊</div>
                      </div>
                      <Select value={requireSecurityGlass} onValueChange={setRequireSecurityGlass}>
                        <SelectTrigger className="flex-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="tempered">Tempered</SelectItem>
                          <SelectItem value="laminated">Laminated</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Spacer Type */}
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <label className="font-poppins text-sm font-semibold text-gray-800">Spacer Type</label>
                      <HelpCircle className="w-4 h-4 text-primary-orange" />
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-100 border border-gray-300 rounded flex items-center justify-center">
                        <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                      </div>
                      <Select value={spacerType} onValueChange={setSpacerType}>
                        <SelectTrigger className="flex-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="spacer-type">Spacer Type</SelectItem>
                          <SelectItem value="warm-edge">Warm Edge</SelectItem>
                          <SelectItem value="aluminum">Aluminum</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right Column - Additional Options and Pricing */}
          <div className="col-span-4 space-y-6">
            {/* Window #1.1 Specific Options */}
            <div
              className="bg-primary-orange text-white p-3 rounded-lg cursor-pointer"
              onClick={() => setSpecificOptionsExpanded(!specificOptionsExpanded)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bebas text-lg">Window #1.1 Specific Options</h3>
                {specificOptionsExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </div>

            {specificOptionsExpanded && (
              <>
                {/* Energy Ratings */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-poppins text-sm font-semibold text-gray-800">Energy Ratings</h4>
                    <HelpCircle className="w-4 h-4 text-primary-orange" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center p-2 border border-gray-200 rounded">
                      <div className="font-poppins text-xs font-semibold text-gray-600">ER</div>
                      <div className="font-poppins text-lg font-bold text-gray-800">{energyRatings.er}</div>
                    </div>
                    <div className="text-center p-2 border border-gray-200 rounded">
                      <div className="font-poppins text-xs font-semibold text-gray-600">SHGC</div>
                      <div className="font-poppins text-lg font-bold text-gray-800">{energyRatings.shgc}</div>
                    </div>
                    <div className="text-center p-2 border border-gray-200 rounded">
                      <div className="font-poppins text-xs font-semibold text-gray-600">VT</div>
                      <div className="font-poppins text-lg font-bold text-gray-800">{energyRatings.vt}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center p-2 border border-gray-200 rounded">
                      <div className="font-poppins text-xs font-semibold text-gray-600">U-Factor (I-P)</div>
                      <div className="font-poppins text-lg font-bold text-gray-800">{energyRatings.uFactorIP}</div>
                    </div>
                    <div className="text-center p-2 border border-gray-200 rounded">
                      <div className="font-poppins text-xs font-semibold text-gray-600">U-Factor (SI)</div>
                      <div className="font-poppins text-lg font-bold text-gray-800">{energyRatings.uFactorSI}</div>
                    </div>
                  </div>
                </div>

                {/* NRCan Model # */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="mb-2">
                    <span className="font-poppins text-xs font-semibold text-gray-600">NRCan Model #</span>
                  </div>
                  <div className="font-poppins text-xs text-gray-800 mb-4">
                    PWM-AW-3,CL-13AR97SP-3,CL-13AR97SP-3,8070(5)
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="font-poppins text-xs font-semibold text-gray-600">Most Efficient 2025</div>
                      <div className="font-poppins text-sm text-gray-800">N</div>
                    </div>
                    <div>
                      <div className="font-poppins text-xs font-semibold text-gray-600">U-Factor (SI)</div>
                      <div className="font-poppins text-sm text-gray-800">NR10905-30290784-ESS</div>
                    </div>
                  </div>
                </div>

                {/* Window Type */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-poppins text-sm font-semibold text-gray-800">Window Type</label>
                    <HelpCircle className="w-4 h-4 text-primary-orange" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-orange border border-primary-orange rounded flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                    <Select value={windowType} onValueChange={setWindowType}>
                      <SelectTrigger className="flex-1 bg-primary-orange text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="awning-window">Awning Window</SelectItem>
                        <SelectItem value="casement-window">Casement Window</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Window Width & Height Inputs */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-poppins text-sm font-semibold text-gray-800 mb-3">Window Dimensions</h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="font-poppins text-xs text-gray-600">Min. Width</div>
                      <div className="font-poppins text-sm font-semibold">19.250"</div>
                    </div>
                    <div>
                      <div className="font-poppins text-xs text-gray-600">Max Width</div>
                      <div className="font-poppins text-sm font-semibold">60.000"</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Input
                      type="number"
                      value={currentFrameWidth}
                      onChange={(e) => setCurrentFrameWidth(Number(e.target.value))}
                      className="flex-1 text-center font-poppins text-lg font-bold"
                    />
                    <span className="font-poppins text-sm text-gray-600">Width (Inches)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="font-poppins text-xs text-gray-600">Min. Height</div>
                      <div className="font-poppins text-sm font-semibold">13.000"</div>
                    </div>
                    <div>
                      <div className="font-poppins text-xs text-gray-600">Max Height</div>
                      <div className="font-poppins text-sm font-semibold">78.000"</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      value={currentFrameHeight}
                      onChange={(e) => setCurrentFrameHeight(Number(e.target.value))}
                      className="flex-1 text-center font-poppins text-lg font-bold"
                    />
                    <span className="font-poppins text-sm text-gray-600">Height (Inches)</span>
                  </div>
                </div>

                {/* Hardware Type */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-poppins text-sm font-semibold text-gray-800">Hardware Type</label>
                    <HelpCircle className="w-4 h-4 text-primary-orange" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-8 bg-red-100 border border-red-300 rounded flex items-center justify-center">
                      <span className="text-xs text-red-600 font-bold">Roto</span>
                    </div>
                    <Select value={hardwareType} onValueChange={setHardwareType}>
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="roto-classic">Roto Classic</SelectItem>
                        <SelectItem value="roto-premium">Roto Premium</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Hardware Colour */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-poppins text-sm font-semibold text-gray-800">Hardware Colour</label>
                    <HelpCircle className="w-4 h-4 text-primary-orange" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 border border-gray-300 rounded ${hardwareColour === "white" ? "bg-gray-200" : hardwareColour === "black" ? "bg-gray-800" : "bg-yellow-700"}`}
                    ></div>
                    <Select value={hardwareColour} onValueChange={setHardwareColour}>
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="white">White</SelectItem>
                        <SelectItem value="black">Black</SelectItem>
                        <SelectItem value="bronze">Bronze</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Roto Corner Lock */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-poppins text-sm font-semibold text-gray-800">Roto Corner Lock</label>
                    <HelpCircle className="w-4 h-4 text-primary-orange" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-50 border border-gray-300 rounded flex items-center justify-center">
                      <div className="text-xs text-gray-600">😊</div>
                    </div>
                    <Select value={rotoCornerLock} onValueChange={setRotoCornerLock}>
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no">NO</SelectItem>
                        <SelectItem value="yes">YES</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Type Of Bug Screen */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-poppins text-sm font-semibold text-gray-800">Type Of Bug Screen</label>
                    <HelpCircle className="w-4 h-4 text-primary-orange" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 border border-gray-300 rounded"></div>
                    <Select value={bugScreenType} onValueChange={setBugScreenType}>
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="regular-screen">Regular Screen</SelectItem>
                        <SelectItem value="pet-screen">Pet Screen</SelectItem>
                        <SelectItem value="solar-screen">Solar Screen</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Special Glazing Options */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-poppins text-sm font-semibold text-gray-800">Special Glazing Options</label>
                    <HelpCircle className="w-4 h-4 text-primary-orange" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 border border-gray-300 rounded"></div>
                    <Select value={specialGlazing} onValueChange={setSpecialGlazing}>
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default-glazing">Default Glazing</SelectItem>
                        <SelectItem value="custom-glazing">Custom Glazing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Do You Require Grills? */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-poppins text-sm font-semibold text-gray-800">Do You Require Grills?</label>
                    <HelpCircle className="w-4 h-4 text-primary-orange" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 border border-gray-300 rounded"></div>
                    <Select value={requireGrills} onValueChange={setRequireGrills}>
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no">NO</SelectItem>
                        <SelectItem value="yes">YES</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </>
            )}

            {/* Price Breakdown */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-poppins text-lg font-bold text-gray-800 mb-4">Breakdown</h4>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                  <span className="font-poppins text-sm font-semibold text-gray-800">[W#1.1]</span>
                  <span className="font-poppins text-sm font-bold text-gray-800">${pricing.basePrice.toFixed(2)}</span>
                </div>

                <div className="text-center py-2">
                  <div className="font-poppins text-sm text-primary-orange font-semibold">
                    [W#1.1] Estimated Ready Date
                  </div>
                  <div className="font-poppins text-sm text-primary-orange font-bold">Tue. May. 13th, 2025</div>
                </div>

                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="font-poppins text-sm text-gray-700">[W#1.1] Glass Options</span>
                  <span className="font-poppins text-sm font-semibold text-gray-800">
                    ${pricing.glassOptions.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="font-poppins text-sm text-gray-700">[W#1.1] 1st Pane Low-E Coating</span>
                  <span className="font-poppins text-sm font-semibold text-gray-800">
                    ${pricing.lowECoating.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="font-poppins text-sm text-gray-700">[W#1.1] Gas Options</span>
                  <span className="font-poppins text-sm font-semibold text-gray-800">
                    ${pricing.gasOptions.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="font-poppins text-sm text-gray-700">[W#1.1] Screen Option</span>
                  <span className="font-poppins text-sm font-semibold text-gray-800">
                    ${pricing.screenOption.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Add to Cart Section */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <Input placeholder="Description" className="flex-1 font-poppins text-sm" />
                <div className="flex items-center space-x-2">
                  <span className="font-poppins text-sm text-gray-600">Qty</span>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-16 text-center font-poppins text-sm"
                  />
                </div>
                <Button
                  onClick={handleAddToCart}
                  className="bg-primary-orange hover:bg-orange-600 text-white font-bebas text-lg px-6 py-2"
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
