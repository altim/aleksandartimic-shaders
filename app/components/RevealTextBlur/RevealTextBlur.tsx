import { useId } from "react";
import styles from "./RevealTextBlur.module.scss";

type RevealTextBlurPros = {
  text: string;
  delay?: number;
  staggeringDelay?: number;
};

export default function RevealTextBlur({
  text,
  delay = 0,
  staggeringDelay = 0.06,
}: RevealTextBlurPros) {
  const id = useId;
  return (
    <div className={styles.root}>
      {text.split("").map((letter, index) => (
        <span
          key={`${id}-${index}`}
          style={
            {
              "--i": index,
              "--initialDelay": delay,
              "--staggeringDelay": staggeringDelay,
            } as React.CSSProperties
          }
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </div>
  );
}
