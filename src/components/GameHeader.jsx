/* eslint-disable react/prop-types */
function GameHeader({ category, difficulty }) {
  return (
    <div className="p-4 text-white">
      <p className="text-lg font-semibold">Category: {category}</p>
      <p className="text-sm">Difficulty: {difficulty}</p>
    </div>
  );
}

export default GameHeader;
