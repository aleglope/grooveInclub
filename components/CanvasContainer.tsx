import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './ui/Model';

const CanvasContainer: React.FC = () => {
  return (
    <div style={{ position: 'absolute', left: '-20%', top: '47%', width: '100vw', height: '100vh', zIndex:0 }}>
      <Canvas camera={{ position: [5, -1, 14] }}>
        <ambientLight intensity={2} />
        <directionalLight position={[4, 10, 10]} intensity={2} />
        <Model />
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
