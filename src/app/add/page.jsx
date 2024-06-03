import { notFound } from "next/navigation";

import { supabase } from "../../supabase";

export default async function AddPage() {
  const { data, error } = await supabase
  .from("games")
  .select("Rank, Platform, Year, Genre, Publisher")

  if (error) {
    return notFound();
  }

  const platforms = [...new Set(data.map(game => game.Platform))];
  const years = [...new Set(data.map(game => game.Year))];
  const genres = [...new Set(data.map(game => game.Genre))];
  const publishers = [...new Set(data.map(game => game.Publisher))];

  platforms.sort();
  years.sort();
  genres.sort();
  publishers.sort();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 to-blue-200 p-4">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Agregar juego</h1>
        <form>
          <label className="block mb-2 text-gray-700" htmlFor="nombre">Nombre del juego</label>
          <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="text" id="nombre" name="nombre" placeholder="Ingrese nombre del juego" />

          <label className="block mb-2 text-gray-700" htmlFor="plataforma">Plataforma</label>
          <select className="w-full p-2 mb-4 border border-gray-300 rounded" id="plataforma" name="plataforma">
            {platforms.map(platform => (
              <option key={platform} value={platform}>{platform}</option>
            ))}
          </select>

          <label className="block mb-2 text-gray-700" htmlFor="año">Año</label>
          <select className="w-full p-2 mb-4 border border-gray-300 rounded" id="año" name="año">
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <label className="block mb-2 text-gray-700" htmlFor="genero">Género</label>
          <select className="w-full p-2 mb-4 border border-gray-300 rounded" id="genero" name="genero">
            {genres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>

          <label className="block mb-2 text-gray-700" htmlFor="desarrollador">Desarrollador</label>
          <select className="w-full p-2 mb-4 border border-gray-300 rounded" id="desarrollador" name="desarrollador">
            {publishers.map(publisher => (
              <option key={publisher} value={publisher}>{publisher}</option>
            ))}
          </select>

          <label className="block mb-2 text-gray-700" htmlFor="ventas">Ventas</label>
          <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="number" id="ventas" name="ventas" placeholder="Ingrese el total de ventas" />

          <button className="w-full p-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50" type="submit">Agregar juego</button>
        </form>
      </div>
    </div>
  );
}
