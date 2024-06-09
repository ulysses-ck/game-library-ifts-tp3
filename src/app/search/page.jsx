import SearchBar from "@/components/SearchBar";
import styles from "./page.module.css";

export default function SearchPage() {
  return (
    <main className={styles.SearchPage}>
      <h1 className="text-2xl">Search Game by Name</h1>

      <SearchBar />
    </main>
  );
}
