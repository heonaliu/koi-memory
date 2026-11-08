export default function Winning({ restart }) {

    return (
        <div className="winning">
            <span>Game Complete!</span>
            <button onClick={() => restart()}>Restart</button>
        </div>
    );
}