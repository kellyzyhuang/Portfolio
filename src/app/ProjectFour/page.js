"use client"; 
import { useState } from "react";
import NavBar from "../components/NavBar";
import Image from "next/image";
import styles from "./ProjectFour.module.css";
import Footer from "../components/Footer";
import Link from "next/link";

export default function ProjectFour() {
  const [currentFeature, setCurrentFeature] = useState(1);
  const [currentPersona, setCurrentPersona] = useState(0);

  const personas = [
    "/images/reachout-persona-1.png",
    "/images/reachout-persona-2.png",
    "/images/reachout-persona-3.png",
    "/images/reachout-persona-4.png",
  ];

  const features = [
    "/images/feature-1.png",
    "/images/feature-2.png",
    "/images/feature-3.png",
  ];

  return (
    <>
      <NavBar />
      <main className={styles.productCard}>
        <header className={styles.header}>
          <div className={styles.titleContainer}>
            <h1>ReachOut</h1>
            <button className={styles.closeButton}>
              <Link href="/Projects">
                <Image src="images/exit.svg" width={28} height={28} alt="exit icon" />
              </Link>
            </button>
          </div>
          <h2>Web Application Design & Development | Case Study</h2>
        </header>
        <section className={styles.banner}>
          <Image src="/images/reachout.png" width={900} height={200} alt="banner" />
        </section>

        <section className={styles.flexRow}>
          <div className={styles.overview}>
            <h3>Overview</h3>
            <p>
              ReachOut is a web application tailored to bridge the gap between organization workers seeking employment for ex-offenders and employers who are open to second-chance hiring. By leveraging AI and integrating tools directly within the platform, the app is designed to optimize the job search/hiring process, expediting the reintegration of ex-offenders into society.
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.tryButton}>
                <a href="https://wereachout.ca/" target="_blank">View Demo</a>
              </button>
              <button className={styles.tryButton}>
                <a href="https://wereachout.ca/" target="_blank">View App</a>
              </button>
            </div>
          </div>
          <div className={styles.role}>
            <h3>Role</h3>
            <p>UX/UI Designer & Researcher, Front-End Developer</p>
            <h3>Timeline</h3>
            <p>September 2024 – December 2024</p>
            <h3>Tools Used</h3>
            <p>Figma, NextJS, ShadCn</p>
          </div>
        </section>

        <section className={styles.problemSection}>
          <h3>Problem Identification</h3>
          <p>
            Through user surveys and secondary research, 3 key problems were identified:
          </p>
          <div className={styles.problemList}>
            <div>
              <span>1</span>
              <h4>Absence of a Centralized Platform</h4>
              <p>Organization workers expressed frustration with having to switch between multiple different tools.</p>
            </div>
            <div>
              <span>2</span>
              <h4>Limited Access to Resources</h4>
              <p>Employers indicated hesitation towards second-chance hiring due to the lack of legal resources.</p>
            </div>
            <div>
              <span>3</span> 
              <h4>Poorly Regulated Job Boards</h4>
              <p>Both organization workers and employers felt it was time-consuming going through job boards due to the lack of regulations and maintenance regarding postings. </p>
            </div>
          </div>
          <button className={styles.tryButton}>
            <a href="https://docs.google.com/document/d/1nGeG72xzyeicEJhoR1SsGmbHPwyDT6uv1JvGOceVqFQ/edit?usp=sharing" target="_blank">View Research</a>
          </button>
        </section>

        <section className={styles.userPersonasSection}>
          <h3>User Personas</h3>
          <div className={styles.carousel}>
            <button
              className={styles.arrowButton}
              onClick={() => setCurrentPersona((currentPersona - 1 + personas.length) % personas.length)}
            >
              &lt;
            </button>
            <Image src={personas[currentPersona]} width={400} height={500} alt={`Persona ${currentPersona + 1}`} />
            <button
              className={styles.arrowButton}
              onClick={() => setCurrentPersona((currentPersona + 1) % personas.length)}
            >
              &gt;
            </button>
          </div>
        </section>

        <section className={styles.solutionSection}>
          <h3>Solution</h3>
          <p>
            ReachOut addresses the challenges identified by providing a one-stop platform that integrates seamless tracking and communication tools to streamline collaboration between organization workers and employers. By consolidating tools and resources into a single, user-friendly interface, ReachOut eliminates the need for organization workers to navigate multiple platforms, saving time and reducing frustration. The platform's AI-powered job matching ensures that job seekers are paired with opportunities that align with their skills and experience, addressing the inefficiencies of poorly regulated job boards.
          </p>
        </section>

        <section className={styles.userFlowSection}>
          <h3>User Flow</h3>
          <div className={styles.userFlowImages}>
            <Image src="/images/orgo-flow.png" width={450} height={250} alt="Organization User Flow" />
            <Image src="/images/employer.png" width={450} height={250} alt="Employer User Flow" />
          </div>
          <p>Two separate flows were created to address the different needs and demands of the two target groups. The organization flow is focused on making the process of searching, applying, and interviewing for a job seamless and efficient. For employers, the flow is centered around building trust and security.</p>
        </section>

        <section className={styles.featuresSection}>
          <h3>Features</h3>
          <div className={styles.featuresContainer}>
            <div className={styles.featuresList}>
              <p
                className={currentFeature === 1 ? styles.activeFeature : ""}
                onClick={() => setCurrentFeature(1)}
              >
                1. AI-Powered Job Matching
              </p>
              <p
                className={currentFeature === 2 ? styles.activeFeature : ""}
                onClick={() => setCurrentFeature(2)}
              >
                2. Application Tracking
              </p>
              <p
                className={currentFeature === 3 ? styles.activeFeature : ""}
                onClick={() => setCurrentFeature(3)}
              >
                3. Applicant Tracking
              </p>
            </div>
            <div className={styles.featureImage}>
              <Image src={features[currentFeature - 1]} width={500} height={300} alt={`Feature ${currentFeature}`} />
            </div>
          </div>
        </section>

        <section className={styles.styleGuideSection}>
          <h3>Style Guide</h3>
          <p>The styling of the web app is designed to align with values of trust, connection, and support. By carefully choosing colors and imagery that evoke warmth and security, ReachOut creates an environment where the diverse user base of nonprofit workers, ex-offenders, and employers feels safe and empowered.</p>
          <Image src="/images/styletile.jpg" width={900} height={600} alt="Style Tile" />
        </section>

        <div className={styles.buttonGroup}>
          <button className={styles.nextButton}>
            <Link href="/ProjectThree">
              Next Project <Image src="/images/chevron.svg" width={32} height={32} alt="next icon" className={styles.svg} />
            </Link>
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
