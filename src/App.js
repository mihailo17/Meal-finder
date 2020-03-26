import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";
import Navigation from "./components/layout/Navigation";
import Meals from "./components/meals/Meals";
import Search from "./components/meals/Search";
import Alert from "./components/layout/Alert";
import About from "./components/About";
import Meal from "./components/meals/Meal";

import axios from "axios";

class App extends Component {
  state = {
    meals: [],
    meal: {},
    alert: null
  };

  // search for meals by name

  searchMeals = async text => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
    );
    this.setState({ meals: res.data.meals });
  };
  // get a single meal

  getMeal = async id => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    this.setState({ meal: res.data.meals[0] });
  };
  // clear search
  clearMeals = () => this.setState({ meals: [] });

  //alert if nothing typed
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    return (
      <Router>
        <Navigation />
        <Alert alert={this.state.alert} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Fragment>
                <main className="App container">
                  <Search
                    searchMeals={this.searchMeals}
                    clearMeals={this.clearMeals}
                    showClear={this.state.meals.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Meals meals={this.state.meals} />
                </main>
              </Fragment>
            )}
          />
          <Route exact path="/about" component={About} />

          <Route
            exact
            path="/meal/:mealid"
            render={props => (
              <Meal {...props} getMeal={this.getMeal} meal={this.state.meal} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
