"use client"; 

import { useState } from "react";
import NavBar from "../components/NavBar";
import Image from "next/image";
import styles from "./ProjectSeven.module.css"; 
import Footer from "../components/Footer";
import Link from "next/link";
import NextButton from "../components/NextButton";
import PrevButton from "../components/PrevButton";
import Cursor from "../components/Cursor";

export default function ProjectSeven() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <NavBar />
      <Cursor />
      <main className={styles.productCard}>
        <header className={styles.header}>
          <div className={styles.titleContainer}>
            <h1>WeConnect</h1>
            <button className={styles.closeButton}>
              <Link href="/Projects">
                <Image src="images/exit.svg" width={28} height={28} alt="exit icon"/>
              </Link>
            </button>
          </div>
          <h2>Web Application Research & Design</h2>
        </header>
        <section>
          <Image 
            src="/images/weconnect.png" 
            width={1300} 
            height={400} 
            alt="banner"
            onClick={() => setSelectedImage("/images/weconnect.png")}
            className={styles.banner} 
          />
        </section>

        <section className={styles.flexRow}>
          <div className={styles.overview}>
            <h3>Overview</h3>
            <p>WeConnect is a video conferencing web app with instant translation catered to multicultural users globally. It tackles common user challenges, such as context switching and steep learning curves, by creating an intuitive design that integrates frequently used features all in one app.</p>
          </div>
          <div className={styles.role}>
            <h3>Role</h3>
            <p>UI/UX Researcher, UI Designer</p>
            <h3>Timeline</h3>
            <p>January 2024 – April 2024</p>
            <h3>Tools Used</h3>
            <p>Google Sheets, Google Docs, Google Forms, Figma</p>
          </div>
        </section>

        <section className={styles.sectionHeader}>
          <h3>Example Screens</h3>
        </section>

        <section className={styles.gallery}>
          {["weconnect-1.png", "weconnect-2.png", "weconnect-3.png", "weconnect-4.png", "weconnect-5.png", "weconnect-6.png"].map((img, index) => (
            <Image 
              key={index}
              src={`/images/${img}`} 
              width={130} 
              height={300} 
              alt={`example-${index}`} 
              onClick={() => setSelectedImage(`/images/${img}`)}
              className={styles.clickableImage}
            />
          ))}
        </section>

        <section className={styles.sectionHeader}>
          <h3>Style Guide</h3>
        </section>

        {selectedImage && (
          <div className={styles.modal} onClick={() => setSelectedImage(null)}>
            <div className={styles.modalContent}>
              <Image 
                src={selectedImage} 
                alt="Expanded view" 
                layout="intrinsic" 
                width={900} 
                height={600} 
                objectFit="contain"
              />
              <button className={styles.closeModal} onClick={() => setSelectedImage(null)}>✖</button>
            </div>
          </div>
        )}

        <section className={styles.styleGuide}>
          <div className={styles.styleGuideImages}>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/weconnect-styleguide.png" 
                width={300} 
                height={200} 
                alt="style guide"
                onClick={() => setSelectedImage("/images/weconnect-styleguide.png")}
                className={styles.clickableImage}
              />
            </div>
          </div>
          <button className={styles.styleGuideButton}>
            <a href="https://www.figma.com/design/9PWvJ7iO7zKrpJhjFEo8Sg/MDIA2003---WeConnect?node-id=473-3158&t=IlqMZmCatoy9obym-1" target="_blank">
              View Style Guide!
            </a>
          </button>
        </section>

        <section className={styles.designSuccess}>
          <p>WeConnect's design uses shades of blue and purple to provide a modern, but professional aesthetic. Rounded buttons and icons provide a sense of familiarity to ensure intuitiveness.</p>
          <p>WeConnect's logo utilizes a paperclip and a chat icon to symbolize connection and collaboration, which is the core purpose of the app. </p>
        </section>

        <div className={styles.buttonContainer}>
          <PrevButton href="/ProjectSix" label="Previous Project" />
          <NextButton href="/ProjectOne" label="Next Project" />
        </div>
      </main>
      <Footer />
    </>
  );
}
