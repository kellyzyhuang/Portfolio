import NavBar from "../components/NavBar";
import Image from "next/image";
import styles from "./ProjectOne.module.css"; 
import Footer from "../components/Footer";
import Link from "next/link";

export default function ProjectOne() {
  return (
    <>
      <NavBar/>
      <main className={styles.productCard}>
        <header className={styles.header}>
          <h1>EXUTOIRE</h1>
          <h2>E-Commerce Website Design & Development</h2>
        </header>
        <section className={styles.banner}>
          <Image src="/images/EXUTOIRE.png" width={900} height={350} alt="banner"/>
        </section>
        <section className={styles.flexRow}>
          <div className={styles.overview}>
            <h3>Overview</h3>
            <p>EXUTOIRE is an online bakery store allowing users to browse items and purchase them for pick-up or delivery. The website is designed to incorporate EXTUOIRE’s brand identity of simplicity and sophistication through the usage of dark red tones and minimalism.</p>
            <button className={styles.tryButton}>Try the app!</button>
          </div>
          <div className={styles.role}>
            <h3>Role</h3>
            <p>UX/UI Designer, Front-End Developer</p>
            <h3>Timeline</h3>
            <p>September 2022 – December 2024</p>
            <h3>Tools Used</h3>
            <p>Figma, Vite + React</p>
          </div>
        </section>
        <section className={styles.gallery}>
          <Image src="/images/exutoireOne.png" width={900} height={500} alt="one"/>
          <Image src="/images/exutoireTwo.png" width={900} height={500} alt="one"/>
          <Image src="/images/exutoireThree.png" width={900} height={500} alt="one"/>
        </section>
        <div className={styles.buttonGroup}>
          <button className={styles.nextButton}><Link href="/ProjectTwo">Next Project</Link></button>
        </div>
      </main>
      <Footer/>
    </>
  )
}