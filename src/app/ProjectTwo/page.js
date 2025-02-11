import NavBar from "../components/NavBar";
import Image from "next/image";
import styles from "./ProjectTwo.module.css"; 
import Footer from "../components/Footer";
import Link from "next/link";

export default function ProjectTwo() {
  return (
    <>
      <NavBar />
      <main className={styles.productCard}>
        <header className={styles.header}>
          <div className={styles.titleContainer}>
            <h1>HiveFive</h1>
            <button className={styles.closeButton}>
              <Link href="/Projects">
              <Image src="images/exit.svg" width={28} height={28} alt="exit icon"/>
              </Link>
            </button>
          </div>
          <h2>Mobile Application Design & Development</h2>
        </header>
        <section className={styles.banner}>
          <Image src="/images/hivefive-cover.png" width={900} height={200} alt="banner" />
        </section>
        
        <section className={styles.flexRow}>
          <div className={styles.overview}>
            <h3>Overview</h3>
            <p>HiveFive is a mobile app designed to empower environmental enthusiasts to contribute to the sustainability of bees and their habitats. It tackles common user challenges, such as time constraints and lack of financial means, by allowing the user to donate to bee conservation through short knowledge quizzes.</p>
            <button className={styles.tryButton}><a href="https://hivefive-bee.vercel.app/" target="_blank">Try the app!</a></button>
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

        {/* Example Screens Header */}
        <section className={styles.sectionHeader}>
          <h3>Example Screens</h3>
        </section>

        {/* Image Gallery */}
        <section className={styles.gallery}>
          <Image src="/images/bee-1.png" width={130} height={300} alt="one" />
          <Image src="/images/bee-2.png" width={130} height={300} alt="two" />
          <Image src="/images/bee-3.png" width={130} height={300} alt="three" />
          <Image src="/images/bee-4.png" width={130} height={300} alt="four" />
          <Image src="/images/bee-5.png" width={130} height={300} alt="five" />
          <Image src="/images/bee-6.png" width={130} height={300} alt="six" />
        </section>

        {/* What Makes This Design Successful? */}
        <section className={styles.designSuccess}>
          <p>HiveFive uses gamification to make conservation efforts more engaging. By allowing users to support bee sustainability through interactive quizzes, the app encourages participation without requiring financial contributions. The fun and educational approach helps raise awareness about bees while providing users with a sense of achievement.</p>
          <p>The visual design reinforces this mission by using warm, nature-inspired colors and a customizable mascot to create an inviting experience. By combining interactive learning with a rewarding donation system, HiveFive motivates users to take part in meaningful environmental impact.</p>
        </section>

        {/* Style Guide Section */}
        <section className={styles.styleGuide}>
          <div className={styles.styleGuideImages}>
            <div className={styles.imageContainer}>
              <Image src="/images/style-1.png" layout="fill" objectFit="contain" alt="style one" />
            </div>
            <div className={styles.imageContainer}>
              <Image src="/images/style-2.png" layout="fill" objectFit="contain" alt="style two" />
            </div>
            <div className={styles.imageContainer}>
              <Image src="/images/style-3.png" layout="fill" objectFit="contain" alt="style three" />
            </div>
          </div>
          <button className={styles.styleGuideButton}>
            <a href="https://hivefive-a5styleguide.vercel.app/" target="_blank">
              View Style Guide!
            </a>
          </button>
        </section>

        {/* Next Project Button with Arrows */}
        <div className={styles.buttonGroup}>
          <button className={styles.nextButton}>
            <Link href="/ProjectThree">
              Next Project <Image src="/images/chevron.svg" width={32} height={32} alt="next icon" className={styles.svg}  />
            </Link>
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
