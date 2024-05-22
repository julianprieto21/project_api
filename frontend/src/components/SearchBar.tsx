import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const handleChange = useDebouncedCallback((value: string) => {
    setSearch(value);
  }, 300);

  useEffect(() => {
    const pathname = search === "" ? window.location.pathname : `?q=${search}`;
    window.history.pushState({}, "", pathname);
  }, [search]);

  return (
    <input
      type="text"
      placeholder="Buscar un juego..."
      className="w-full h-14 rounded-md bg-neutral-700 my-8 px-3 focus:outline-none"
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};
