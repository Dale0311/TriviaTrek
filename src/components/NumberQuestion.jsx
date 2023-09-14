/* eslint-disable react/prop-types */
function NumberQuestion({ index }) {
  return (
    <li>
      <a href="#" className="py-3 px-4 rounded-full bg-indigo-500 text-white">
        {index}
      </a>
    </li>
  );
}

export default NumberQuestion;
