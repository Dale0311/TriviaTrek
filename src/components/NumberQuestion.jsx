/* eslint-disable react/prop-types */
function NumberQuestion({ index, active, setCurrentQuestion, question }) {
  return (
    <li>
      <a
        href="#"
        className={`py-3 px-4 rounded-full ${
          active ? "bg-indigo-500" : " bg-gray-500 hover:bg-indigo-500"
        } text-white`}
        onClick={() => {
          setCurrentQuestion(question)
        }}
      >
        {index}
      </a>
    </li>
  );
}

export default NumberQuestion;
