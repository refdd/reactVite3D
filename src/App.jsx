import { OrbitControls, Sparkles } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React from 'react'
const RotationCube = () => {
  const mashRef = React.useRef()
  useFrame(() => {
    if (mashRef.current) {
      mashRef.current.rotation.x += 0.01
      mashRef.current.rotation.y += 0.01
    }
  })
  return (
    <mesh ref={mashRef} >
      <cylinderBufferGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color={0x468585} emissive={0x468585} />
      <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} color={"red"} />
    </mesh>
  )
}
function App() {
  return (
    <Canvas style={{ width: '100vh', height: "100vh", display: "flex", justifyItems: "center", justifyContent: "center" }}>
      <OrbitControls enableZoom enableRotate enablePan />
      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9cdba6} />
      <color attach="background" args={['#f0f0f0']} />
      <RotationCube />
    </Canvas>
  )
}

export default App