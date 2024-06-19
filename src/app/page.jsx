"use client";
import { useFormState } from "react-dom";
import styles from "./page.module.css";
import Link from "next/link";
import { getGames } from "./actions";
import { useEffect, useState } from "react";
import ButtonDelete from "@/components/ButtonDelete";
import PaginationButtons from "@/components/PaginationButtons";

export default function Home() {
  const [state, formAction] = useFormState(getGames, { data: [] }); // Asegúrate de inicializar state.data como un arreglo vacío
  const [limit, setLimit] = useState(10);

  const handleOnInput = (e) => {
    const limit = e.target.value;
    setLimit(limit);
  };

  useEffect(() => {
    if (limit) {
      const formData = new FormData();
      formData.append("limit", limit);
      formAction(formData);
      console.log(state);
    }
  }, [limit]);

  return (
    <main className={styles.mainSection}>
      <div>
        <label htmlFor="limit">
          Mostrar
          <input
            type="number"
            id="limit"
            onInput={handleOnInput}
            value={limit}
            className="border border-black"
          />
          entradas
        </label>
      </div>

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
            {state.data.map((game) => (
              <tr key={game.Rank}>
                <td>{game.Rank}</td>
                <td>{game.Name}</td>
                <td>{game.Platform}</td>
                <td>{game.Year}</td>
                <td>{game.Genre}</td>
                <td>{game.Publisher}</td>
                <td>{game.Sales}</td>
                <td>
                  <div className={styles.ActionButtons}>
                    <Link
                      className={styles.editButton}
                      href={`/edit/${game.Rank}`}
                    >
                      ✏️
                    </Link>
                    <ButtonDelete game={game} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PaginationButtons />
    </main>
  );
}
