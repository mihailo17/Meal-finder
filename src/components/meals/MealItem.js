import React from "react";
import { Link } from "react-router-dom";

// one meal item that comes from search

const MealItem = ({ meal }) => {
  return (
    <div className="meal">
      <h3 className="meal--name">{meal.strMeal}</h3>
      <img className="meal--thumb" src={meal.strMealThumb} alt={meal.strMeal} />
      <p className="meal--instructions">{meal.strInstructions}</p>
      <Link to={`/meal/${meal.idMeal}`}>KLIKNI OVDE </Link>
    </div>
  );
};

export default MealItem;
