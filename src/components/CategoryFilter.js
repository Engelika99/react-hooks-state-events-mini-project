import React from "react";

function CategoryFilter({ categories, selectedCategory, handleSelectedCategory }) {
  const categoryBtns = categories.map((category) => (
    <button
      key={category}
      onClick={() => handleSelectedCategory(category)}
      className={category === selectedCategory ? "selected" : null}
    >
      {category}
    </button>
  ));
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryBtns}
    </div>
  );
}

export default CategoryFilter;
