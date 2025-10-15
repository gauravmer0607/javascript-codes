import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Float, ContactShadows } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function SpinningTorus() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_state, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * 0.3
    meshRef.current.rotation.y += delta * 0.45
  })

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} castShadow position={[0, 0.5, 0]}>
        <torusKnotGeometry args={[0.7, 0.25, 220, 32]} />
        <meshStandardMaterial color="#7aa2ff" metalness={0.35} roughness={0.2} />
      </mesh>
    </Float>
  )
}

function AccentSpheres() {
  return (
    <group>
      <mesh castShadow position={[-2.2, 0.6, -0.6]}>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial color="#ff7ab2" metalness={0.2} roughness={0.35} />
      </mesh>
      <mesh castShadow position={[2.4, 0.3, 0.8]}>
        <dodecahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial color="#9aff7a" metalness={0.15} roughness={0.45} />
      </mesh>
    </group>
  )
}

export function ThreeScene() {
  return (
    <Canvas
      className="r3f-canvas"
      shadows
      camera={{ position: [3, 2, 5], fov: 50 }}
      gl={{ antialias: true }}
    >
      {/* Lights */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Objects */}
      <SpinningTorus />
      <AccentSpheres />

      {/* Ground */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#1b1b1b" />
      </mesh>
      <ContactShadows
        position={[0, 0, 0]}
        opacity={0.4}
        scale={10}
        blur={2.5}
        far={10}
      />

      {/* Controls + Environment */}
      <OrbitControls enableDamping dampingFactor={0.08} maxPolarAngle={Math.PI * 0.6} />
      <Environment preset="city" />
    </Canvas>
  )
}

export default ThreeScene
