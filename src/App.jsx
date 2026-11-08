import { useState } from "react";
import "./App.css";

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
      <div>
        {cards.map((card) => (
          <div>{card}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
