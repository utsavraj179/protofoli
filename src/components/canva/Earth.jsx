import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Planet() {
  const ref = useRef();
  useFrame((_, d) => { ref.current.rotation.y += d * 0.15; });
  return (
    <group ref={ref}>
      <mesh><icosahedronGeometry args={[2, 3]} /><meshStandardMaterial color="#1f6fd1" flatShading roughness={0.8} /></mesh>
      <mesh scale={1.015}><icosahedronGeometry args={[2, 2]} /><meshStandardMaterial color="#2fa35b" flatShading transparent opacity={0.55} wireframe /></mesh>
      <mesh scale={1.12}><sphereGeometry args={[2, 32, 32]} /><meshBasicMaterial color="#6aa8ff" transparent opacity={0.12} /></mesh>
    </group>
  );
}

export default function EarthCanvas() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [-6, 3, 6], fov: 45 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={2.5} />
      <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      <Planet />
    </Canvas>
  );
}
