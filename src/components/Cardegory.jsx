/* eslint-disable react/prop-types */
function Card({ title, imgUrl, description }) {
  return (
    <article className="flex items-center bg-white transition hover:shadow-xl w-4/5 mx-auto p-2">
      <img alt="Guitar" src={imgUrl} className="w-24 h-full" />
      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <a href="#">
            <h3 className="font-bold uppercase text-gray-900">{title}</h3>
            <p className="text-xs text-gray-700">{description}</p>
          </a>
        </div>
      </div>
    </article>
  );
}

export default Card;
