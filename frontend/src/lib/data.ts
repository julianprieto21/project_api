export async function getData(query: string) {
  const res = await fetch("http://127.0.0.1:8000/api/games");
  const data = await res.json();
  const games = data["hydra:member"];
  const filteredDate = games.filter((game: { name: string }) => {
    return game.name.toLowerCase().includes(query.toLowerCase());
  });
  const orderedData = filteredDate.sort(
    (a: { name: string }, b: { name: any }) => a.name.localeCompare(b.name)
  );
  return orderedData;
}
