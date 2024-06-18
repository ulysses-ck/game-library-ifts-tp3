"use client";
import { useFormState } from "react-dom";
import styles from "./page.module.css";
import Link from "next/link";
import { deleteGame, getGames } from "./actions";
import { useEffect, useState } from "react";
import ConfirmationModal from "../components/Modal"; // Ajusta la ruta según donde esté definido tu componente ConfirmationModal

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [gameIdToDelete, setGameIdToDelete] = useState(null);
  const [state, formAction] = useFormState(getGames, { data: [] }); // Asegúrate de inicializar state.data como un arreglo vacío
  const [limit, setLimit] = useState(10);
  const [isLoading, setIsLoading] = useState(false); // Estado para manejar la carga de datos

  const openDeleteModal = (gameId) => {
    setGameIdToDelete(gameId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setGameIdToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (gameIdToDelete) {
      const formData = new FormData();
      formData.append("Rank", gameIdToDelete);
      setIsLoading(true); // Indicar que se está realizando una operación de carga
      deleteGame(formData)
        .then(() => {
          console.log(`Juego con ID ${gameIdToDelete} eliminado`);
          formAction({ limit: limit }); // Actualizar los datos después de la eliminación
        })
        .catch((error) => {
          console.error("Error al eliminar el juego:", error);
        })
        .finally(() => {
          setIsLoading(false); // Finalizar la indicación de carga
          setShowModal(false); // Cerrar el modal después de la eliminación
          setGameIdToDelete(null);
        });
    }
  };

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

      {isLoading ? (
        <p>Cargando juegos...</p>
      ) : (
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
                      <Link className={styles.editButton} href={`/edit/${game.Rank}`}>
                        ✏️
                      </Link>
                      <button onClick={() => openDeleteModal(game.Rank)} className={styles.deleteButton}>
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <ConfirmationModal isOpen={showModal} onCancel={closeModal} onConfirm={handleConfirmDelete} />
    </main>
  );
}
