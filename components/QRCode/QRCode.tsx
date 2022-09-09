import styles from "./QRCode.module.scss";
import QRImage from "./image-qr-code.png";

export default function QRCode() {
  return (
    <div className={styles.container}>
      <img src={QRImage.src} alt="QR code" className={styles.image} />
      <h1 className={styles.title}>
        Improve your front-end skills by building projects
      </h1>
      <h2 className={styles.subtitle}>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </h2>
    </div>
  );
}
