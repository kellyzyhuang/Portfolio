"use client"; 

import { useState } from "react";
import styles from "./Projects.module.css";
import NavBar from "../components/NavBar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Cursor from "../components/Cursor";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    { id: 1, title: "Exutoire", description: "Web App Design & Development", src: "/images/exutoire-project-cover.png", categories: ["UI/UX Design", "Development"], tools: ["Figma", "NextJS"], link: "/ProjectOne" },
    { id: 2, title: "HiveFive", description: "Web App Design & Development", src: "/images/hivefive-project-cover.png", categories: ["UI/UX Design", "Development"], tools: ["Figma", "NextJS"], link: "/ProjectTwo" },
    { id: 3, title: "Finding Aurora", description: "Children's E-Book", src: "/images/aurora-cover.png", categories: ["Graphic Design"], tools: ["Illustrator", "InDesign", "After Effects"], link: "/ProjectThree" },
    { id: 4, title: "ReachOut", description: "Web App Design & Development", src: "/images/reachout-cover.png", categories: ["UI/UX Design", "Development"], tools: ["Figma", "NextJS"], link: "/ProjectFour" },
    { id: 5, title: "Green City", description: "Motion Graphic", src: "/images/greencity-project-cover.png", categories: ["Motion Graphics"], tools: ["After Effects", "Illustrator"], link: "/ProjectFive" },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(filter));

  return (
    <div className={styles.page}>
      <NavBar />
      <Cursor />
      <header className={styles.header}>
        <h1>Projects</h1>
        <nav className={styles.chipNav}>
          {["All", "UI/UX Design", "Graphic Design", "Motion Graphics", "Development"].map((category) => (
            <button
              key={category}
              className={`${styles.chip} ${filter === category ? styles.activeChip : ""}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.projectGallery}>
          <div className={styles.projectList}>
            {filteredProjects.map((project) => (
              <Link key={project.id} href={project.link} className={styles.projectCard}>
                <div className={styles.cardContent}>
                  <div className={styles.imageContainer}>
                    <Image src={project.src} alt={project.title} width={250} height={150} tyle={{ objectFit: "cover", width: "100%", height: "auto" }} className={styles.projectImage} />
                  </div>
                  <div className={styles.projectInfo}>
                    <h2>{project.title}</h2>
                    <p className={styles.description}>{project.description}</p>
                    <div className={styles.toolsAndArrow}>
                      <div className={styles.toolsUsed}>
                        {project.tools.map((tool, index) => (
                          <span key={index} className={styles.toolChip}>{tool}</span>
                        ))}
                      </div>
                      <div className={styles.arrowIcon}>
                        <IoArrowForwardCircleOutline size={35} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
