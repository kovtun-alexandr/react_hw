import PlayerForm from "./PlayerForm";

function Player({ id, name, checkNumber, answers, isActive }) {
    return (
        <>
            <h3 className="player__name">{name}</h3>
            <PlayerForm
                playerId={id}
                checkNumber={checkNumber}
                answers={answers}
                isActive={isActive}
            />
        </>
    );
}

export default Player;