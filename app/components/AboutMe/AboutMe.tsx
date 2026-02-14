import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <div className={styles.root}>
      <p className={styles.headline}>Engineering immersive web experiences.</p>
      <p className={styles.supporting}>
        Senior Frontend Developer with deep expertise in React, Next.js, and
        TypeScript. I design and architect visually compelling, interactive web
        experiences using Three.js, React Three Fiber, Drei, and advanced
        animation systems.
      </p>
    </div>
  );
}
