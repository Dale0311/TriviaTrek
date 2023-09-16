/* eslint-disable react/prop-types */
import possibleAnswer from "../utils/possibleAnswers";
import NumberQuestion from "./NumberQuestion";
import Question from "./Question";
import { useState } from "react";
function Game({ configureQuiz, questions }) {
  // set the current user
  // TODO: maybe instead of clicking number the user can click next and previous button? this will give us a handler
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const currentQuestion = questions[currentQuestionId];
  const choices =
    currentQuestion.existingChoices > 0
      ? currentQuestion.existingChoices
      : possibleAnswer(currentQuestion);

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
                setCurrentQuestionId={setCurrentQuestionId}
                active={index === currentQuestionId}
                index={index}
              />
            );
          })}
        </ul>
        {/* display current question */}
        <div>
          <Question currentQuestion={currentQuestion} choices={choices} />
        </div>
        <div className="flex space-x-5 justify-center my-8">
          <button
            className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white"
            onClick={() => {
              if (currentQuestionId > 0) {
                setCurrentQuestionId((id) => id - 1);
              }
            }}
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative">Previous</span>
          </button>
          <button
            className="rounded disabled:cursor-not-allowed relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white"
            onClick={() => {
              if (currentQuestionId < questions.length - 1) {
                setCurrentQuestionId((id) => id + 1);
              }
            }}
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Game;
