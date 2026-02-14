import Image from "next/image";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.root}>
      <h2 className={styles.heading}>Let&apos;s work together</h2>
      <p className={styles.subtitle}>
        Have a project in mind? I&apos;d love to hear about it.
      </p>
      <div className={styles.links}>
        <a href="mailto:aleksandartimic@gmail.com" className={styles.link}>
          <span className={styles.linkLabel}>Email</span>
          <span className={styles.linkValue}>aleksandartimic@gmail.com</span>
        </a>
        <a
          href="https://www.linkedin.com/in/aleksandar-timic-a8a77627/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <span className={styles.linkLabel}>LinkedIn</span>
          <span className={styles.linkValue}>
            linkedin.com/in/aleksandar-timic
          </span>
        </a>
      </div>
      <div className={styles.qr}>
        <Image
          src="/qr-code.png"
          alt="Scan to save contact"
          width={200}
          height={200}
        />
        <span className={styles.qrLabel}>Scan to save contact</span>
      </div>
    </section>
  );
}
