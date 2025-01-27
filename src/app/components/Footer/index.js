import Image from "next/image"; 
import styles from "./Footer.module.css"; 

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src="/images/logo.svg" alt="logo" width={50} height={50}/>
      <p>All Rights Reserved. Kelly Huang 2025.</p>
    </footer>
  )
}