"use client";

import styles from "./LinkButton.module.css";

export default function LinkButton({ href, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.button}>
      <span className={styles.label}>{label}</span>
    </a>
  );
}
