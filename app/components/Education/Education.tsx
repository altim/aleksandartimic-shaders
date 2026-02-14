import styles from "./Education.module.scss";

const education = [
  {
    degree: "Master of Science, Mathematics and Informatics",
    school: "Mathematical Faculty, Belgrade University",
    location: "Serbia",
    year: "2006",
  },
  {
    degree: "Electrical Technician for Computers",
    school: "Nikola Tesla, Electrotechnical High School",
    location: "Serbia",
    year: "1997",
  },
];

export default function Education() {
  return (
    <section className={styles.root}>
      <h2 className={styles.heading}>Education</h2>
      <div className={styles.list}>
        {education.map((edu) => (
          <div key={edu.degree} className={styles.card}>
            <span className={styles.year}>{edu.year}</span>
            <div className={styles.details}>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <p className={styles.school}>
                {edu.school}, {edu.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
