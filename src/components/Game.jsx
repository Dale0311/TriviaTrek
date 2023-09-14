/* eslint-disable react/prop-types */
import NumberQuestion from "./NumberQuestion";

function Game({ configureQuiz, questions }) {
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
            return <NumberQuestion key={question.id} index={index + 1} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Game;
