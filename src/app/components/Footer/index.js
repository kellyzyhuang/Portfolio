import Image from "next/image"; 

export default function Footer() {
  return (
    <footer>
      <Image src="/images/logo.svg" alt="logo" width={50} height={50}></Image>
      <div className={styles.contact}>
        <h4>Connect with me!</h4>
        <ul>
          <li>icon</li>
          <li>icon</li>
          <li>icon</li>
        </ul>
      </div>
    </footer>
  )
}