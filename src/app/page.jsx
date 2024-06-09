import { notFound } from "next/navigation";

import { supabase } from "../supabase";

import styles from "./page.module.css";
import TableRecords from "@/components/TableRecords";

export default async function Home() {
  const { data, error } = await supabase
    .from("games")
    .select(
      "Rank, Platform, Name, Year, Genre, Publisher, NA_Sales, EU_Sales, JP_Sales, Other_Sales"
    )
    .limit(10)
    .order("Rank", { ascending: false });

  if (error) {
    return notFound();
  }
  return (
    <main className={styles.mainSection}>
      <div className={styles.tableContainer}>
        <TableRecords data={data} />
      </div>
    </main>
  );
}
