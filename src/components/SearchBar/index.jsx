"use client";
import { useFormState } from "react-dom";

import { searchGame } from "@/app/actions";

export default function SearchBar() {
  const [state, formAction] = useFormState(searchGame, null);

  return (
    <form action={formAction}>
      <label htmlFor="Name">
        <span>Search Bar</span>
        <input type="text" id="Name" name="Name" />
      </label>
      <span>{state?.queryName}</span>
      <button type="submit">Search</button>
    </form>
  );
}
