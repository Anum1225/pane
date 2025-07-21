"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Html, useProgress, Center, useGLTF } from "@react-three/drei"
import { Suspense, useRef, useMemo, forwardRef, useImperativeHandle, useState, useEffect } from "react"
import * as THREE from "three"

interface WindowModel3DProps {
  glazingType: string
  gasType: string
  hardwareColour: string
  requireGrills: string
  frameWidth: number
  frameHeight: number
  wireframeMode: boolean
  interiorFinish: string
  exteriorFinish: string
}

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="font-poppins text-sm text-gray-600">Loading 3D Model... {progress.toFixed(0)}%</div>
      </div>
    </Html>
  )
}

// Model Loader Component
const ModelLoader = forwardRef<THREE.Group, { color: string; width: number; height: number }>(
  ({ color, width, height }, ref) => {
    // Map color to model file
    const modelFile = useMemo(() => {
      switch (color) {
        case "white":
          return "/models/sample_model.glb"
        case "black":
          return "/models/sample_model_black.glb"
        case "beige":
          return "/models/sample_model_beige.glb"
        default:
          return "/models/sample_model.glb"
      }
    }, [color])

    // Load the model
    const { scene } = useGLTF(modelFile)

    // Scale model to match width/height (assuming model base size is 1x1)
    useEffect(() => {
      if (scene) {
        scene.scale.set(width, height, width)
      }
    }, [scene, width, height])

    return <primitive ref={ref} object={scene} />
  }
)

ModelLoader.displayName = "ModelLoader"

export interface Window3DViewerRef {
  zoomIn: () => void
  zoomOut: () => void
  panLeft: () => void
  panRight: () => void
  panUp: () => void
  panDown: () => void
  resetView: () => void
  toggleWireframe: () => void
  rotateLeft: () => void
  rotateRight: () => void
  rotateUp: () => void
  rotateDown: () => void
}

interface Window3DViewerProps {
  glazingType: string
  gasType: string
  hardwareColour: string
  requireGrills: string
  frameWidth: number
  frameHeight: number
  interiorFinish: string
  exteriorFinish: string
}

