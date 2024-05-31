// export async function getData(query: string) {
//   const databaseUrl = import.meta.env.PUBLIC_DATABASE_URL;
//   const res = await fetch(`${databaseUrl}/api/games`);
//   const data = await res.json();
//   const games = data["hydra:member"];
//   const filteredDate = games.filter((game: { name: string }) => {
//     return game.name.toLowerCase().includes(query.toLowerCase());
//   });
//   const orderedData = filteredDate.sort(
//     (a: { name: string }, b: { name: any }) => a.name.localeCompare(b.name)
//   );
//   return orderedData;
// }

export async function getGames() {
  const databaseUrl = import.meta.env.PUBLIC_DATABASE_URL;
  let gamesData: any[] = [];
  let page = 1;
  const fetchPage = async (page: number) => {
    const url = `${databaseUrl}/api/games?page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    const games = data["hydra:member"];
    gamesData = gamesData.concat(games);

    const currentPage = `/api/games?page=${page}`;
    const nextPage = data["hydra:view"]?.["hydra:next"];
    if (nextPage && nextPage !== currentPage) {
      fetchPage(page + 1);
    } else {
      return gamesData;
    }
  };
  await fetchPage(page);
  return gamesData;
}