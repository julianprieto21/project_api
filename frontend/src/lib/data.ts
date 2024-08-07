export async function getGames() {
  const apiUrl = import.meta.env.PUBLIC_DATABASE_URL;
  let gamesData: any[] = [];
  let page = 1;
  const fetchPage = async (page: number) => {
    const url = `${apiUrl}/api/gamess?page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    const games = data["hydra:member"];
    gamesData = gamesData.concat(games);

    const currentPage = `/api/gamess?page=${page}`;
    const lastPage = data["hydra:view"]?.["hydra:last"];
    if (lastPage && lastPage !== currentPage) {
      await fetchPage(page + 1);
    } else {
      return gamesData;
    }
  };
  await fetchPage(page);
  return gamesData;
}
