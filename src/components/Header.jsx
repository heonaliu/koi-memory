export default function Header({ score, moves, onReset }) {
  return (
    <div className="header">
      <h1>Koi Memory Game</h1>
      <div className="stats">
        <span>Score: {score}</span>
        <span>Moves: {moves}</span>
      </div>
      <button className="reset" onClick={onReset}>New Game</button>
    </div>
  );
}
