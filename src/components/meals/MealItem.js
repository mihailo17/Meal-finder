import React from "react";

// one meal item that comes from search

const MealItem = ({ meal }) => {
  return (
    <div className="meal">
      <h3 className="meal--name">{meal.strMeal}</h3>
      <img className="meal--thumb" src={meal.strMealThumb} alt={meal.strMeal} />
      <p className="meal--instructions">{meal.strInstructions}</p>
    </div>
  );
};

export default MealItem;
