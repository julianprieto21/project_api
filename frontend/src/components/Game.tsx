
export const Game = ({game}: {game: any}) => {

    return (
        <div className="mt-10">
            <picture>
                <img className="rounded-lg" src={game.img} alt="Juego"/>
            </picture>
            <h2 className="w-full text-left text-4xl font-semibold pt-1">{game.name}</h2>
            <h3 className="w-full text-left text-xl font-base text-neutral-600">{game.developers}</h3>
        </div>
    )
}