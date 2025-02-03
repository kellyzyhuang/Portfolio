import Image from "next/image"; 
import styles from "./NavBar.module.css"; 
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src="/images/logo.svg" alt="logo" width={60} height={60} className={styles.logo} />
      </Link>
      <ul className={styles.navList}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/Projects">Projects</Link></li>
      </ul>
    </nav>
  );
}
