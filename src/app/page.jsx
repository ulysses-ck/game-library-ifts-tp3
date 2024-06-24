"use client";
import { useFormState } from "react-dom";

import styles from "./page.module.css";
import Link from "next/link";

import { getGames } from "./actions";

import ButtonDelete from "@/components/ButtonDelete";
import PaginationButtons from "@/components/PaginationButtons";
import FormEntries from "@/components/FormEntries";
import TableRecords from "@/components/TableRecords";

export default function Home() {
  const [state, formAction] = useFormState(getGames, {
    data: [],
    limit: 10,
    offset: 0,
    ascending: true,
  }); // Asegúrate de inicializar state.data como un arreglo vacío

  return (
    <main className={styles.mainSection}>
      <FormEntries formAction={formAction} />
      <div className={styles.tableContainer}>
        <TableRecords data={state.data} />
      </div>
      <PaginationButtons
        limit={state.limit}
        offset={state.offset}
        formAction={formAction}
      />
    </main>
  );
}
