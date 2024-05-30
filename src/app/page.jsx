import { notFound } from "next/navigation";

import { supabase } from "../supabase";

import styles from "./page.module.css";

export default async function Home() {
  const { data, error } = await supabase
    .from("games")
    .select("Rank, Platform, Name")
    .limit(10);

  if (error) {
    return notFound();
  }
  return (
    <main>
      <h1>Proyecto Juegos</h1>
      <ul className={styles.tableUl}>
        <li className={styles.tableHeaders}>
          <p className={styles.tableParagraph}>ID</p>
          <p className={styles.tableParagraph}>Nombre</p>
          <p className={styles.tableParagraph}>Plataforma</p>
        </li>
        {data.map((game) => {
          return (
            <li key={game.Rank} className={styles.tableData}>
              <p className={styles.tableParagraph}>{game.Rank}</p>
              <p className={styles.tableParagraph}>{game.Name}</p>
              <p className={styles.tableParagraph}>{game.Platform}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
