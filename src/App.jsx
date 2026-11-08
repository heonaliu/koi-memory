import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Winning from "./components/Winning";
import Header from "./components/Header";

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

  const handleCardClick = (card) => {
    if (card.isFlipped || isLocked || card.isMatched) return;

    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, isFlipped: true };
      } else {
        return c;
      }
    });

    setCards(newCards);
    // goes through all the flipped cards and adds the current card to the list
    setFlippedCards([...flippedCards, card.id]);

    // if there is already one card flipped
    if (flippedCards.length === 1) {
      setIsLocked(true);
      const firstCard = cards[flippedCards[0]];

      //if the cards match then set the isMatched to true!
      if (firstCard.value === card.value) {
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);

          setCards((prev) =>
            prev.map((c) =>
              c.id === firstCard.id || c.id === card.id
                ? { ...c, isMatched: true } //set the matched value to be true
                : c,
            ),
          );
          //adjust the score and reset flipped array
          setScore((prev) => prev + 1);
          setFlippedCards([]);
          setIsLocked(false);
        }, 500);
      } else {
        setTimeout(() => {
          const flippedBackCards = newCards.map((c) => {
            if (c.id === firstCard.id || c.id === card.id) {
              return { ...c, isFlipped: false };
            } else {
              return c;
            }
          });
          setCards(flippedBackCards);
          setFlippedCards([]);
          setIsLocked(false);
        }, 1000);
      }
      setMoves((prev) => prev + 1);
    }
  };

  useEffect(() => {
    startGame();
  }, []);

  const isGameComplete = matchedCards.length === cardValues.length;

  return (
    <div className="app">
      <Header score={score} moves={moves} onReset={startGame}/>
      {isGameComplete && <Winning />}
      <div className="cards-grid">
        {cards.map((card) => (
          <Card onClick={handleCardClick} key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
