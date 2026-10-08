import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls } from "@react-three/drei";
import { CanvasTexture } from "three";

function makeLabel(text, color) {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d");
  g.fillStyle = "#fff"; g.fillRect(0, 0, 256, 256);
  g.fillStyle = color; g.font = "bold 44px system-ui, sans-serif";
  g.textAlign = "center"; g.textBaseline = "middle";
  g.fillText(text, 128, 128, 220);
  return new CanvasTexture(c);
}

function Orb({ name, color }) {
  const map = useMemo(() => makeLabel(name, color === "#ffffff" ? "#111" : color), [name, color]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh castShadow receiveShadow scale={2.6}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[0, 0, 0]} scale={1.2} map={map} />
      </mesh>
    </Float>
  );
}

export default function BallCanvas({ name, color }) {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 30 }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[0, 0, 0.5]} intensity={2} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Orb name={name} color={color} />
    </Canvas>
  );
}
