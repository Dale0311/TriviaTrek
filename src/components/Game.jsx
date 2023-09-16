/* eslint-disable react/prop-types */
import possibleAnswer from "../utils/possibleAnswers";
import NumberQuestion from "./NumberQuestion";
import Question from "./Question";
import { useState, useEffect } from "react";

function Game({ configureQuiz, questions, setQuestions }) {
  // set the current user
  const q = questions.find((q, i) => i === 0);
  const [currentQuestion, setCurrentQuestion] = useState(q);

  const choices =
    currentQuestion.existingChoices > 0
      ? currentQuestion.existingChoices
      : possibleAnswer(currentQuestion);

  useEffect(() => {
    console.log(currentQuestion);
  });
  return (
    <div className="h-full flex flex-col">
      <div className="p-4">
        <p className="text-lg text-white font-semibold">
          Category: {configureQuiz.category}
        </p>
      </div>
      <div className="flex-1 bg-white rounded-t-3xl">
        <ul className="flex justify-evenly my-8">
          {questions.map((question, index) => {
            return (
              <NumberQuestion
                key={question.id}
                setCurrentQuestion={setCurrentQuestion}
                active={question.id === currentQuestion.id}
                index={index + 1}
                question={question}
                setQuestions={setQuestions}
                choices={choices}
              />
            );
          })}
        </ul>
        {/* display current question */}
        <div>
          <Question currentQuestion={currentQuestion} choices={choices} />
        </div>
      </div>
    </div>
  );
}

export default Game;
