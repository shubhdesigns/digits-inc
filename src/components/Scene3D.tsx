import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import * as THREE from 'three'

function Robot() {
  return (
    <group>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1.5, 1]} />
        <meshStandardMaterial color="#4299e1" />
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 1.25, 0]}>
        <boxGeometry args={[0.75, 0.75, 0.75]} />
        <meshStandardMaterial color="#4299e1" />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.2, 1.4, 0.4]}>
        <sphereGeometry args={[0.1]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.2, 1.4, 0.4]}>
        <sphereGeometry args={[0.1]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.75, 0, 0]}>
        <boxGeometry args={[0.25, 1, 0.25]} />
        <meshStandardMaterial color="#4299e1" />
      </mesh>
      <mesh position={[0.75, 0, 0]}>
        <boxGeometry args={[0.25, 1, 0.25]} />
        <meshStandardMaterial color="#4299e1" />
      </mesh>
    </group>
  )
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 45 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Robot />
        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Suspense>
    </Canvas>
  )
} 