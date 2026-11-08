export default function Card(props) {
  const { card, handleCardClick } = props;
  return (
    <div
      className={`card ${card.isFlipped ? "flipped" : ""} ${card.isMatched ? "matched" : ""}`}
      onClick={() => handleCardClick(card)}
    >
      <div className="card-back">?</div>
      <div className="card-front">{card.value}</div>
    </div>
  );
}
