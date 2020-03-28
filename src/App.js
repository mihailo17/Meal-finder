import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";
import Navigation from "./components/layout/Navigation";
import Meals from "./components/meals/Meals";
import Search from "./components/meals/Search";
import Alert from "./components/layout/Alert";
import About from "./components/About";
import Meal from "./components/meals/Meal";
import axios from "axios";

const App = () => {
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState({});
  const [alert, setAlert] = useState(null);

  // search for meals by name

  const searchMeals = async text => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
    );
    setMeals(res.data.meals);
  };
  // get a single meal

  const getMeal = async id => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    setMeal(res.data.meals[0]);
  };
  // clear search
  const clearMeals = () => setMeals([]);

  //alert if nothing typed
  const setAlert1 = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };
  return (
    <Router>
      <Navigation />
      <Alert alert={alert} />
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <Fragment>
              <main className="App container">
                <Search
                  searchMeals={searchMeals}
                  clearMeals={clearMeals}
                  showClear={meals.length > 0 ? true : false}
                  setAlert={setAlert1}
                />
                <Meals meals={meals} />
              </main>
            </Fragment>
          )}
        />
        <Route exact path="/about" component={About} />

        <Route
          exact
          path="/meal/:mealid"
          render={props => <Meal {...props} getMeal={getMeal} meal={meal} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
