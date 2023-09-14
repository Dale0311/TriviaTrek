/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import GameInfo from "./GameInfo";
import Game from "./Game";
import axios from "../utils/axiosInstance";

function GameUI({ configureQuiz }) {
  const [questions, setQuestions] = useState([]);
  const [showGameInfo, setShowGameInfo] = useState(true);
  const { category, difficulty } = configureQuiz;
  const cat = category.replace(" ", "_");
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get(
          `?categories=${cat}&difficulty=${difficulty}`
        );
        setQuestions(res.data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchQuestions();
  }, [cat, difficulty]);
  return (
    <>
      {showGameInfo ? (
        <GameInfo
          setShowGameInfo={setShowGameInfo}
          configureQuiz={configureQuiz}
        />
      ) : (
        <Game questions={questions} configureQuiz={configureQuiz} />
      )}
    </>
  );
}

export default GameUI;
