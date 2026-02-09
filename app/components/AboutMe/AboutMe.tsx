import RevealTextBlur from "../RevealTextBlur/RevealTextBlur";
import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <div className={styles.root}>
      <RevealTextBlur
        text="I'm Senior Frontend Developer"
        staggeringDelay={0.03}
      />
      <RevealTextBlur
        text="armed with a Master's degree in Mathematics and Informatics"
        staggeringDelay={0.03}
        delay={0.5}
      />
      <RevealTextBlur
        text="and 15+ years experience in IT industry."
        staggeringDelay={0.03}
        delay={1}
      />
      <RevealTextBlur
        text="In my career I have developed applications, websites"
        staggeringDelay={0.03}
        delay={1.5}
      />
      <RevealTextBlur
        text="and top-notch products with global reach."
        staggeringDelay={0.03}
        delay={2}
      />
    </div>
  );
}
