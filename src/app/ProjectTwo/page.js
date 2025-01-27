import NavBar from "../components/NavBar";
import Image from "next/image";
import styles from "./ProjectTwo.module.css"; 
import Footer from "../components/Footer";
import Link from "next/link";

export default function ProjectTwo() {
  return (
    <>
      <NavBar/>
      <main className={styles.productCard}>
        <header className={styles.header}>
          <h1>HiveFive</h1>
          <h2>Mobile Application Design & Development</h2>
        </header>
        <section className={styles.banner}>
          <Image src="/images/hivefive.jpg" width={900} height={420} alt="banner"/>
        </section>
        <section className={styles.flexRow}>
          <div className={styles.overview}>
            <h3>Overview</h3>
            <p>HiveFive is a mobile app designed to empower environmental enthusiasts to contribute to the sustainability of bees and their habitats. It tackles common user challenges, such as time constraints and lack of financial means, by allowing the user to donate to bee conservation through short knowledge quizzes.</p>
            <button className={styles.tryButton}>Try the app!</button>
          </div>
          <div className={styles.role}>
            <h3>Role</h3>
            <p>UX/UI Designer, Front-End Developer</p>
            <h3>Timeline</h3>
            <p>September 2024 – December 2024</p>
            <h3>Tools Used</h3>
            <p>Figma, NextJS</p>
          </div>
        </section>
        <section className={styles.gallery}>
          <Image src="/images/bee-1.png" width={130} height={300} alt="one"/>
          <Image src="/images/bee-2.png" width={130} height={300} alt="one"/>
          <Image src="/images/bee-3.png" width={130} height={300} alt="one"/>
          <Image src="/images/bee-4.png" width={130} height={300} alt="one"/>
          <Image src="/images/bee-5.png" width={130} height={300} alt="one"/>
          <Image src="/images/bee-6.png" width={130} height={300} alt="one"/>
        </section>
        <button className={styles.nextButton}><Link href="/ProjectOne">Next Project</Link></button>
      </main>
      <Footer/>
    </>
  )
}