"use client";
import { useEffect, useState } from "react";

export default function FormEntries({formAction}) {
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
  );
}
