import Link from "next/link";
import styles from "./TableRecords.module.css";
import ButtonDelete from "@/components/ButtonDelete";
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
          <th>Ventas Norte America</th>
          <th>Ventas Europa</th>
          <th>Ventas Japón</th>
          <th>Otras Ventas</th>
          <th>Ventas Globales</th>
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
            <td>{game.NA_Sales ? `${game.NA_Sales} M` : "No especificado"}</td>
            <td>{game.EU_Sales ? `${game.EU_SalesE} M` : "No especificado"}</td>
            <td>{game.JP_Sales ? `${game.JP_Sales} M` : "No especificado"}</td>
            <td>
              {game.Other_Sales ? `${game.Other_Sales} M` : "No especificado"}
            </td>
            <td>
              {game.Global_Sales ? `${game.Global_Sales} M` : "No especificado"}
            </td>
            <td>
              <div className={styles.ActionButtons}>
                <Link className={styles.editButton} href={`/edit/${game.Rank}`}>
                  ✏️
                </Link>
                <ButtonDelete game={game} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
