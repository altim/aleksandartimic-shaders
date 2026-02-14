import styles from "./ScrollIndicator.module.scss";

export default function ScrollIndicator() {
  return (
    <div className={styles.root}>
      <div className={styles.mouse}>
        <div className={styles.wheel} />
      </div>
    </div>
  );
}
