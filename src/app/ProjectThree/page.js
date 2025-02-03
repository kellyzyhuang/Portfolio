import NavBar from "../components/NavBar";
import Image from "next/image";
import styles from "./ProjectThree.module.css"; 
import Footer from "../components/Footer";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai"; 
import { FiChevronsRight } from "react-icons/fi";

export default function ProjectThree() {
  return (
    <>
      <NavBar />
      <main className={styles.productCard}>
        <header className={styles.header}>
          <div className={styles.titleContainer}>
            <h1>Finding Aurora</h1>
            <button className={styles.closeButton}>
              <Link href="/">
              <AiOutlineClose size={32} />
              </Link>
            </button>
          </div>
          <h2>Children's E-Book Design and Development</h2>
        </header>
        <section className={styles.banner}>
          <Image src="/images/finding-aurora.png" width={900} height={350} alt="banner"/>
        </section>

        <section className={styles.flexRow}>
          <div className={styles.overview}>
            <h3>Overview</h3>
            <p>Finding Aurora is an interactive, educational e-book designed for children ages 3+. They join a polar bear named Aurora on her journey to learn about and see the Aurora borealis. Through meeting new characters, readers learn various animal facts while being encouraged to practice healthy habits and self care.</p>
            <button className={styles.tryButton}>Read here!</button>
          </div>
          <div className={styles.role}>
            <h3>Role</h3>
            <p>Designer, Developer</p>
            <h3>Timeline</h3>
            <p>November 2024 – December 2024</p>
            <h3>Tools Used</h3>
            <p>Adobe Illustrator, Adobe After Effects, Adobe InDesign</p>
          </div>
        </section>

        {/* Example Screens Header */}
        <section className={styles.sectionHeader}>
          <h3>Example Screens</h3>
        </section>

        {/* Image Gallery */}
        <section className={styles.gallery}>
          <Image src="/images/aurora-1.png" width={900} height={500} alt="one"/>
          <Image src="/images/aurora-2.png" width={900} height={500} alt="two"/>
          <Image src="/images/aurora-3.png" width={900} height={500} alt="three"/>
        </section>

        <section className={styles.designSuccess}>
          <p>Finding Aurora encourages readers to choose their own story path through interactive elements. Each decision leads to a different outcome wherein the reader learns new facts surrounding polar bears, their environment, or other arctic animals.</p>
          <p className={styles.paraTwo}>It combines age-appropriate language, engaging motion graphics, and sound to create an immersive experience suitable for parents at home or for educators in the classroom!</p>
        </section>

        {/* Next Project Button with Arrows */}
        <div className={styles.buttonGroup}>
          <button className={styles.nextButton}>
            <Link href="/ProjectOne">
              Next Project <FiChevronsRight size={32} />
            </Link>
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
