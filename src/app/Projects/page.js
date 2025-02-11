import styles from "./Projects.module.css";
import NavBar from "../components/NavBar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <section className={styles.projectGallery}>
          <h2>Projects</h2>
          <div className={styles.projectList}>
            <Link href="/ProjectOne">
              <Image src="/images/exutoireCover.png" alt="project one" width={100} height={70}/>
            </Link>
            <Link href="/ProjectTwo">
              <Image src="/images/hivefiveCover.png" alt="project two" width={100} height={70}/>
            </Link>
            <Link href="/ProjectThree">
              <Image src="/images/aurora-cover.png" alt="project three" width={100} height={70}/>
            </Link>
            <Link href="/ProjectFour">
              <Image src="/images/aurora-cover.png" alt="project four" width={100} height={70}/>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// export default function Home() {
//   return (
//     <h1>Under Construction!</h1>
//   )
// }