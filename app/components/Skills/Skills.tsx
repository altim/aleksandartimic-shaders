import styles from "./Skills.module.scss";

const skills = [
  {
    category: "React Ecosystem",
    items: [
      "React",
      "Next.js",
      "Astro.js",
      "Remix",
      "Tanstack Query",
      "React Router",
      "React Hook Form",
      "Formik",
      "Tanstack Table",
      "Zod",
      "Yup",
    ],
  },
  {
    category: "Creative & Interactive",
    items: [
      "ThreeJS",
      "React Three Fiber",
      "Drei",
      "React Spring",
      "Motion",
      "WebGL",
      "GLSL / Custom Shaders",
      "GSAP",
    ],
  },
  {
    category: "State Management",
    items: ["Mobx", "Redux", "Zustand", "Jotai", "React Context"],
  },
  {
    category: "Testing",
    items: ["Jest", "React Testing Library", "Cypress", "Percy.io"],
  },
  {
    category: "CSS",
    items: [
      "SASS/LESS",
      "PandaCSS",
      "Styled Components",
      "Emotion",
      "CSS Modules",
    ],
  },
  {
    category: "CI/CD & DevOps",
    items: ["Docker", "GitHub", "Vercel", "Jenkins", "Vite", "Webpack"],
  },
  {
    category: "Shopify",
    items: ["Hydrogen", "Shopify Extensions", "Liquid Templates"],
  },
  {
    category: "Web3",
    items: ["Ethers", "MeshJS", "Wagmi", "WalletConnect", "Web3Auth"],
  },
  {
    category: "Backend & Databases",
    items: ["Node", "PHP", "Python", "PostgreSQL", "MySQL", "Prisma"],
  },
  {
    category: "Design System",
    items: ["Storybook", "Figma"],
  },
  {
    category: "CMS",
    items: ["Sanity", "Contentful", "Wordpress"],
  },
  {
    category: "Other",
    items: [
      "i18next",
      "LaunchDarkly",
      "Optimizely",
      "Socket.io",
      "ChartJS",
      "ECharts",
      "Google Analytics",
    ],
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
