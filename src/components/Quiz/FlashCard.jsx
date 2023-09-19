import React, { useEffect, useState } from "react";
import "./Quiz.css";

const FlashCard = ({ question, answer, increementIdx }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => setShowAnswer(false), [question]);
  return (
    <>
      <div
        className="flashcard-container"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {!showAnswer && question}
        {showAnswer && answer}
      </div>
      {showAnswer && (
        <button className="flashcard-button" onClick={increementIdx}>
          Next Question
        </button>
      )}
    </>
  );
};

export default FlashCard;
