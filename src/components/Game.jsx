/* eslint-disable react/prop-types */
import { useState } from "react";
import GameInfo from "./GameInfo";

function Game({ configureQuiz }) {
  const [showGameInfo, setShowGameInfo] = useState(true);
  return <GameInfo configureQuiz={configureQuiz} />;
}

export default Game;
