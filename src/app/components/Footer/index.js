import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; 
import Link from "next/link";
import styles from "./Footer.module.css"; 
import Image from "next/image";
import { useState } from "react"; 

export default function Footer() {

  const [isBouncing, setIsBouncing] = useState(false); 

  const handleDogClick = () => {
    setIsBouncing(true); 
    setTimeout(() => setIsBouncing(false), 1000); 
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <Link href="/">
          <Image src="/images/footer-logo.svg" alt="logo" width={80} height={80} />
        </Link>
        <Image src="images/ball.svg" alt="ball" width={12} height={12} className={styles.ball}/>
        <Image 
          src="images/pookie-2.svg" 
          alt="dog" 
          width={100} 
          height={100} 
          className={styles.pookie}
          onClick={handleDogClick}
        />
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
