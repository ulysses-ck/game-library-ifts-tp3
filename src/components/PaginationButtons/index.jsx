"use client";
import styles from "./PaginationButtons.module.css";

import { useState } from "react";

export default function PaginationButtons({ formAction, limit, offset }) {
  const [page, setPage] = useState(1);

  const handleOnClickNext = () => {
    setPage((prevPage) => prevPage + 1);

    const formData = new FormData();
    formData.append("limit", limit);
    formData.append("offset", limit * page + 1);
    formAction(formData);
  };

  const handleOnClickPrevious = () => {
    setPage((prevPage) => (prevPage < 1 ? 1 : prevPage - 1));
    const formData = new FormData();
    formData.append("limit", limit);
    formData.append("offset", offset - limit < 0 ? 0 : offset - limit);
    formAction(formData);
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.container}>
        <button
          className={styles.btn}
          disabled={page === 1}
          onClick={handleOnClickPrevious}
        >
          Anterior
        </button>
        <span className={styles.btn}>{page}</span>
        <button className={styles.btn} onClick={handleOnClickNext}>
          Siguiente
        </button>
      </div>
    </div>
  );
}
