import styles from "./Education.module.scss";

const education = [
  {
    degree: "Master of Science, Mathematics and Informatics",
    school: "Mathematical Faculty, Belgrade University",
    location: "Serbia",
  },
  {
    degree: "Electrical Technician for Computers",
    school: "Nikola Tesla, Electrotechnical High School",
    location: "Serbia",
  },
];

export default function Education() {
  return (
    <section className={styles.root}>
      <h2 className={styles.heading}>Education</h2>
      <div className={styles.list}>
        {education.map((edu) => (
          <div key={edu.degree} className={styles.card}>
            <h3 className={styles.degree}>{edu.degree}</h3>
            <p className={styles.school}>
              {edu.school}, {edu.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
