import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

// Procedural retro PC, no external model files needed.
function Pc() {
  return (
    <Float speed={1.5} floatIntensity={0.6} rotationIntensity={0.3}>
      <group position={[0, -0.6, 0]}>
        <mesh position={[0, 0.9, 0]}><boxGeometry args={[2.4, 1.9, 1.6]} /><meshStandardMaterial color="#cfc8b8" roughness={0.6} /></mesh>
        <mesh position={[0, 0.95, 0.81]}><boxGeometry args={[1.9, 1.4, 0.05]} /><meshStandardMaterial color="#0b1a2a" emissive="#00cea8" emissiveIntensity={0.55} /></mesh>
        <mesh position={[0, -0.1, 0]}><boxGeometry args={[1.2, 0.2, 1]} /><meshStandardMaterial color="#b9b2a2" /></mesh>
        <mesh position={[0, -0.28, 1.3]}><boxGeometry args={[2.6, 0.12, 1]} /><meshStandardMaterial color="#d8d1c1" /></mesh>
        <mesh position={[0, -0.18, 1.3]}><boxGeometry args={[2.2, 0.06, 0.7]} /><meshStandardMaterial color="#6d6a78" /></mesh>
        <mesh position={[1.7, -0.3, 1.3]}><boxGeometry args={[0.35, 0.1, 0.55]} /><meshStandardMaterial color="#d8d1c1" /></mesh>
      </group>
    </Float>
  );
}

export default function ComputersCanvas() {
  return (
    <Canvas camera={{ position: [5, 3, 6], fov: 35 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.8} />
      <pointLight position={[3, 4, 4]} intensity={60} color="#915eff" />
      <spotLight position={[-6, 6, 4]} angle={0.3} penumbra={1} intensity={200} />
      <Pc />
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2.6} />
    </Canvas>
  );
}
