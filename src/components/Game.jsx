/* eslint-disable react/prop-types */
import NumberQuestion from "./NumberQuestion";
import Question from "./Question";
import { useState } from "react";

function Game({ configureQuiz, questions }) {
  // set questions with additional userAnswer
  const questionsWithUserAnswer = questions.map((question) => {
    return { ...question, userAnswer: "" };
  });
  // set the current user
  const q = questionsWithUserAnswer.find((q, i) => i === 0);
  const [currentQuestion, setCurrentQuestion] = useState(q);

  return (
    <div className="h-full flex flex-col">
      <div className="p-4">
        <p className="text-lg text-white font-semibold">
          Category: {configureQuiz.category}
        </p>
      </div>
      <div className="flex-1 bg-white rounded-t-3xl">
        <ul className="flex justify-evenly my-8">
          {questionsWithUserAnswer.map((question, index) => {
            return (
              <NumberQuestion
                key={question.id}
                setCurrentQuestion={setCurrentQuestion}
                active={question.id === currentQuestion.id}
                index={index + 1}
                question={question}
              />
            );
          })}
        </ul>
        {/* display current question */}
        <div>
          <Question currentQuestion={currentQuestion}/>
        </div>
      </div>
    </div>
  );
}

export default Game;
