export default function Card(props) {
  const { card, handleCardClick } = props;
  return (
    <div className="card" onClick={() => handleCardClick(card)}>
      <div className="card-front">{card.value}</div>
      <div className="card-back">?</div>
    </div>
  );
}
