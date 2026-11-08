import { useState } from "react";
import "./App.css";
import Card from "./components/Card"

const cardValues = [
  "🐟",
  "🍤",
  "🐙",
  "🐬",
  "🐳",
  "🦭",
  "🐠",
  "🪼",
  "🐟",
  "🍤",
  "🐙",
  "🐬",
  "🐳",
  "🦭",
  "🐠",
  "🪼",
];

function App() {
  const [cards, setCards] = useState(cardValues);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);

  //locked is only for the card that has already been flipped
  const [isLocked, setIsLocked] = useState(false);

  return (
    <div className="app">
      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
