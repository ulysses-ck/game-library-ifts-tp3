import { supabase } from "@/supabase";
import { notFound } from "next/navigation";

import { genres, platforms, publishers, years } from "@/data";

export default async function EditPage({ params }) {
  const { data, error } = await supabase
    .from("games")
    .select()
    .eq("Rank", params.game);

  if (error) {
    return notFound();
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 to-blue-200 p-4">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Editar juego</h1>
        <form>
          <label className="block mb-2 text-gray-700" htmlFor="nombre">
            Nombre del juego
          </label>
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            type="text"
            id="nombre"
            name="nombre"
            defaultValue={data[0].Name}
            placeholder="Ingrese nombre del juego"
          />

          <label className="block mb-2 text-gray-700" htmlFor="plataforma">
            Plataforma
          </label>
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            id="plataforma"
            name="plataforma"
            defaultValue={data[0].Platform}
          >
            {platforms.map((platform) => (
              <option key={platform} defaultValue={platform}>
                {platform}
              </option>
            ))}
          </select>

          <label className="block mb-2 text-gray-700" htmlFor="año">
            Año
          </label>
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            id="año"
            name="año"
            defaultValue={data[0].Year}
          >
            {years.map((year) => (
              <option key={year} defaultValue={year}>
                {year}
              </option>
            ))}
          </select>

          <label className="block mb-2 text-gray-700" htmlFor="genero">
            Género
          </label>
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            id="genero"
            name="genero"
            defaultValue={data[0].Genre}
          >
            {genres.map((genre) => (
              <option key={genre} defaultValue={genre}>
                {genre}
              </option>
            ))}
          </select>

          <label className="block mb-2 text-gray-700" htmlFor="desarrollador">
            Desarrollador
          </label>
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            id="desarrollador"
            name="desarrollador"
            defaultValue={data[0].Publisher}
          >
            {publishers.map((publisher) => (
              <option key={publisher} defaultValue={publisher}>
                {publisher}
              </option>
            ))}
          </select>

          <label className="block mb-2 text-gray-700" htmlFor="ventas">
            Ventas en Norteamérica
          </label>
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            type="number"
            id="ventas"
            name="ventas"
            placeholder="Ingrese el total de ventas"
            defaultValue={data[0].NA_Sales}
          />

          <label className="block mb-2 text-gray-700" htmlFor="ventas">
            Ventas en Europa
          </label>
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            type="number"
            id="ventas"
            name="ventas"
            placeholder="Ingrese el total de ventas"
            defaultValue={data[0].EU_Sales}
          />

          <label className="block mb-2 text-gray-700" htmlFor="ventas">
            Ventas en Japón
          </label>
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            type="number"
            id="ventas"
            name="ventas"
            placeholder="Ingrese el total de ventas"
            defaultValue={data[0].JP_Sales}
          />

          <label className="block mb-2 text-gray-700" htmlFor="ventas">
            Otras ventas
          </label>
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            type="number"
            id="ventas"
            name="ventas"
            placeholder="Ingrese el total de ventas"
            defaultValue={data[0].Other_Sales}
          />

          <button
            className="w-full p-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            type="submit"
          >
            Actualizar juego
          </button>
        </form>
      </div>
    </main>
  );
}
