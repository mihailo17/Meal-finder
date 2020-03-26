import React from "react";
import PropTypes from "prop-types";
import MealItem from "../meals/MealItem";
import { Link } from "react-router-dom";

const Navigation = ({ title }) => {
  return (
    <nav className="navbar">
      <span className="material-icons">fastfood</span>
      <h1>{title}</h1>
      <ul className="main-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about"> About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navigation.defaultProps = { title: "Meal finder" };
MealItem.propTypes = {
  meal: PropTypes.object.isRequired
};
export default Navigation;
