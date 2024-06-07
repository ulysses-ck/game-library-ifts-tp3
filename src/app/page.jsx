import { notFound } from "next/navigation";

import { supabase } from "../supabase";

import styles from "./page.module.css";

export default async function Home() {
  const { data, error } = await supabase
    .from("games")
    .select("Rank, Platform, Name, Year, Genre, Publisher, NA_Sales, EU_Sales, JP_Sales, Other_Sales")
    .limit(10);

  if (error) {
    return notFound();
  }
  return (
    <main className={styles.mainSection}>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Plataforma</th>
              <th>Año</th>
              <th>Género</th>
              <th>Desarrollador</th>
              <th>Ventas</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {data.map((game) => (
              <tr key={game.Rank}>
                <td>{game.Rank}</td>
                <td>{game.Name}</td>
                <td>{game.Platform}</td>
                <td>{game.Year}</td>
                <td>{game.Genre}</td>
                <td>{game.Publisher}</td>
                <td>{game.Sales}</td>
                <td>
                  <button className={styles.editButton}>✏️</button>
                  <button className={styles.deleteButton}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
