import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className={styles.cursor}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "tween", duration: 0.05 }}
    />
  );
}
