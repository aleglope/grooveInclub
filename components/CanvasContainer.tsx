"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Model from "./ui/Model";
import * as THREE from "three";

// Componente FireFly para las luces móviles
const FireFly = ({ radius = 5, speed = 1, color = "yellow" }) => {
  const lightRef = useRef<THREE.SpotLight>(null);
  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime() * speed;
    const x = Math.sin(elapsed) * radius;
    const z = Math.cos(elapsed) * radius;
    if (lightRef.current) {
      lightRef.current.position.set(x, Math.sin(elapsed * 4) * radius * 0.2, z);
    }
  });
  return <spotLight ref={lightRef} color={color} intensity={1} distance={10} />;
};

// Componente BlinkingLight para las luces estáticas que parpadean
const BlinkingLight = ({
  position = [0, 0, 0],
  colors = ["red", "green", "blue", "yellow"],
  speed = 1,
}) => {
  const lightRef = useRef<THREE.PointLight>(null);
  const positionVector = new THREE.Vector3(
    position[0],
    position[1],
    position[2]
  );
  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime() * speed;
    const colorIndex = Math.floor(elapsed) % colors.length;
    if (lightRef.current) {
      lightRef.current.color.set(colors[colorIndex]);
    }
  });
  return <pointLight ref={lightRef} position={positionVector} intensity={2} />;
};

// Componente BlinkingDirectionalLight para la luz direccional que parpadea
const BlinkingDirectionalLight = ({ position = [0, 0, 0], speed = 1 }) => {
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const positionVector = new THREE.Vector3(
    position[0],
    position[1],
    position[2]
  );
  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime() * speed;
    if (lightRef.current) {
      lightRef.current.intensity = (Math.sin(elapsed * 5) + 1.5) / 1.5;
    }
  });
  return (
    <directionalLight ref={lightRef} position={positionVector} intensity={1} />
  );
};

const CanvasContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Canvas camera={{ position: [5, 2, 12] }}>
        <ambientLight intensity={0.7} />
        <BlinkingDirectionalLight position={[3, 4, 15]} speed={1} />
        <Model />
        {/* Añadir varias Luciérnagas */}
        <FireFly radius={8} speed={1.2} color="yellow" />
        <FireFly radius={5} speed={1.3} color="red" />
        <FireFly radius={5} speed={1.5} color="blue" />
        <FireFly radius={5} speed={1.4} color="white" />
        {/* Añadir luces estáticas que parpadean */}
        <BlinkingLight position={[5, 5, 5]} speed={1} />
        <BlinkingLight position={[-5, 5, 5]} speed={3} />
        <BlinkingLight position={[0, 5, 5]} speed={2} />
        <BlinkingLight position={[-2, 4, 5]} speed={1.5} />
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
