import Image from "next/image"; 
import styles from './NavBar.module.css'; 
import Link from "next/link";

export default function NavBar() {
  return(
    <nav className={styles.nav}>
      <Image src="/images/logo.svg" alt="logo" width={50} height={50} className={styles.logo}></Image>
      <ul className={styles.navList}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/Projects">Projects</Link></li>
      </ul>
    </nav>
  )
}