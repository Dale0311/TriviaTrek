function Filter() {
  return (
    <div className="flex flex-col items-center py-4 space-y-2">
      <p className="bg-gradient-to-r from-indigo-500 to-indigo-400 w-16 rounded h-1"></p>
      <ul className="flex space-x-4 text-lg">
        <li className="">
          <label
            htmlFor="GameMode"
            className="text-sm font-medium text-gray-900 flex"
          >
            <p className="flex-1 flex items-center justify-end px-2">
              Game Mode
            </p>
            <select
              name="GameMode"
              id="GameMode"
              className="mt-1.5 rounded-lg border-gray-300 text-gray-700 sm:text-sm flex-1"
            >
              <option value="">Select Game Mode</option>
              <option value="JM">Standard</option>
              <option value="SRV">Time&apos;s Up Quiz</option>
            </select>
          </label>
        </li>
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
            >
              <option value="">Difficulty Level</option>
              <option value="JM">Standard</option>
              <option value="SRV">Time&apos;s Up Quiz</option>
            </select>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
