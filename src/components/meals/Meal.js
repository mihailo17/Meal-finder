import React, { useEffect } from "react";

const Meal = ({ meal, getMeal, match }) => {
  useEffect(() => {
    getMeal(match.params.mealid);
    // eslint-disable-next-line
  }, []);

  const { strMeal, strCategory, strArea, strInstructions, strMealThumb } = meal;
  return (
    <div>
      <h1>{strMeal}</h1>
      <h3>
        {strCategory}, {strArea}
      </h3>
      <img src={strMealThumb} alt={strMeal} />
      <p>{strInstructions}</p>
    </div>
  );
};

export default Meal;
