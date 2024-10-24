"use client";

import React from 'react';
import { useGLTF } from '@react-three/drei';

const Model: React.FC = () => {
  const gltf = useGLTF('/scene-transformed.glb');
  return <primitive object={gltf.scene} />;
};

export default Model;