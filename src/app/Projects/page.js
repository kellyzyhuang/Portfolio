"use client"; 

import { useState } from "react";
import styles from "./Projects.module.css";
import NavBar from "../components/NavBar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    { id: 1, title: "Project One", src: "/images/exutoireCover.png", categories: ["UI/UX Design", "Development"], link: "/ProjectOne" },
    { id: 2, title: "Project Two", src: "/images/hivefiveCover.png", categories: ["UI/UX Design", "Development"], link: "/ProjectTwo" },
    { id: 3, title: "Project Three", src: "/images/aurora-cover.png", categories: ["Graphic Design"], link: "/ProjectThree" },
    { id: 4, title: "Project Four", src: "/images/reachout-cover.png", categories: ["UI/UX Design", "Development"], link: "/ProjectFour" },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(filter));

  return (
    <div className={styles.page}>
      <NavBar />
      <header className={styles.header}>
        <h1>Projects</h1>
        <nav className={styles.chipNav}>
          <button className={styles.chip} onClick={() => setFilter("All")}>
            All
          </button>
          <button className={styles.chip} onClick={() => setFilter("UI/UX Design")}>
            UI/UX Design
          </button>
          <button className={styles.chip} onClick={() => setFilter("Graphic Design")}>
            Graphic Design
          </button>
          <button className={styles.chip} onClick={() => setFilter("Motion Graphics")}>
            Motion Graphics
          </button>
          <button className={styles.chip} onClick={() => setFilter("Development")}>
            Development
          </button>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.projectGallery}>
          <div className={styles.projectList}>
            {filteredProjects.map((project) => (
              <Link key={project.id} href={project.link}>
                <Image src={project.src} alt={project.title} width={250} height={150} />
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
