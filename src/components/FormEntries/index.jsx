"use client";
import { useEffect, useState } from "react";

import styles from "./FormEntries.module.css";

export default function FormEntries({ formAction }) {
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
    }
  }, [limit]);

  return (
    <div className={styles.formContainer}>
      <label htmlFor="limit" className={styles.label}>
        Mostrar
      </label>
      <input
        type="number"
        id="limit"
        onInput={handleOnInput}
        value={limit}
        className={styles.input}
      />
      <span className={styles.label}>entradas</span>
    </div>
  );
}
