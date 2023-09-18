/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

function Result({ playerAns, name, questions }) {
  let praise;
  const correctAnswer = playerAns.filter(
    (q) => q.correctAnswer === q.userAnswer.choice
  );
  if (correctAnswer < 4) {
    praise = "so bad";
  } else if (correctAnswer >= 4 && correctAnswer < 7) {
    praise = "average";
  } else if (correctAnswer >= 7 && correctAnswer <= 9) {
    praise = "good";
  } else if (correctAnswer === 10) {
    praise = "perfect";
  }
  useEffect(() => {
    console.log(questions);
    console.log(playerAns);
  });
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-t-3xl text-gray-800">
      <p>You got</p>
      <p className="text-3xl font-semibold">{`${correctAnswer.length} / ${playerAns.length}`}</p>
      <p>{`You're ${praise}, ${name}`}</p>
      <div className="my-8">
        <button className="rounded disabled:cursor-not-allowed relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white">
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <span className="relative">Go to settings</span>
        </button>
        <button className="rounded disabled:cursor-not-allowed relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white">
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <span className="relative">Play Again</span>
        </button>
        <button className="rounded disabled:cursor-not-allowed relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white">
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <span className="relative">Check Result</span>
        </button>
      </div>
    </div>
  );
}

export default Result;
