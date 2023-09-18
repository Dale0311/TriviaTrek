/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
function Question({
  currentQuestion,
  index,
  setCurrentQuestion,
  showResult,
  result,
  playerAns,
  setShowResult,
}) {
  const backButtonRef = useRef(null);
  if (showResult) {
    const res = playerAns.map((q, index) => {
      return (
        <div key={index} className="space-y-4">
          <p>
            {index + 1}. {q.question.text}
          </p>
          <ul className="space-y-4">
            {q.choices.map((choice, index) => {
              return (
                <li key={index} className="flex space-x-4 items-center">
                  {q.userAnswer?.choice === choice.choice ? (
                    <>
                      <span className="py-2 px-4 bg-indigo-500 text-white rounded-full">
                        {choice.letter}
                      </span>
                      <p className="text-indigo-500">{choice.choice}</p>
                    </>
                  ) : choice.choice === q.correctAnswer ? (
                    <>
                      <span className="py-2 px-4 bg-green-400 text-white rounded-full">
                        {choice.letter}
                      </span>
                      <p className="text-green-400">{choice.choice}</p>
                    </>
                  ) : (
                    <>
                      <span className="py-2 px-4 bg-gray-400 text-white rounded-full">
                        {choice.letter}
                      </span>
                      <p>{choice.choice}</p>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
    return (
      <div className="h-full rounded-t-3xl bg-white space-y-4 mt-10 p-8 md:p-4 relative">
        <div className="flex flex-col space-y-2 md:flex-row justify-between">
          <button
            ref={backButtonRef}
            className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md flex-auto"
            onClick={() => {
              setShowResult(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
              />
            </svg>
            Go back
          </button>
          <div className="flex flex-col">
            <div className="flex justify-between items-center space-x-2">
              <p>Your answer: </p>
              <FontAwesomeIcon icon={faSquare} className="text-indigo-500" />
            </div>
            <div className="flex justify-between items-center space-x-2">
              <p>Correct answer: </p>
              <span className="flex space-x-1 items-center">
                <FontAwesomeIcon icon={faSquare} className="text-green-500" />
                <p>/</p>
                <FontAwesomeIcon icon={faSquare} className="text-indigo-500" />
              </span>
            </div>
          </div>
        </div>
        {res}
        <div className="flex justify-end py-5">
          <FontAwesomeIcon
            icon={faArrowCircleUp}
            className="bg-white text-blue-500 rounded-full text-5xl cursor-pointer "
            onClick={() => {
              backButtonRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "start",
              });
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className=" space-y-4 mt-10 p-4">
      <p>
        {index + 1}. {currentQuestion.question.text}
      </p>
      <ul className="space-y-4">
        {currentQuestion.choices.map((choice, index) => {
          return (
            <li
              key={index}
              className="flex space-x-4 items-center cursor-pointer group"
              onClick={() => {
                setCurrentQuestion((oldVal) => {
                  return { ...oldVal, userAnswer: choice };
                });
              }}
            >
              {currentQuestion.userAnswer?.choice === choice.choice ? (
                <>
                  <span className="py-2 px-4 bg-indigo-500 text-white rounded-full">
                    {choice.letter}
                  </span>
                  <p className="text-indigo-500">{choice.choice}</p>
                </>
              ) : (
                <>
                  <span className="py-2 px-4 bg-gray-400 text-white rounded-full group-hover:bg-indigo-500">
                    {choice.letter}
                  </span>
                  <p className="group-hover:text-indigo-500">{choice.choice}</p>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Question;
