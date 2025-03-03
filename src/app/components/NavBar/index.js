"use client"; 

import Image from "next/image"; 
import styles from "./NavBar.module.css"; 
import Link from "next/link";
import { usePathname } from "next/navigation"; 

export default function NavBar() {
  const pathname = usePathname(); 

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src="/images/logo.svg" alt="logo" width={60} height={60} className={styles.logo} />
      </Link>
      <ul className={styles.navList}>
        <li>
          <Link href="/" className={pathname === "/" ? styles.active : ""}>Home</Link>
        </li>
        <li>
          <Link href="/Projects" className={pathname === "/Projects" ? styles.active : ""}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
}