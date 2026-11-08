export default function Card(props) {
  const { card } = props;
  return <div className="card">{card.value}</div>;
}
