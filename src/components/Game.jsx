/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import Question from "./Question";
import possibleAnswers from "../utils/possibleAnswers";
import GameHeader from "./GameHeader";
import Result from "./Result";
function Game({ category, difficulty, questions, name, confQuiz }) {
  const i = useRef(0);
  const allQuestions = useRef([]);

  const nextQuestion = (i) => {
    const nextQ = {
      ...questions[i],
      choices: possibleAnswers(questions[i]),
      userAnswer: null,
    };
    return nextQ;
  };

  const [currentQuestion, setCurrentQuestion] = useState(
    nextQuestion(i.current)
  );
  const [showResult, setShowResult] = useState(false);
  return (
    <div className="h-full flex flex-col">
      <GameHeader category={category} difficulty={difficulty} name={name} />
      {showResult ? (
        <Result
          playerAns={allQuestions.current}
          name={name}
          confQuiz={confQuiz}
        />
      ) : (
        <div className="flex-1 bg-white rounded-t-3xl">
          <Question
            currentQuestion={currentQuestion}
            userAnswer
            index={i.current}
            setCurrentQuestion={setCurrentQuestion}
          />
          {currentQuestion.userAnswer && (
            <div className="my-3">
              {allQuestions.current.length < questions.length - 1 ? (
                <button
                  className="rounded disabled:cursor-not-allowed relative inline-flex group items-center justify-center px-3.5 py-2 mx-4 md:m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white"
                  onClick={() => {
                    allQuestions.current.push(currentQuestion);
                    i.current++;
                    setCurrentQuestion(nextQuestion(i.current));
                  }}
                >
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                  <span className="relative">Next</span>
                </button>
              ) : (
                <button
                  className="rounded disabled:cursor-not-allowed relative inline-flex group items-center justify-center px-3.5 py-2 mx-4 md:m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white"
                  onClick={() => {
                    allQuestions.current.push(currentQuestion);
                    setShowResult(true);
                  }}
                >
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                  <span className="relative">See Result</span>
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Game;
// onClick={() => {
//   if (i < questions.length - 1) {
//     i++;
//     allQuestions.current.push(currentQuestion);
//     setCurrentQuestion(nextQuestion(i));
//   }
// }}
