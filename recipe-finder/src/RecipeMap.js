import React from "react"

const RecipeMap = ({ title, image, ingredientLines, prep, mealType, url}) => {
  return (
    <div>
      <div className="inner">
        <h1>{title}</h1>
        <img src={image} alt="" />
        <br />
        <p>
          <a href={url} target="_blank">
            Open Recipe
          </a>
        </p>
      </div>
    </div>
  );
};

export default RecipeMap

