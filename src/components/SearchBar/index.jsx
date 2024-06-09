"use client";
import { useFormState } from "react-dom";

import { searchGame } from "@/app/actions";
import TableRecords from "../TableRecords";

export default function SearchBar() {
  const [state, formAction] = useFormState(searchGame, null);

  return (
    <>
      <form action={formAction} className="flex flex-col m-10 gap-2">
        <label htmlFor="Name">
          <span className="p-1 font-bold">Search Bar</span>
          <input
            type="text"
            id="Name"
            name="Name"
            className="border border-gray-400 rounded-md p-1"
          />
        </label>
        <button
          className="w-full p-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          type="submit"
        >
          Search
        </button>
      </form>
      {state?.body.data ? <TableRecords data={state.body.data} /> : null}
    </>
  );
}
