/* eslint-disable react/prop-types */
function Card({ title, imgUrl, description, configureQuiz, setConfigureQuiz }) {
  return (
    <article
      className={`flex items-center bg-white transition ease-in-out border ${
        configureQuiz.category === title ? "border-blue-500" : ""
      } hover:border-blue-500 rounded w-4/5 mx-auto cursor-pointer`}
      onClick={() => {
        setConfigureQuiz((configureQuiz) => {
          return { ...configureQuiz, category: title };
        });
      }}
    >
      <img alt={title} src={imgUrl} className="w-24 h-full p-2" />
      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <h3 className="font-bold uppercase text-gray-900">{title}</h3>
          <p className="text-xs text-gray-700">{description}</p>
        </div>
        {configureQuiz.category === title ? (
          <div className="sm:flex sm:items-end sm:justify-end">
            <a
              href="#"
              className="block bg-blue-500 rounded-tl-lg px-5 py-3 text-center text-xs font-bold uppercase text-white transition"
            >
              Picked ✓
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default Card;
