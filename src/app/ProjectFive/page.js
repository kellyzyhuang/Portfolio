import NavBar from "../components/NavBar";
import Image from "next/image";
import styles from "./ProjectFive.module.css"; 
import Footer from "../components/Footer";
import Link from "next/link";

export default function ProjectFive() {
  return (
    <>
      <NavBar />
      <main className={styles.productCard}>
        <header className={styles.header}>
          <div className={styles.titleContainer}>
            <h1>Green City</h1>
            <button className={styles.closeButton}>
              <Link href="/Projects">
              <Image src="images/exit.svg" width={28} height={28} alt="exit icon" />
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

        {/* Video Header */}
        <section className={styles.sectionHeader}>
          <h3>Final Video</h3>
        </section>

        {/* Video */}
        <div className={styles.advertisementVideo}>
            <video controls className={styles.videoPlayer}>
              <source src="/videos/Kelly_Huang_Final_Project.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>

        {/* Next Project Button */}
        <div className={styles.buttonGroup}>
          <button className={styles.nextButton}>
            <Link href="/ProjectFour">
              Next Project <Image src="/images/chevron.svg" width={32} height={32} alt="next icon" className={styles.svg} />
            </Link>
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
