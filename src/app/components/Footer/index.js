import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; 
import Link from "next/link";
import styles from "./Footer.module.css"; 
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <Link href="/">
          <Image src="/images/logo.svg" alt="logo" width={60} height={60} />
        </Link>
      </div>
      <div className={styles.right}>
        <p>Connect with me!</p>
        <div className={styles.icons}>
          <a href="https://www.linkedin.com/in/kelly-huang-236b8932b/" target="_blank">
            <FaLinkedin size={24} className={styles.icon} />
          </a>
          <a href="https://github.com/kellyzyhuang" target="_blank">
            <FaGithub size={24} className={styles.icon} />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kellyziyanhuang@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={24} className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
}
