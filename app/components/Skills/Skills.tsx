import styles from "./Skills.module.scss";

const skills = [
  {
    category: "JavaScript",
    items: ["ReactJS", "TypeScript", "NextJS", "Remix", "jQuery", "Vanilla JS"],
  },
  {
    category: "State Management",
    items: ["Redux", "React Query", "Zustand", "Jotai", "React Context"],
  },
  {
    category: "CSS",
    items: ["SASS/LESS", "PandaCSS", "Styled Components", "CSS Modules"],
  },
  {
    category: "Web3",
    items: ["Ethers", "MeshJS", "Wagmi", "WalletConnect"],
  },
  {
    category: "Data Visualization",
    items: ["ThreeJS", "ChartJS", "ECharts"],
  },
  {
    category: "Testing",
    items: ["Jest", "React Testing Library", "Cypress", "Percy.io"],
  },
  {
    category: "CI/CD & Tools",
    items: ["Docker", "GitHub Workflows", "Vercel", "Jenkins", "Storybook"],
  },
  {
    category: "Backend",
    items: ["Node", "PHP", "Python", "PostgreSQL", "MySQL", "Prisma"],
  },
];

export default function Skills() {
  return (
    <section className={styles.root}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.grid}>
        {skills.map((group) => (
          <div key={group.category} className={styles.group}>
            <h3 className={styles.category}>{group.category}</h3>
            <ul className={styles.list}>
              {group.items.map((item) => (
                <li key={item} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
