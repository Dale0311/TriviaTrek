import { useState } from "react";

import Welcome from "./components/Welcome";
import ConfigureQuiz from "./components/ConfigureQuiz";
import Game from "./components/Game";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  return (
    <div className="container mx-auto">
      {/* Welcome component */}
      <Welcome
        name={name}
        setName={setName}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-400 md:w-1/2 mx-auto">
        <ConfigureQuiz name={name} />
        <Game />
      </div>
    </div>
  );
}

export default App;
