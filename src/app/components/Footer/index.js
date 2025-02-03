import Image from "next/image"; 
import styles from "./Footer.module.css"; 
import Link from "next/link";
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
          <a href="https://www.linkedin.com/" target="_blank"><Image src="/images/linkedin.svg" width={24} height={24} alt="linkedin icon" /></a>
          <a href="https://github.com/" target="_blank"><Image src="/images/github.svg" width={24} height={24} alt="github icon"  /></a>
          <a href="mailto:your.email@example.com"><Image src="/images/mail.svg" width={24} height={24} alt="mail icon"  /></a>
        </div>
      </div>
    </footer>
  );
}
