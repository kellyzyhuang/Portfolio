"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRouter } from "next/navigation"; 
import styles from "./ProjectCard.module.css";

gsap.registerPlugin(Draggable);

export default function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);
  const rotationRef = useRef(0);
  const router = useRouter(); 

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      { y: -300, opacity: 0, scale: 0.5 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      }
    );

    const draggableInstance = Draggable.create(el, {
      type: "rotation,x,y",
      inertia: true,
      onDragEnd: function () {
        gsap.to(el, {
          x: 0,
          y: 0,
          rotation: rotationRef.current,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });
      },
      onDrag: function () {
        rotationRef.current = this.rotation;
      },
    });

    return () => {
      draggableInstance[0].kill();
    };
  }, []);

  const handleCardClick = () => {
    if (project.link) {
      router.push(project.link);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`${styles.projectCard} ${flipped ? styles.flipped : ""}`}
      onClick={handleCardClick}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >

      <div className={styles.cardFront}>
        <img src={project.front} alt={project.title} />
      </div>

      <div className={styles.cardBack} style={{ maskImage: `url(${project.front})`, WebkitMaskImage: `url(${project.front})` }}>
        <img src={project.back} alt="Project Preview" />
      </div>
    </motion.div>
  );
}
