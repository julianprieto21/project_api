import { useEffect, useState } from "react";
import type { GameData } from "../lib/types";

export default function Price({ game }: { game: GameData }) {
  const [epicPrice, setEpicPrice] = useState<number>(0);
  const [steamPrice, setSteamPrice] = useState<number>(0);
  const [xboxPrice, setXboxPrice] = useState<number>(0);
  useEffect(() => {
    const fetchPrice = async () => {
      const steamRes = await fetch(
        `http://localhost:4321/api/fetch-steam-price?game=${game.storeIds[1]}`
      );
      const steamData = await steamRes.json();
      setSteamPrice(steamData.price);

      const epicRes = await fetch(
        `http://localhost:4321/api/fetch-epic-price?game=${game.name}`
      );
      const epicData = await epicRes.json();
      setEpicPrice(epicData.price);
    };
    fetchPrice();
  }, []);
  return (
    <div className="mt-8 w-full gap-4 text-neutral-200 flex flex-col items-center px-4">
      <p className="text-xl font-black text-steamLight bg-steam py-2 w-full sm:w-[500px] text-center rounded-md flex flex-row justify-between px-4">
        Steam Store:{" "}
        {steamPrice ? (
          <span className="font-light">{steamPrice / 100}$</span>
        ) : (
          <span className="font-normal text-red-500">
            No se encuentra disponible
          </span>
        )}
      </p>
      <p className="text-xl font-black text-epicLight bg-epic py-2 w-full sm:w-[500px] text-center rounded-md flex flex-row justify-between px-4">
        Epic Store:{" "}
        {epicPrice ? (
          <span className="font-light">{epicPrice / 100}$</span>
        ) : (
          <span className="font-normal text-red-500">
            No se encuentra disponible
          </span>
        )}
      </p>
      <p className="text-xl font-black text-xboxLight bg-xbox py-2 w-full sm:w-[500px] text-center rounded-md flex flex-row justify-between px-4">
        Xbox Price:{" "}
        {xboxPrice ? (
          <span className="font-light">{xboxPrice / 100}$</span>
        ) : (
          <span className="font-normal text-red-500">
            No se encuentra disponible
          </span>
        )}
      </p>
    </div>
  );
}
