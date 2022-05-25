import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import earthTexture from '../../assets/earth.jpg'

export const Earth = () => {
  const colorMap = new THREE.TextureLoader().load( earthTexture );
  const ref = useRef<THREE.Mesh>(null!)

  useFrame(() => (ref.current.rotation.y += 0.01))
  return (
    <mesh
      ref={ref}
      scale={window.innerWidth*.001}
    >
      <sphereBufferGeometry attach="geometry"/>
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )
}
