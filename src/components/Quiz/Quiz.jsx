import React, { useState } from "react";
import FlashCard from "./FlashCard";

const Quiz = (props) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const increementIndex = () => {
    setQuestionIndex((prev) => (prev += 1));
  };

  const currentQuestion = props.questions[questionIndex];

  if (!currentQuestion) {
    return <p className="quiz-over-text"> Quiz over !</p>;
  }

  return (
    <FlashCard
      question={currentQuestion.question}
      answer={currentQuestion.answer}
      increementIdx={increementIndex}
    />
  );
};

export default Quiz;
