import "./App.css";
import { Game } from "./components/Game";
import { SearchBar } from "./components/SearchBar";

const DATA = [
  {
      id: 1,
      name: "Fallout 4",
      developers: "Bethesda",
      release_date: '2015-11-10',
      img: "https://cdn.akamai.steamstatic.com/steam/apps/377160/header.jpg?t=1712851055"
  },
  {
    id: 2,
    name: "Baldur's Gate III",
    developers: 'Larian Studios',
    release_date: "2023-08-03",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg?t=1713271288"
  }
]

function App() {
  return (
    <main>
      <h1 className="text-white text-6xl pt-10">Games API</h1>
      <SearchBar />
      <section className="my-8">
      {
        DATA.map((game) => (
          <Game game={game}/>
        ))
      }
      </section>
    </main>
  );
}

export default App;
