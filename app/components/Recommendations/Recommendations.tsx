import styles from "./Recommendations.module.scss";

const recommendations = [
  {
    name: "Pepe Blasco Nunez de Cela",
    title: "CTO at MELD",
    text: "His extensive knowledge in React, TypeScript and other frontend technologies distinguishes him as a true leader in frontend development. He effortlessly applies these skills to transform intricate designs into functional and engaging digital experiences. What sets Aleksandar apart is his intrinsic research ability — he actively keeps abreast of new developments and techniques, translating insights into actionable strategies for the team.",
  },
  {
    name: "Gordan Topalovic",
    title: "CEO at WhiteCitySoft",
    text: "Aleksandar is one of the rare developers who are capable to produce quality work with such precision and dedication. Very demanding when it comes to details and skilled in multi-level environments, never refused challenge when he is confident he will succeed. Truly valuable member of our team.",
  },
  {
    name: "Timothy McMillan",
    title: "Owner at McMillan Freelance",
    text: "Alex produces highly functional, clean code and can deliver even the most complex tasks in a timely manner.",
  },
];

export default function Recommendations() {
  return (
    <section className={styles.root}>
      <h2 className={styles.heading}>Recommendations</h2>
      <div className={styles.list}>
        {recommendations.map((rec) => (
          <blockquote key={rec.name} className={styles.card}>
            <p className={styles.text}>&ldquo;{rec.text}&rdquo;</p>
            <footer className={styles.footer}>
              <span className={styles.name}>{rec.name}</span>
              <span className={styles.title}>{rec.title}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
