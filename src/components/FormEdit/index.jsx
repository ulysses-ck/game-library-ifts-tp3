"use client";

import { editGame } from "@/app/actions";
import { useFormState } from "react-dom";

import { genres, platforms, publishers, years } from "@/data";
import Notification from "../Notification";
export default function FormEdit({ data }) {
  const [state, action] = useFormState(editGame, { data: [], status: null });

  return (
    <>
      {state.status && (
        <Notification action={"Editar"} isSuccess={state.status === 200} />
      )}
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Editar juego</h1>
        <form action={action}>
          <input type="hidden" name="Rank" value={data[0].Rank} />
          <label className="block mb-2 text-gray-700" htmlFor="Name">
            Nombre del juego
          </label>
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            type="text"
            id="Name"
            name="Name"
            defaultValue={data[0].Name}
            placeholder="Ingrese nombre del juego"
          />

          <label className="block mb-2 text-gray-700" htmlFor="plataforma">
            Plataforma
          </label>
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            id="Platform"
            name="Platform"
            defaultValue={data[0].Platform}
          >
            {platforms.map((platform) => (
              <option key={platform} defaultValue={platform}>
                {platform}
              </option>
            ))}
          </select>

          <label className="block mb-2 text-gray-700" htmlFor="Year">
            Año
          </label>
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            id="Year"
            name="Year"
            defaultValue={data[0].Year}
          >
            {years.map((year) => (
              <option key={year} defaultValue={year}>
                {year}
              </option>
            ))}
          </select>

          <label className="block mb-2 text-gray-700" htmlFor="Genre">
            Género
          </label>
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            id="Genre"
            name="Genre"
            defaultValue={data[0].Genre}
          >
            {genres.map((genre) => (
              <option key={genre} defaultValue={genre}>
                {genre}
              </option>
            ))}
          </select>

          <label className="block mb-2 text-gray-700" htmlFor="Publisher">
            Desarrollador
          </label>
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            id="Publisher"
            name="Publisher"
            defaultValue={data[0].Publisher}
          >
            {publishers.map((publisher) => (
              <option key={publisher} defaultValue={publisher}>
                {publisher}
              </option>
            ))}
          </select>

          <label className="block mb-2 text-gray-700" htmlFor="NA_Sales">
            Ventas en Norteamérica (M)
          </label>
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            type="number"
            id="NA_Sales"
            name="NA_Sales"
            placeholder="Ingrese el total en millones"
            defaultValue={data[0].NA_Sales}
          />

          <label className="block mb-2 text-gray-700" htmlFor="EU_Sales">
            Ventas en Europa (M)
          </label>
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            type="number"
            id="EU_Sales"
            name="EU_Sales"
            placeholder="Ingrese el total en millones"
            defaultValue={data[0].EU_Sales}
          />

          <label className="block mb-2 text-gray-700" htmlFor="JP_Sales">
            Ventas en Japón (M)
          </label>
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            type="number"
            id="JP_Sales"
            name="JP_Sales"
            placeholder="Ingrese el total en millones"
            defaultValue={data[0].JP_Sales}
          />

          <label className="block mb-2 text-gray-700" htmlFor="Other_Sales">
            Otras ventas (M)
          </label>
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            type="number"
            id="Other_Sales"
            name="Other_Sales"
            placeholder="Ingrese el total en millones"
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
    </>
  );
}