const Window3DViewer = forwardRef<Window3DViewerRef, { color: string; width: number; height: number }>(
  ({ color, width, height }, ref) => {
    const controlsRef = useRef<any>(null)
    const modelRef = useRef<THREE.Group>(null)
    const [modelRotation, setModelRotation] = useState({ x: 0, y: 0, z: 0 })

    const rotationStep = Math.PI / 16
    const panStep = 0.3
    const zoomStep = 0.3

    useImperativeHandle(ref, () => ({
      zoomIn: () => {
        if (controlsRef.current) {
          const camera = controlsRef.current.object
          const target = controlsRef.current.target
          const direction = new THREE.Vector3()
          direction.subVectors(target, camera.position).normalize()
          const zoomDirection = direction.multiplyScalar(zoomStep)
          camera.position.add(zoomDirection)
          const distance = camera.position.distanceTo(target)
          if (distance < controlsRef.current.minDistance) {
            direction.subVectors(target, camera.position).normalize()
            camera.position.copy(target).add(direction.multiplyScalar(-controlsRef.current.minDistance))
          }
          controlsRef.current.update()
        }
      },
      zoomOut: () => {
        if (controlsRef.current) {
          const camera = controlsRef.current.object
          const target = controlsRef.current.target
          const direction = new THREE.Vector3()
          direction.subVectors(camera.position, target).normalize()
          const zoomDirection = direction.multiplyScalar(zoomStep)
          camera.position.add(zoomDirection)
          const distance = camera.position.distanceTo(target)
          if (distance > controlsRef.current.maxDistance) {
            direction.subVectors(camera.position, target).normalize()
            camera.position.copy(target).add(direction.multiplyScalar(controlsRef.current.maxDistance))
          }
          controlsRef.current.update()
        }
      },
      panLeft: () => {
        if (controlsRef.current) {
          const camera = controlsRef.current.object
          const target = controlsRef.current.target
          const panDirection = new THREE.Vector3()
          camera.getWorldDirection(panDirection)
          panDirection.cross(camera.up)
          panDirection.normalize()
          panDirection.multiplyScalar(-panStep)
          camera.position.add(panDirection)
          target.add(panDirection)
          controlsRef.current.update()
        }
      },
      panRight: () => {
        if (controlsRef.current) {
          const camera = controlsRef.current.object
          const target = controlsRef.current.target
          const panDirection = new THREE.Vector3()
          camera.getWorldDirection(panDirection)
          panDirection.cross(camera.up)
          panDirection.normalize()
          panDirection.multiplyScalar(panStep)
          camera.position.add(panDirection)
          target.add(panDirection)
          controlsRef.current.update()
        }
      },
      panUp: () => {
        if (controlsRef.current) {
          const camera = controlsRef.current.object
          const target = controlsRef.current.target
          const panDirection = camera.up.clone().normalize().multiplyScalar(panStep)
          camera.position.add(panDirection)
          target.add(panDirection)
          controlsRef.current.update()
        }
      },
      panDown: () => {
        if (controlsRef.current) {
          const camera = controlsRef.current.object
          const target = controlsRef.current.target
          const panDirection = camera.up.clone().normalize().multiplyScalar(-panStep)
          camera.position.add(panDirection)
          target.add(panDirection)
          controlsRef.current.update()
        }
      },
      resetView: () => {
        if (controlsRef.current) {
          controlsRef.current.reset()
        }
        if (modelRef.current) {
          modelRef.current.rotation.set(0, 0, 0)
          setModelRotation({ x: 0, y: 0, z: 0 })
        }
      },
      toggleWireframe: () => {}, // No-op to satisfy interface
      rotateLeft: () => {
        if (modelRef.current) {
          const newY = modelRotation.y + rotationStep
          modelRef.current.rotation.y = newY
          setModelRotation((prev) => ({ ...prev, y: newY }))
        }
      },
      rotateRight: () => {
        if (modelRef.current) {
          const newY = modelRotation.y - rotationStep
          modelRef.current.rotation.y = newY
          setModelRotation((prev) => ({ ...prev, y: newY }))
        }
      },
      rotateUp: () => {
        if (modelRef.current) {
          const newX = modelRotation.x + rotationStep
          modelRef.current.rotation.x = newX
          setModelRotation((prev) => ({ ...prev, x: newX }))
        }
      },
      rotateDown: () => {
        if (modelRef.current) {
          const newX = modelRotation.x - rotationStep
          modelRef.current.rotation.x = newX
          setModelRotation((prev) => ({ ...prev, x: newX }))
        }
      },
    }))

    return (
      <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-200 rounded-lg overflow-hidden relative shadow-inner">
        <Canvas
          camera={{
            position: [3, 2, 3],
            fov: 50,
            near: 0.1,
            far: 100,
          }}
          style={{ width: "100%", height: "100%" }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.2,
          }}
          shadows
        >
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.4} color="#ffffff" />
            <directionalLight
              position={[10, 10, 5]}
              intensity={1.5}
              castShadow
              shadow-mapSize-width={4096}
              shadow-mapSize-height={4096}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
              color="#ffffff"
            />
            <directionalLight position={[-8, 8, 8]} intensity={0.8} color="#e6f3ff" />
            <pointLight position={[0, 6, 0]} intensity={0.6} color="#ffffff" />
            <spotLight position={[6, 6, 6]} angle={0.4} penumbra={0.3} intensity={1.0} castShadow color="#ffffff" />

            <Center>
              <ModelLoader ref={modelRef} color={color} width={width} height={height} />
            </Center>

            <Environment preset="studio" background={false} blur={0.05} />

            <OrbitControls
              ref={controlsRef}
              enablePan={false}
              enableRotate={false}
              enableZoom={true}
              enableDamping={true}
              dampingFactor={0.08}
              minDistance={2}
              maxDistance={8}
              maxPolarAngle={Math.PI / 1.6}
              minPolarAngle={Math.PI / 8}
              autoRotate={false}
              touches={{
                ONE: 0,
                TWO: THREE.TOUCH.DOLLY_PAN,
              }}
            />
          </Suspense>
        </Canvas>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/5 to-transparent" />
      </div>
    )
  }
)

Window3DViewer.displayName = "Window3DViewer"

export default Window3DViewer
