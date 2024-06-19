import styles from "./PaginationButtons.module.css";

export default function PaginationButtons () {
    return (
        <div class={styles.pagination}>
            <div class={styles.container}>
                <a href="#">Anterior</a>
                <a href="#" class="active">1</a>
                <a href="#">Siguiente</a>
            </div>
        </div>
    );
}