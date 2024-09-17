import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills that I have</h2>
      <div className={styles.skills}>
        {skills.map((skill, id) => (
          <div key={id} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
            <p className={styles.skillTitle}>{skill.title}</p>
            <p className={styles.skillLevel}>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
