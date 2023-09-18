/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Question from "./Question";
function Result({ playerAns, name }) {
  const [ShowResult, setShowResult] = useState(false);
  useEffect(() => {
    console.log(playerAns);
  });
  // correct Answer
  const result = playerAns.filter(
    (q) => q.correctAnswer === q.userAnswer.choice
  );
  function createPraise(correctAnswer) {
    let praise = "";
    if (correctAnswer.length < 4) {
      praise = "so bad";
    } else if (correctAnswer.length >= 4 && correctAnswer.length < 7) {
      praise = "average";
    } else if (correctAnswer.length >= 7 && correctAnswer.length <= 9) {
      praise = "good";
    } else {
      praise = "perfect";
    }
    return praise;
  }
  const praise = createPraise(result);
  if (ShowResult) {
    return <Question showResult={true} result={result} playerAns={playerAns} setShowResult={setShowResult} />;
  }
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-t-3xl text-gray-800">
      <p className="text-3xl font-semibold">{`${result.length} / ${playerAns.length}`}</p>
      <p>{`You're ${praise}, ${name ? name : "player"}`}</p>
      <div className="my-8">
        <button className="rounded disabled:cursor-not-allowed relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white">
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <span className="relative">Go to settings</span>
        </button>
        <button className="rounded disabled:cursor-not-allowed relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white">
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <span className="relative">Play Again</span>
        </button>
        <button
          className="rounded disabled:cursor-not-allowed relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white"
          onClick={() => setShowResult(true)}
        >
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <span className="relative">Check Result</span>
        </button>
      </div>
    </div>
  );
}

export default Result;
