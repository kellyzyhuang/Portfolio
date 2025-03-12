import NavBar from "../components/NavBar";
import Image from "next/image";
import styles from "./ProjectSix.module.css"; 
import Footer from "../components/Footer";
import Link from "next/link";
import NextButton from "../components/NextButton";
import PrevButton from "../components/PrevButton";

export default function ProjectSix() {
  return (
    <>
      <NavBar />
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
          <h4>Poster Design</h4>
        </header>
        <section className={styles.banner}>
          <Image src="/images/carepanda.png" width={900} height={350} alt="banner"/>
        </section>

        <section className={styles.flexRow}>
          <div className={styles.overview}>
            <h3>Overview</h3>
            <p>CarePanda.</p>
          </div>
          <div className={styles.role}>
            <h3>Role</h3>
            <p>Designer, Developer</p>
            <h3>Timeline</h3>
            <p>January 2024 – February 2024</p>
            <h3>Tools Used</h3>
            <p>Adobe Illustrator</p>
          </div>
        </section>

        <section className={styles.sectionHeader}>
          <h2>Example Screens</h2>
        </section>

        <section className={styles.gallery}>
          <Image src="/images/aurora-1.png" width={900} height={500} alt="one"/>
          <Image src="/images/aurora-2.png" width={900} height={500} alt="two"/>
          <Image src="/images/aurora-3.png" width={900} height={500} alt="three"/>
        </section>

        <section className={styles.designSuccess}>
          <p>Finding Aurora encourages readers to choose their own story path through interactive elements. Each decision leads to a different outcome wherein the reader learns new facts surrounding polar bears, their environment, or other arctic animals.</p>
          <p className={styles.paraTwo}>It combines age-appropriate language, engaging motion graphics, and sound to create an immersive experience suitable for parents at home or for educators in the classroom!</p>
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
