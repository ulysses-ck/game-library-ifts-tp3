import { useActionState } from "react";

import { searchGame } from "@/app/actions";

export default function SearchBar() {
  const [state, formAction] = useActionState(searchGame, null);

  return (
    <form action={formAction}>
      <label htmlFor="Name">
        <input type="text" id="Name" name="Name" />
      </label>

      {state?.Name}
      <button type="submit">Search</button>
    </form>
  );
}
