export default function Card(props) {
  const { card } = props;
  return (
    <div className="card">
      <div className="card-front">{card.value}</div>
      <div className="card-back">?</div>
    </div>
  );
}
