import Image from "next/image"; 
import styles from "./Footer.module.css"; 
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

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
          <a href="https://www.linkedin.com/" target="_blank"><FaLinkedin size={24} /></a>
          <a href="https://github.com/" target="_blank"><FaGithub size={24} /></a>
          <a href="mailto:your.email@example.com"><MdOutlineMail size={24} /></a>
        </div>
      </div>
    </footer>
  );
}
