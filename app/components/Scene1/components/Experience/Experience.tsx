"use client";

import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import CustomShaderMaterial from "three-custom-shader-material";
import fragmentShader from "../../shaders/fragment.glsl";
import vertexShader from "../../shaders/vertex.glsl";

export default function Experience() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const materialRef = useRef<any>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  // Set up camera lookAt
  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, 0, 0);
    }
  }, []);

  // Update shader uniforms each frame
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <>
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 3, 0, 0]}>
        <planeGeometry args={[3, 3, 32, 32]} />
        <CustomShaderMaterial
          //CSM
          baseMaterial={THREE.MeshPhysicalMaterial}
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            uTime: { value: 0 },
          }}
          //MeshPhysicsMaterial
          metalness={1.0}
          roughness={0.1}
          color={"#ffffff"}
          transmission={0}
          ior={1.5}
          thickness={1.5}
          transparent={true}
          wireframe={false}
        />
      </mesh>

      <ambientLight intensity={0.5} />
      <pointLight
        position={[0, 5, 0]}
        intensity={3}
        distance={10}
        decay={1}
        color="#E8F0FF"
      />
      <PerspectiveCamera ref={cameraRef} position={[0, 1, 2]} makeDefault />
      {/* <OrbitControls /> */}

      <EffectComposer>
        <ChromaticAberration offset={[0.005, 0.005]} />
      </EffectComposer>
    </>
  );
}
