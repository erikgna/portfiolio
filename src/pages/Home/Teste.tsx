import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import texture from '../../assets/earth.jpg'

export const Teste = () => {
  const colorMap = new THREE.TextureLoader().load( texture );
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => (ref.current.rotation.y += 0.01))
  return (
    <mesh
      ref={ref}>
      <sphereBufferGeometry attach="geometry" />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )
}
