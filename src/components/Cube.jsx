import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Cube = () => {
  const textRef = useRef();
  const texture = useLoader(TextureLoader, './img/moon_texture.jpeg');
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      <sphereGeometry />
      <meshStandardMaterial map={texture}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <Text ref={textRef} fontSize={3} color="#FFF">
            AI DEV
          </Text>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
