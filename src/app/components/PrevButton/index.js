import Link from "next/link";
import Image from "next/image";
import styles from "./PrevButton.module.css"; 

const PrevButton = ({ href, label }) => {
  return (
    <div className={styles.buttonGroup}>
      <button className={styles.prevButton}>
        <Link href={href} className={styles.link}>
          <Image 
            src="/images/prev-arrow.svg" 
            width={32} 
            height={32} 
            alt="previous icon" 
            className={styles.svg} 
          />
          {label}
        </Link>
      </button>
    </div>
  );
};

export default PrevButton;