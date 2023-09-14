import { useState } from "react";

import Welcome from "./components/Welcome";
import ConfigureQuiz from "./components/ConfigureQuiz";
import Game from "./components/Game";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [configureQuiz, setConfigureQuiz] = useState({
    category: "",
    difficulty: "easy",
  });
  const [isConfigureQuiz, setIsConfigureQuiz] = useState(true);
  return (
    <div className="container mx-auto">
      {/* Welcome component */}
      <Welcome
        name={name}
        setName={setName}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-400 md:w-1/2 mx-auto ">
        {isConfigureQuiz ? (
          <ConfigureQuiz
            name={name}
            configureQuiz={configureQuiz}
            setConfigureQuiz={setConfigureQuiz}
            setIsConfigureQuiz={setIsConfigureQuiz}
          />
        ) : (
          <Game configureQuiz={configureQuiz} />
        )}
      </div>
    </div>
  );
}

export default App;
