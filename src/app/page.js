"use client";
import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import styles from "./page.module.css";
import ProjectCard from "./components/ProjectCard";

const projects = [
  { title: "Project One", front: "/images/Squiggly.svg", back: "/images/Finding-Aurora-Home-Cover.png", link: "/ProjectThree" },
  { title: "Project Two", front: "/images/Cotton.svg", back: "/images/City-Home-Cover.png", link: "/ProjectFive" },
  { title: "Project Three", front: "/images/Flower.svg", back: "/images/ReachOut-Home-Cover.png", link: "/ProjectFour" },
  { title: "Project Four", front: "/images/Star.svg", back: "/images/Exutoire-Home-Cover.png", link: "/ProjectOne" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Cursor />
      <NavBar />
      <main className={styles.main}>
        <motion.div 
          className={styles.intro}
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <p className={styles.greeting}>Hi! I'm</p>
          <h1>Kelly Huang</h1>
          <p className={styles.descriptor}>UX/UI Designer</p>
          <div className={styles.description}>
            <p>I like <span className={styles.highlight}>exploring</span> and <span className={styles.highlight}>creating</span> fun things.
            </p>
            <h6>🚧  This portfolio is currently a work in progress  🚧</h6>
          </div>
        </motion.div>

        <motion.div 
          className={styles.projectGallery}
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <div className={styles.projectList}>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <p className={styles.hoverLabel}>Hover over, rotate, or click the shapes!</p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
