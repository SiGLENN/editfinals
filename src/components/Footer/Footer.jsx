import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.contactInfo}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:gtcotales.student@asiancollege.edu.ph" className={styles.linkText}>Gmail</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
            <a href="https://www.facebook.com/glenngeo.D" className={styles.linkText} target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a href="https://github.com/SiGLENN" className={styles.linkText} target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Gtcotales. All rights reserved.</p>
      </div>
    </footer>
  );
};
