"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Box } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

interface ProductViewerProps {
  selectedSpecs: {
    width: number
    height: number
    thickness: number
    coating: string
    spacer: string
    gasFill: string
    grid: string
  }
  onSpecChange: (specs: any) => void
}

function GlassUnit({ specs }: { specs: any }) {
  const glassColor = specs.coating === "low-e" ? "#e6f3ff" : specs.coating === "low-e-plus" ? "#d4edda" : "#fff3cd"

  return (
    <group>
      {/* Outer Glass */}
      <Box args={[specs.width / 10, specs.height / 10, 0.1]} position={[0, 0, 0.3]}>
        <meshStandardMaterial color={glassColor} transparent opacity={0.3} />
      </Box>

      {/* Inner Glass */}
      <Box args={[specs.width / 10, specs.height / 10, 0.1]} position={[0, 0, -0.3]}>
        <meshStandardMaterial color={glassColor} transparent opacity={0.3} />
      </Box>

      {/* Spacer */}
      <Box args={[specs.width / 10 + 0.1, 0.1, 0.6]} position={[0, specs.height / 20, 0]}>
        <meshStandardMaterial color={specs.spacer === "warm-edge" ? "#333" : "#666"} />
      </Box>
      <Box args={[specs.width / 10 + 0.1, 0.1, 0.6]} position={[0, -specs.height / 20, 0]}>
        <meshStandardMaterial color={specs.spacer === "warm-edge" ? "#333" : "#666"} />
      </Box>
      <Box args={[0.1, specs.height / 10, 0.6]} position={[specs.width / 20, 0, 0]}>
        <meshStandardMaterial color={specs.spacer === "warm-edge" ? "#333" : "#666"} />
      </Box>
      <Box args={[0.1, specs.height / 10, 0.6]} position={[-specs.width / 20, 0, 0]}>
        <meshStandardMaterial color={specs.spacer === "warm-edge" ? "#333" : "#666"} />
      </Box>
    </group>
  )
}

export default function ProductViewer({ selectedSpecs, onSpecChange }: ProductViewerProps) {
  const [activeTab, setActiveTab] = useState("dimensions")

  const updateSpec = (key: string, value: any) => {
    onSpecChange({ ...selectedSpecs, [key]: value })
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* 3D Viewer */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-bebas text-2xl text-black mb-4">Interactive 3D Viewer</h3>
          <div className="aspect-square bg-white rounded-lg overflow-hidden">
            <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <GlassUnit specs={selectedSpecs} />
              <OrbitControls enablePan={false} enableZoom={true} />
            </Canvas>
          </div>
          <p className="font-poppins text-sm text-gray-600 mt-2 text-center">
            Click and drag to rotate • Scroll to zoom
          </p>
        </div>

        {/* Customization Panel */}
        <div className="space-y-6">
          <h3 className="font-bebas text-2xl text-black">Customize Your IGU</h3>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "dimensions", label: "Dimensions" },
              { id: "glass", label: "Glass Options" },
              { id: "spacer", label: "Spacer & Gas" },
              { id: "decorative", label: "Decorative" },
            ].map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 font-poppins text-sm ${
                  activeTab === tab.id ? "bg-primary-orange text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gray-50 p-6 rounded-lg">
            {activeTab === "dimensions" && (
              <div className="space-y-6">
                <div>
                  <label className="block font-poppins font-semibold text-gray-700 mb-2">
                    Width: {selectedSpecs.width}"
                  </label>
                  <Slider
                    value={[selectedSpecs.width]}
                    onValueChange={(value) => updateSpec("width", value[0])}
                    max={96}
                    min={12}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block font-poppins font-semibold text-gray-700 mb-2">
                    Height: {selectedSpecs.height}"
                  </label>
                  <Slider
                    value={[selectedSpecs.height]}
                    onValueChange={(value) => updateSpec("height", value[0])}
                    max={96}
                    min={12}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block font-poppins font-semibold text-gray-700 mb-2">
                    Overall Thickness: {selectedSpecs.thickness}"
                  </label>
                  <Select
                    value={selectedSpecs.thickness.toString()}
                    onValueChange={(value) => updateSpec("thickness", Number.parseFloat(value))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0.75">3/4" (19mm)</SelectItem>
                      <SelectItem value="1">1" (25mm)</SelectItem>
                      <SelectItem value="1.25">1-1/4" (32mm)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {activeTab === "glass" && (
              <div className="space-y-6">
                <div>
                  <label className="block font-poppins font-semibold text-gray-700 mb-2">Low-E Coating</label>
                  <Select value={selectedSpecs.coating} onValueChange={(value) => updateSpec("coating", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No Coating</SelectItem>
                      <SelectItem value="low-e">Low-E</SelectItem>
                      <SelectItem value="low-e-plus">Low-E Plus</SelectItem>
                      <SelectItem value="triple-silver">Triple Silver</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {activeTab === "spacer" && (
              <div className="space-y-6">
                <div>
                  <label className="block font-poppins font-semibold text-gray-700 mb-2">Spacer Type</label>
                  <Select value={selectedSpecs.spacer} onValueChange={(value) => updateSpec("spacer", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aluminum">Aluminum</SelectItem>
                      <SelectItem value="warm-edge">Warm Edge</SelectItem>
                      <SelectItem value="super-spacer">Super Spacer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block font-poppins font-semibold text-gray-700 mb-2">Gas Fill</label>
                  <Select value={selectedSpecs.gasFill} onValueChange={(value) => updateSpec("gasFill", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="air">Air</SelectItem>
                      <SelectItem value="argon">Argon</SelectItem>
                      <SelectItem value="krypton">Krypton</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {activeTab === "decorative" && (
              <div className="space-y-6">
                <div>
                  <label className="block font-poppins font-semibold text-gray-700 mb-2">Decorative Grid</label>
                  <Select value={selectedSpecs.grid} onValueChange={(value) => updateSpec("grid", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No Grid</SelectItem>
                      <SelectItem value="colonial">Colonial</SelectItem>
                      <SelectItem value="prairie">Prairie</SelectItem>
                      <SelectItem value="diamond">Diamond</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
