"use client"; 

import NavBar from "../components/NavBar";
import Image from "next/image";
import styles from "./ProjectFive.module.css"; 
import Footer from "../components/Footer";
import Link from "next/link";
import NextButton from "../components/NextButton";
import PrevButton from "../components/PrevButton";
import Cursor from "../components/Cursor";

export default function ProjectFive() {
  return (
    <>
      <NavBar />
      <Cursor />
      <main className={styles.productCard}>
        <header className={styles.header}>
          <div className={styles.titleContainer}>
            <h1>Green City</h1>
            <button className={styles.closeButton}>
              <Link href="/Projects">
              <Image src="/images/exit.svg" width={28} height={28} alt="exit icon" />
              </Link>
            </button>
          </div>
          <h2>Motion Graphic</h2>
        </header>
        <section className={styles.banner}>
          <Image src="/images/GreenCity.png" width={900} height={350} alt="banner"/>
        </section>

        <section className={styles.flexRow}>
          <div className={styles.overview}>
            <h3>Overview</h3>
            <p>Green City is a motion graphic designed to guide viewers through the process of building a sustainable green city. It utilizes bright colours, simple imagery, and playful sound effects to create an easily digestable and educational experience. </p>
          </div>
          <div className={styles.role}>
            <h3>Role</h3>
            <p>Designer, Developer</p>
            <h3>Timeline</h3>
            <p>March 2024 – May 2024</p>
            <h3>Tools Used</h3>
            <p>Adobe Illustrator, Adobe After Effects</p>
          </div>
        </section>

        <section className={styles.sectionHeader}>
          <h3>Final Video</h3>
        </section>

        <div className={styles.advertisementVideo}>
            <video controls className={styles.videoPlayer}>
              <source src="/videos/Kelly_Huang_Final_Project.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>

        <section className={styles.assetsSection}>
          <h3>Project Assets</h3>
          <div className={styles.assetsGrid}>
            <Image src="/images/planets.png" width={300} height={200} alt="Asset 1" />
            <Image src="/images/building.png" width={300} height={200} alt="Asset 2" />
            <Image src="/images/traffic.png" width={300} height={200} alt="Asset 3" />
            <Image src="/images/city.png" width={300} height={200} alt="Asset 4" />
          </div>
        </section>

        <div className={styles.buttonContainer}>
          <PrevButton href="/ProjectFour" label="Previous Project" />
          <NextButton href="/ProjectSix" label="Next Project" />
        </div>
      </main>
      <Footer />
    </>
  );
}
