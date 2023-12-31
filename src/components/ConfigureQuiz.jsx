/* eslint-disable react/prop-types */
import Filter from "./Filter";
import Category from "./Category";
import StartQuiz from "./StartQuiz";
function ConfigureQuiz({ name, configureQuiz, setConfigureQuiz, setIsConfigureQuiz}) {
  return (
    <div className="space-y-4">
      <div className="text-white p-4">
        <p className="text-sm">Hello, {name ? name : "Player"}</p>
        <p className="md:text-2xl font-semibold">
          Let&apos;s Test your knowledge
        </p>
      </div>
      <div className="w-full bg-white rounded-t-3xl">
        <div className="container mx-auto space-y-4">
          <Filter setConfigureQuiz={setConfigureQuiz} />
          <Category
            configureQuiz={configureQuiz}
            setConfigureQuiz={setConfigureQuiz}
          />
          <StartQuiz configureQuiz={configureQuiz} setIsConfigureQuiz={setIsConfigureQuiz} />
        </div>
      </div>
    </div>
  );
}

export default ConfigureQuiz;
