export const Game = ({ game }: { game: any }) => {
  return (
    <div className="mt-10">
      <picture className="relative">
        <a href={`/games/${game.id}`}>
          <img
            className="rounded-lg aspect-video hover:scale-105 transition"
            src={game.image}
            alt="Juego"
          />
        </a>
      </picture>
      <h2 className="w-full text-left text-4xl font-semibold pt-1">
        {game.name}
      </h2>
      <h3 className="w-full text-left text-xl font-base text-neutral-600">
        {game.developers}
      </h3>
    </div>
  );
};
