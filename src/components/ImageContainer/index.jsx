import styles from "./ImageContainer.module.css";

export default function ImageContainer({ children, width, height }) {
  return (
    <div
      className={styles.imageContainer}
      style={{ width: width || "", height: height || "" }}
    >
      {children}
    </div>
  );
}
