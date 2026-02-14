"use client";

import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import styles from "./Scene1.module.scss";

const Experience = dynamic(() => import("./components/Experience/Experience"), {
  ssr: false,
});

export default function Scene1({ active = true }: { active?: boolean }) {
  return (
    <Canvas
      className={styles.root}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: false }}
      frameloop={active ? "always" : "never"}
    >
      <Experience />
    </Canvas>
  );
}
