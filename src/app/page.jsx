export default async function Home() {
  const data = await fetch("http://localhost:3000/api/all");
  const games = await data.json();

  return (
    <main>
      <h1>Game Library</h1>

      <ul>
        {games.map((game) => (
          <li key={game.Rank}>
            <h2>{game.Name}</h2>
            <p>
              <strong>Rank:</strong> {game.Rank}
            </p>
            <p>
              <strong>Platform:</strong> {game.Platform}
            </p>
            <p>
              <strong>Year:</strong> {game.Year}
            </p>
            <p>
              <strong>Genre:</strong> {game.Genre}
            </p>
            <p>
              <strong>Publisher:</strong> {game.Publisher}
            </p>
            <p>
              <strong>Global Sales:</strong> {game.Global_Sales}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
