import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const shuffleArray = (array: string[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const cardImages = [
  '🍎', '🍌', '🍓', '🍍', '🍒', '🍇', '🍊', '🍉', // Fruits
  '🍎', '🍌', '🍒', '🍓', '🍉', '🍇', '🍊', '🍍', // Duplicates
];

export const MemoryGame = ({ onWin }: { onWin: () => void }) => {
  const [cards, setCards] = useState<string[]>([]); // Array of strings
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]); // Array of numbers
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  // Shuffle and initialize cards on component mount
  useEffect(() => {
    const shuffledCards = shuffleArray(cardImages);
    setCards(shuffledCards);
  }, []);

  const flipCard = (index: number) => {
    if (flippedIndices.length === 2 || flippedIndices.includes(index) || matchedCards.includes(index)) return;

    setFlippedIndices((prev) => [...prev, index]);

    if (flippedIndices.length === 1) {
      setMoves(moves + 1);
      const [firstIndex] = flippedIndices;
      if (cards[firstIndex] === cards[index]) {
        setMatchedCards((prev) => [...prev, firstIndex, index]);
      }

      // Delay resetting flipped cards if they don't match
      setTimeout(() => {
        setFlippedIndices([]);
      }, 1000);
    }
  };

  // Check if the game is won
  useEffect(() => {
    if (matchedCards.length === cards.length) {
      onWin(); // Trigger win callback
    }
  }, [matchedCards, cards.length, onWin]);

  return (
    <div className="memory-game">
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            onClick={() => flipCard(index)}
            className="relative w-20 h-20 bg-gray-200 rounded-lg cursor-pointer"
            layout
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {flippedIndices.includes(index) || matchedCards.includes(index) ? (
              <div className="flex justify-center items-center w-full h-full bg-white text-3xl">
                {card}
              </div>
            ) : (
              <div className="flex justify-center items-center w-full h-full bg-blue-500 text-white text-lg font-bold">
                ?
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center text-lg">
        <span>Moves: {moves}</span>
        {matchedCards.length === cards.length && (
          <motion.button
        onClick={() => {
          setCards(shuffleArray(cardImages));
          setFlippedIndices([]);
          setMatchedCards([]);
          setMoves(0);
        }}
        className="px-4 py-2 bg-green-500 text-white rounded-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
          >
        Play Again
          </motion.button>
        )}
      </div>
    </div>
  );
};
