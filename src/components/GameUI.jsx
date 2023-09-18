/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import GameInfo from "./GameInfo";
import Game from "./Game";
import Loading from "./Loading";
import axios from "../utils/axiosInstance";

function GameUI({ configureQuiz, name }) {
  const [questions, setQuestions] = useState([]);
  const [showGameInfo, setShowGameInfo] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { category, difficulty } = configureQuiz;
  const cat = category.replace(" ", "_");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `?categories=${cat}&difficulty=${difficulty}`
        );
        setQuestions(res.data);
        setIsLoading(false);
      } catch (error) {
        alert(error.message);
        setIsLoading(false);
      }
    };
    fetchQuestions();
  }, [cat, difficulty]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : showGameInfo ? (
        <GameInfo
          setShowGameInfo={setShowGameInfo}
          configureQuiz={configureQuiz}
          name={name}
        />
      ) : (
        <Game
          questions={questions}
          category={category}
          difficulty={difficulty}
          name={name}
        />
      )}
    </>
  );
}

export default GameUI;
