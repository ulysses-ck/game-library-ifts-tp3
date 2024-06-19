import styles from "./PaginationButtons.module.css";

export default function PaginationButtons() {
  return (
    <div className={styles.pagination}>
      <div className={styles.container}>
        <button className={styles.btn}>Anterior</button>
        <span className={styles.btn}>1</span>
        <button className={styles.btn}>Siguiente</button>
      </div>
    </div>
  );
}
