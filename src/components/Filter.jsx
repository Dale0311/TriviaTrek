/* eslint-disable react/prop-types */
function Filter({ setConfigureQuiz }) {
  return (
    <div className="flex flex-col items-center py-4 space-y-2">
      <p className="bg-gradient-to-r from-indigo-500 to-indigo-400 w-16 rounded h-1"></p>
      <ul className="flex space-x-4 text-lg">
        <li className="">
          <label
            htmlFor="Difficulty"
            className="text-sm font-medium text-gray-900 flex"
          >
            <p className="flex-1 flex items-center justify-end px-2">
              Difficulty
            </p>
            <select
              name="Difficulty"
              id="Difficulty"
              className="mt-1.5 rounded-lg border-gray-300 text-gray-700 sm:text-sm flex-1"
              onChange={(e) => {
                setConfigureQuiz((configQuiz) => {
                  return { ...configQuiz, difficulty: e.target.value };
                });
              }}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
