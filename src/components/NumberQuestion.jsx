/* eslint-disable react/prop-types */
function NumberQuestion({ index, active }) {
  return (
    <li>
      <span
        href="#"
        className={`py-3 px-4 rounded-full ${
          active ? "bg-indigo-500" : " bg-gray-500 hover:bg-indigo-500"
        } text-white`}
      >
        {index + 1}
      </span>
    </li>
  );
}

export default NumberQuestion;
