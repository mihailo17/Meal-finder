import React, { Component, Fragment } from "react";
import "./css/App.css";
import Navigation from "./components/layout/Navigation";
import Meals from "./components/meals/Meals";
import Search from "./components/meals/Search";

import axios from "axios";

class App extends Component {
  state = {
    meals: []
  };

  // search for meals by whatever

  searchMeals = async text => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
    );
    this.setState({ meals: res.data.meals });
    console.log(this.state.meals);
  };

  render() {
    return (
      <Fragment>
        <Navigation />

        <main className="App container">
          <Search searchMeals={this.searchMeals} />
          <Meals meals={this.state.meals} />
        </main>
      </Fragment>
    );
  }
}

export default App;
