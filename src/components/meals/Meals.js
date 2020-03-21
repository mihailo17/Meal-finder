import React from "react";
import MealItem from "./MealItem";

const Meals = ({ meals }) => {
  return (
    <div className="meals">
      {meals.map(meal => (
        <MealItem key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default Meals;
