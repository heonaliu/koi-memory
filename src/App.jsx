import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

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
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  //locked is only for the card that has already been flipped
  const [isLocked, setIsLocked] = useState(false);

  const shuffleCards = (array) => {
    const shuffledCards = [...array];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [
        shuffledCards[j],
        shuffledCards[i],
      ];
    }
    return shuffledCards;
  };

  const startGame = () => {
    const shuffled = shuffleCards(cardValues);

    const finalCards = shuffled.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));
    setCards(finalCards);
    setMoves(0);
    setScore(0);
    setMatchedCards([]);
    setFlippedCards([]);
    setIsLocked(false);
  };

  useEffect(() => {
    startGame();
  }, []);

  return (
    <div className="app">
      <div className="cards-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
