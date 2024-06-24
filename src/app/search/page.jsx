import SearchBar from "@/components/SearchBar";
import styles from "./page.module.css";

export default function SearchPage() {
  return (
    <main className={styles.SearchPage}>
      <h1 className="text-2xl">Buscar juego por nombre</h1>

      <div className="overflow-x-scroll relative max-w-full">
        <SearchBar />
      </div>
    </main>
  );
}
