const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function seed() {
  feedSteamGamesData();
}

const feedSteamGamesData = async () => {
  try {
    const res = await fetch(
      "https://steamspy.com/api.php?request=top100forever"
    );
    const data = await res.json();
    const gameIds = Object.keys(data);

    for (const id of gameIds) {
      const gameData = await fetchSteamGameData(id);
      if (gameData.genres.includes("Free to Play")) continue;
      postGameData(gameData);
      await sleep(5000);
    }
  } catch (err) {
    console.log(err);
  }
};

const fetchSteamGameData = async (gameId) => {
  const res = await fetch(
    `https://store.steampowered.com/api/appdetails?appids=${gameId}`
  );
  const data = await res.json();
  const game = data[gameId].data;
  const releaseDate = game.release_date.date
    ? new Date(game.release_date.date).toISOString().slice(0, 10)
    : "";
  const gameData = {
    name: game.name,
    developers: game.developers,
    genres: game.genres.map((genre) => genre.description),
    imageUrl: game.header_image,
    releaseDate: releaseDate,
    storeIds: { 1: gameId.toString() },
  };
  return gameData;
};

const postGameData = (data) => {
  // console.log(data);
  const options = {
    method: "POST",
    headers: {
      accept: "application/ld+json",
      "Content-Type": "application/ld+json",
    },
    body: JSON.stringify(data),
  };

  fetch("http://127.0.0.1:8000/api/games", options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => console.log(`${data.name} added!`))
    .catch((error) => console.error(error));
};

seed();
