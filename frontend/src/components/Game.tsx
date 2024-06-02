export const Game = ({ game }: { game: any }) => {
  return (
    <div className="mt-10 w-[460px]">
      <picture className="relative w-full grid place-content-center">
        <a href={`/${game.id}`}>
          <img
            className="rounded-lg aspect-video md:hover:scale-105 transition"
            src={game.imageUrl}
            alt="Juego"
          />
        </a>
      </picture>
      <h2
        className="w-full text-left text-4xl font-semibold pt-3 truncate"
        title={game.name}
      >
        {game.name}
      </h2>
      <h3
        className="w-full text-left text-xl font-base text-neutral-600 truncate"
        title={game.developers.join(", ")}
      >
        {game.developers.join(", ")}
      </h3>
    </div>
  );
};
