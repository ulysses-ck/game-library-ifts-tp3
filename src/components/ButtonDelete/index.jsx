import styles from "./ButtonDelete.module.css";
import ConfirmationModal from "../Modal";
import { useState } from "react";

export default function ButtonDelete({ game }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
        className={styles.deleteButton}
      >
        🗑️
      </button>
      <ConfirmationModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        gameId={game.Rank}
      />
    </>
  );
}
