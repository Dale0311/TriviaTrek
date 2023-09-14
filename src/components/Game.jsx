/* eslint-disable react/prop-types */
import { useState } from "react";
import GameInfo from "./GameInfo";

function Game({ configureQuiz }) {
  const [showGameInfo, setShowGameInfo] = useState(true);
  return (
    <div>
      <GameInfo configureQuiz={configureQuiz}/>
    </div>
  );
}

export default Game;
