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
        <h1>Under Construction <div className={styles.crab}>🦀</div></h1>
        <section className={styles.projectGallery}>
          <h1>Projects</h1>
          <Link href="/ProjectOne"><Image src="/images/exutoireCover.png" alt="project one" width={80} height={50}/></Link>
          <Link href="/ProjectTwo"><Image src="/images/hivefiveCover.png" alt="project one" width={80} height={50}/></Link>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
