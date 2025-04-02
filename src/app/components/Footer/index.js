import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; 
import Link from "next/link";
import styles from "./Footer.module.css"; 
import Image from "next/image";
import { useState } from "react"; 

export default function Footer() {

  const [isBouncing, setIsBouncing] = useState(false); 
  const [isChasing, setIsChasing] = useState(false); 

  const handleDogClick = () => {
    setIsBouncing(true); 
    setIsChasing(true); 

    setTimeout(() => {
      setIsBouncing(false); 
      setIsChasing(false); 
    }, 2500); 
  }

  return (
    <footer className={styles.footer}>
       <div className={styles.logoWrapper}></div>
         <div className={styles.left}>
          <Image 
            src="images/ball.svg" 
            alt="ball" 
            width={12} 
            height={12} 
            className={`${styles.ball} ${isBouncing ? styles.bounce : ""}`}
            onClick={handleDogClick}
          />
        <Link href="/">
          <Image src="/images/footer-logo.svg" alt="logo" width={80} height={80} />
        </Link>

        <div onClick={handleDogClick} className={styles.pookieWrapper}>

          {!isChasing ? (
            <>
              <Image 
                src="images/pookie-2.svg" 
                alt="dog" 
                width={100} 
                height={100} 
                className={styles.pookie}
                onClick={handleDogClick}
              />
              <p className={styles.blurb}>Play with me!</p>
            </>
          ) : (
            <Image 
            src="/videos/pookie-running.gif"
            width={200}
            height={120}
            alt="dog running"
            className={styles.pookieRunning}
            unoptimized
            />
          )}
        </div>
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
          <a href="mailto:kellyziyanhuang@gmail.com">
            <FaEnvelope size={24} className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
}
