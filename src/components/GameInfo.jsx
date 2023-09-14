/* eslint-disable react/prop-types */
function GameInfo({ configureQuiz }) {
  return (
    <div className="text-white space-y-2">
      <div className="p-4">
        <p className="text-lg font-semibold">
          Category: {configureQuiz.category}
        </p>
        <p className="text-sm">Difficulty: {configureQuiz.difficulty}</p>
      </div>
      <div className="flex flex-col py-4 space-y-2 text-gray-700 bg-white rounded-t-3xl p-4">
        <p className="bg-gradient-to-r from-indigo-500 to-indigo-400 w-16 rounded h-1 self-center"></p>
        <div className="font-medium">
          <p>Brief explanation about this quiz</p>
        </div>
      </div>
    </div>
  );
}

export default GameInfo;
