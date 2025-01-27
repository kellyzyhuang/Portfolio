import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar/>
      <main className={styles.main}>
        <div className={styles.message}>
          <h1>Coming Soon</h1>
          <p className={styles.crab}>🦀</p>
        </div>
        <section className={styles.projectGallery}>
          <h1>My Latest Projects</h1>
          <Link href="/ProjectOne"><Image src="/images/exutoireCover.png" alt="project one" width={80} height={50}/></Link>
          <Link href="/ProjectTwo"><Image src="/images/hivefiveCover.png" alt="project one" width={80} height={50}/></Link>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
