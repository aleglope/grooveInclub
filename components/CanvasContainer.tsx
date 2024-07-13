import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { SpotLight } from '@react-three/drei';
import Model from './ui/Model';

// Componente Firefly para las luces móviles
const Firefly = ({ radius = 5, speed = 1, color = 'yellow' }) => {
  const lightRef = useRef();
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
const BlinkingLight = ({ position = [0, 0, 2], colors = ['red', 'green', 'blue', 'yellow', 'purple'], speed = 1 }) => {
  const lightRef = useRef();
  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime() * speed;
    const colorIndex = Math.floor(elapsed) % colors.length;
    if (lightRef.current) {
      lightRef.current.color.set(colors[colorIndex]);
    }
  });
  return <pointLight ref={lightRef} position={position} intensity={2} />;
};

const CanvasContainer: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
      <div style={{ width: '100vw', height: '100vh' }}>
        <Canvas camera={{ position: [5, -1, 11] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[4, 10, 10]} intensity={1} />
          <Model />
          {/* Añadir varias luciérnagas */}
          <Firefly radius={8} speed={1} color="yellow" />
          <Firefly radius={8} speed={1.2} color="red" />
          <Firefly radius={10} speed={1.5} color="blue" />
          <Firefly radius={8} speed={1.5} color="blue" />
          <Firefly radius={5} speed={1.5} color="white" />
          {/* Añadir luces estáticas que parpadean */}
          <BlinkingLight position={[5, 5, 5]} speed={1} />
          <BlinkingLight position={[4, 8, 8]} speed={6} />
          <BlinkingLight position={[8, 1, 5]} speed={3} />
          <BlinkingLight position={[2, 4, 5]} speed={5} />
        </Canvas>
      </div>
    </div>
  );
};

export default CanvasContainer;
