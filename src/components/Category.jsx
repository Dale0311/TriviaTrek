import category from "../utils/category";
import Cardegory from "./Cardegory";
function Category() {
  return (
    <div className="space-y-4 container mx-auto">
      <h1 className="text-xl font-semibold text-gray-700 px-8">Categories:</h1>
      {category.map((cat, index) => {
        return (
          <Cardegory
            key={index}
            title={cat.title}
            description={cat.description}
            imgUrl={cat.imgUrl}
          />
        );
      })}
    </div>
  );
}

export default Category;
