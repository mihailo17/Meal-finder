import React, { Component } from "react";
export class Meal extends Component {
  componentDidMount() {
    this.props.getMeal(this.props.match.params.mealid);
  }

  render() {
    const {
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb
    } = this.props.meal;
    return (
      <div>
        <h1>{strMeal}</h1>
        <h3>
          {strCategory}, {strArea}
        </h3>
        <p>{strInstructions}</p>
        <img src={strMealThumb} alt={strMeal} />
      </div>
    );
  }
}

export default Meal;
