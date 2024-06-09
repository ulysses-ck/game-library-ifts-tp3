import Link from "next/link";
import styles from "./TableRecords.module.css";

import { deleteGame } from "@/app/actions";

export default function TableRecords({ data }) {
  return (
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
              <Link className={styles.editButton} href={`/edit/${game.Rank}`}>
                ✏️
              </Link>
              <form action={deleteGame}>
                <input type="hidden" name="Rank" value={game.Rank} />
                <button className={styles.deleteButton}>🗑️</button>
              </form>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
