import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <div className={styles.root}>
      <p className={styles.headline}>Inspired by what the web can become.</p>
      <p className={styles.supporting}>
        My foundation is React, Next.js, and TypeScript. My passion is crafting
        interactive experiences with ThreeJS, WebGL, and creative code that pushes
        beyond the conventional.
      </p>
    </div>
  );
}
