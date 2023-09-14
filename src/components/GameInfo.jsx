/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faArrowPointer,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
function GameInfo({ configureQuiz }) {
  return (
    <div className="text-white space-y-5 h-full flex flex-col">
      {/* head */}
      <div className="p-4">
        <p className="text-lg font-semibold">
          Category: {configureQuiz.category}
        </p>
        <p className="text-sm">Difficulty: {configureQuiz.difficulty}</p>
      </div>
      {/* body */}
      <div className="flex flex-col justify-between space-y-2 text-gray-700 bg-white h-full rounded-t-3xl p-4">
        <p className="bg-gradient-to-r from-indigo-500 to-indigo-400 w-16 rounded h-1 self-center"></p>
        <div className=" font-normal">
          Welcome to the captivating world of Trivia Trek, where knowledge meets
          excitement! Allow us to guide you through the immersive experience
          that awaits you in this quiz adventure.
        </div>
        <p className="font-semibold">Brief explanation about this quiz</p>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="p-4 rounded-full text-white bg-gray-700 flex items-center justify-center">
              <FontAwesomeIcon icon={faList} className="text-xl" />
            </div>
            <div>
              <p className="font-semibold">10 Questions per Category</p>
              <p className="text-sm text-gray-500">
                Set of random question base on category and difficulty
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-4 rounded-full text-white bg-gray-700 flex items-center justify-center">
              <FontAwesomeIcon icon={faCheck} className="text-xl" />
            </div>
            <div>
              <p className="font-semibold">Multiple Choice</p>
              <p className="text-sm text-gray-500">Choose the correct answer</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-4 px-5 rounded-full text-white bg-gray-700 flex items-center justify-center">
              <FontAwesomeIcon icon={faArrowPointer} className="text-xl" />
            </div>
            <div>
              <p className="font-semibold">Click or Tap the answer </p>
              <p className="text-sm text-gray-500">
                You can skip to the next or previous question
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <p>Future update may contain:</p>
          <ul className="space-y-2 p-4 text-gray-500">
            <li className="list-disc">Lifelines and Hints</li>
            <li className="list-disc">Game Modes</li>
            <li className="list-disc">
              Leaderboard&#40; When i learn react-router-dom and auth &#41;
            </li>
          </ul>
        </div>
        <div className="space-y-12">
          <p>
            Prepare to test your wits, expand your knowledge, and have a blast
            as you tackle the trivia challenges that await you. Let&apos;s get
            started, your trivia adventure begins now!
          </p>
          <div>
            <button className="relative w-full inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-500 rounded-xl shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-500 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-indigo-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Start Quiz
              </span>
              <span className="relative invisible">Start Quiz</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameInfo;
