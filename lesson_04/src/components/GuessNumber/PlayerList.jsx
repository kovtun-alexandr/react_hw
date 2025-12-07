import Player from "./Player";

function PlayerList({ players, checkNumber, answers, isActive }) {
    return (
        <div className="player__list">
            {!!players ? (
                players.map((player, index) => (
                    <div className="player__item" key={player.id}>
                        <Player
                            {...player}
                            checkNumber={checkNumber}
                            answers={answers}
                            isActive={index === 0 ? isActive : !isActive}
                        />
                    </div>
                ))
            ) : (
                <div>An error occurred.</div>
            )}
        </div>
    );
}

export default PlayerList;