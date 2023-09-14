/* eslint-disable react/prop-types */
import NumberQuestion from "./NumberQuestion";
import { useState } from "react";

function Game({ configureQuiz, questions }) {
  const q = questions.find((q, i) => i === 0);
  const [currentId, setCurrentId] = useState(q.id);
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
                id={question.id}
                setCurrentId={setCurrentId}
                active={question.id === currentId}
                index={index + 1}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Game;
