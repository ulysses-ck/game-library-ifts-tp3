import styles from "./page.module.css";
import dynamic from "next/dynamic";

const SearchBar = dynamic(() => import("@/components/SearchBar"));

export default function SearchPage() {
  return (
    <main className={styles.SearchPage}>
      <h1>Search Game by Name</h1>

      <SearchBar />
    </main>
  );
}
