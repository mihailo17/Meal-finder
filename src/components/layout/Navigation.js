import React from "react";
import PropTypes from "prop-types";
import MealItem from "../meals/MealItem";

const Navigation = ({ title }) => {
  return (
    <nav className="navbar">
      <span className="material-icons">fastfood</span>
      <h1>{title}</h1>
      <ul className="main-menu">
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

Navigation.defaultProps = { title: "Meal finder" };
MealItem.propTypes = {
  meal: PropTypes.object.isRequired
};
export default Navigation;
