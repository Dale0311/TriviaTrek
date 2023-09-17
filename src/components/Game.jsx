/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import Question from "./Question";
import possibleAnswers from "../utils/possibleAnswers";
import GameHeader from "./GameHeader";
let i = 0;
function Game({ category, difficulty, questions }) {
  const allQuestions = useRef([]);
  const nextQuestion = (i) => {
    const nextQ = {
      ...questions[i],
      choices: possibleAnswers(questions[i]),
      userAnswer: null,
    };
    return nextQ;
  };
  const [currentQuestion, setCurrentQuestion] = useState(nextQuestion(i));
  useEffect(() => {
    console.log(allQuestions.current);
    console.log(i);
  });
  return (
    <div className="h-full flex flex-col">
      <GameHeader category={category} difficulty={difficulty} />
      <div className="flex-1 bg-white rounded-t-3xl">
        <Question
          currentQuestion={currentQuestion}
          index={i + 1}
          setCurrentQuestion={setCurrentQuestion}
        />
        <div className="my-8">
          {allQuestions.current.length < questions.length - 1 ? (
            <button
              className="rounded disabled:cursor-not-allowed relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white"
              onClick={() => {
                // if 9 is equal 9 pasok
                allQuestions.current.push(currentQuestion);
                setCurrentQuestion(nextQuestion(i));
                i++;
              }}
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
              <span className="relative">Next</span>
            </button>
          ) : (
            <button className="rounded disabled:cursor-not-allowed relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
              <span className="relative">See Result</span>
            </button>
          )}
        </div>
      </div>
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
