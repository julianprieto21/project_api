import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { getData } from "../lib/data";
import { Game } from "./Game";
import { useAppStore } from "../store/appStore";

export default function App() {
  const [data, setData] = useState<any[]>([]);
  const [search, setSearch] = useState<string>(() => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get("q") ?? "";
  });
  const { isLogin, user } = useAppStore((state) => state);

  const handleChange = useDebouncedCallback((value: string) => {
    setSearch(value);
  }, 300);

  useEffect(() => {
    const pathname = search === "" ? window.location.pathname : `?q=${search}`;
    window.history.pushState({}, "", pathname);
  }, [search]);

  useEffect(() => {
    getData(search).then((res) => setData(res));
  }, [search]);

  return (
    <main className="w-[1280px] h-screen my-0 mx-auto p-8 text-center">
      <section className="overflow-hidden inset-0 fixed h-fit z-10 bg-background pt-4">
        <h1 className="text-white text-6xl pt-10">Games API</h1>
        <h2>
          {isLogin
            ? `Bienvenido ${user}`
            : `Bienvenido, por favor inicie sesion`}
        </h2>
        <input
          type="text"
          placeholder="Buscar un juego..."
          className="w-[80%] xl:w-[50%] h-14 rounded-md bg-neutral-700 my-8 px-3 focus:outline-none"
          onChange={(e) => handleChange(e.target.value)}
        />
      </section>
      <section className="grid place-content-center overflow-y-auto mt-44 md:mt-48 pb-10">
        {data.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </section>
    </main>
  );
}
