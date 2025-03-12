import Link from "next/link";
import Image from "next/image";
import styles from "./NextButton.module.css"; 

const NextButton = ({ href, label }) => {
  return (
    <div className={styles.buttonGroup}>
      <button className={styles.nextButton}>
        <Link href={href} className={styles.link}>
          {label}
          <Image 
            src="/images/next-arrow.svg" 
            width={32} 
            height={32} 
            alt="next icon" 
            className={styles.svg} 
          />
        </Link>
      </button>
    </div>
  );
};

export default NextButton;