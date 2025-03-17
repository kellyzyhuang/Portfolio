"use client"; 

import NavBar from "../components/NavBar";
import Image from "next/image";
import styles from "./ProjectSix.module.css"; 
import Footer from "../components/Footer";
import Link from "next/link";
import NextButton from "../components/NextButton";
import PrevButton from "../components/PrevButton";
import Cursor from "../components/Cursor";

export default function ProjectSix() {
  return (
    <>
      <NavBar />
      <Cursor />
      <main className={styles.productCard}>
        <header className={styles.header}>
          <div className={styles.titleContainer}>
            <h1>CarePanda</h1>
            <button className={styles.closeButton}>
              <Link href="/Projects">
              <Image src="images/exit.svg" width={38} height={38} alt="exit icon" />
              </Link>
            </button>
          </div>
          <h4>Poster & Logo Design</h4>
        </header>
        <section className={styles.banner}>
          <Image src="/images/carepanda.png" width={900} height={350} alt="banner"/>
        </section>

        <section className={styles.flexRow}>
          <div className={styles.overview}>
            <h3>Overview</h3>
            <p>CarePanda is a nonprofit organization dedicated to caring for pandas. The aim of this project was to create three different posters to advertise the organization. The posters utilize a bright green background, representing bamboo, and cute images of pandas with clear calls-to-action to engage audiences.</p>
          </div>
          <div className={styles.role}>
            <h3>Role</h3>
            <p>Designer</p>
            <h3>Timeline</h3>
            <p>January 2024 – January 2024</p>
            <h3>Tools Used</h3>
            <p>Adobe Illustrator</p>
          </div>
        </section>

        <section className={styles.sectionHeader}>
          <h2>Mockups</h2>
        </section>

        <section className={styles.gallery}>
          <Image src="/images/care-panda-mockup.png" width={900} height={500} alt="care panda posters"/>
          <Image src="/images/carepanda-mockup-2.png" width={900} height={500} alt="care panda posters"/>
        </section>

        <section className={styles.sectionHeader}>
          <h2>Logo Design</h2>
        </section>

        <section className={styles.gallery}>
          <Image src="/images/care-panda-logo.png" width={900} height={500} alt="care panda logo design"/>
        </section>

        <section className={styles.designSuccess}>
          <p>The logo features a panda resting on a house made out of bamboo to represent how CarePanda serves as a safe space for pandas. Vibrant colours as well as a rounded typeface are used to reflect a fun and warm atmosphere.</p>
          <p className={styles.paraTwo}></p>
        </section>

        <div className={styles.buttonContainer}>
          <PrevButton href="/ProjectTwo" label="Previous Project" />
          <NextButton href="/ProjectOne" label="Next Project" />
        </div>
      </main>
      <Footer />
    </>
  );
}
