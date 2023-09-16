import possibleAnswers from "../utils/possibleAnswers";
/* eslint-disable react/prop-types */
function Question({ currentQuestion }) {
  const choices = possibleAnswers(currentQuestion);

  return (
    <div className=" space-y-4 mt-10 p-4">
      <p>Question: {currentQuestion.question.text}</p>
      <ul className="space-y-4">
        {choices.map((choice, index) => {
          return (
            <li key={index} className="flex space-x-4 items-center cursor-pointer">
              <span className="py-2 px-4 bg-gray-400 text-white rounded-full">
                {choice.letter}
              </span>
              <p>{choice.choice}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Question;
