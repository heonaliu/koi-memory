import title from "../assets/title.png";

export default function Header({ score, moves, onReset }) {
  return (
    <div className="header">
      <img src={title} alt="Koi Memory Game" />
      <div className="stats">
        <span>Score: {score}</span>
        <span>Moves: {moves}</span>
      </div>
      <button className="reset" onClick={onReset}>New Game</button>
    </div>
  );
}
