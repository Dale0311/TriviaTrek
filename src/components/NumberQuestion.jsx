/* eslint-disable react/prop-types */
function NumberQuestion({ index, active, setCurrentId, id }) {
  return (
    <li>
      <a
        href="#"
        className={`py-3 px-4 rounded-full ${
          active ? "bg-indigo-500" : " bg-gray-500 hover:bg-indigo-500"
        } text-white`}
        onClick={() => {
          setCurrentId(id);
        }}
      >
        {index}
      </a>
    </li>
  );
}

export default NumberQuestion;
