import { notFound } from "next/navigation";
import { supabase } from "../supabase";

export default async function Home() {
  const { data, error } = await supabase
    .from("games")
    .select("Rank, Platform, Name")
    .limit(10);

  if (error) {
    return notFound();
  }
  return (
    <main>
      <h1>Proyecto Juegos</h1>
      <ul className="[&>*:nth-child(odd)]:bg-[#d5e6ea] [&>*:nth-child(even)]:bg-[#e9d3ea]">
        <li className="grid grid-cols-3 items-center bg-gradient-to-r from-[#F053E0] from-0% to-[#0165FB] to-100%">
          <p className="text-center">ID</p>
          <p className="text-center">Nombre</p>
          <p className="text-center">Plataforma</p>
        </li>
        {data.map((game) => {
          return (
            <li key={game.Rank} className="grid grid-cols-3 items-center">
              <p className="text-center">{game.Rank}</p>
              <p className="text-center">{game.Name}</p>
              <p className="text-center">{game.Platform}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
