import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const words = ["Gamer", "Programmer", "Student"]; // Words to cycle through

export const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Track the current word index
  const [displayText, setDisplayText] = useState(""); // The text to display in h1
  const [charIndex, setCharIndex] = useState(0); // Track the character index for typing/deleting
  const [isDeleting, setIsDeleting] = useState(false); // Whether we are in deleting mode
  const [typingSpeed, setTypingSpeed] = useState(150); // Speed of typing

  useEffect(() => {
    const currentWord = words[currentWordIndex]; // The current word to type/delete

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentWord.length) {
        // Typing characters
        setDisplayText((prev) => prev + currentWord.charAt(charIndex));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting characters
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        // Pause before starting to delete
        setTimeout(() => setIsDeleting(true), 1000); // Pause after typing the whole word
      } else if (isDeleting && charIndex === 0) {
        // Move to the next word after deletion
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length); // Loop through the words array
      }
    };

    const speed = isDeleting ? 100 : 200; // Faster when deleting, slower when typing
    const typingTimeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, currentWordIndex]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          I'm a <span className={styles.typewriter}>{displayText}</span>
        </h1>
        <p className={styles.description}>
          I'm Glenn Cotales, a 3rd year BSIT student.
          Let's play a game.
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Let's Talk
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
