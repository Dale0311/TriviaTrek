import { useState } from "react";

import Welcome from "./components/Welcome";
import ConfigureQuiz from "./components/ConfigureQuiz";
import GameUi from "./components/GameUI";

function App() {
  // States
  const [showModal, setShowModal] = useState(true);
  const [name, setName] = useState("");
  const [configureQuiz, setConfigureQuiz] = useState({
    category: "",
    difficulty: "easy",
  });
  const [isConfigureQuiz, setIsConfigureQuiz] = useState(true);
  function confQuiz(bool) {
    setIsConfigureQuiz(bool);
  }
  return (
    <div className="container mx-auto h-screen">
      {/* Welcome component */}
      <Welcome
        name={name}
        setName={setName}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-400 lg:w-1/2 mx-auto h-full">
        {isConfigureQuiz ? (
          <ConfigureQuiz
            name={name}
            configureQuiz={configureQuiz}
            setConfigureQuiz={setConfigureQuiz}
            setIsConfigureQuiz={setIsConfigureQuiz}
          />
        ) : (
          <GameUi
            configureQuiz={configureQuiz}
            name={name}
            confQuiz={confQuiz}
          />
        )}
      </div>
    </div>
  );
}

export default App;
