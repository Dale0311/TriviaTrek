/* eslint-disable react/prop-types */

function Question({ currentQuestion, index, setCurrentQuestion }) {
  return (
    <div className=" space-y-4 mt-10 p-4">
      <p>
        {index}. {currentQuestion.question.text}
      </p>
      <ul className="space-y-4">
        {currentQuestion.choices.map((choice, index) => {
          return (
            <li
              key={index}
              className="flex space-x-4 items-center cursor-pointer"
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
}

export default Question;
