import React, { Component } from "react";

class Search extends Component {
  state = {
    text: ""
  };
  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchMeals(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div className="search">
        <h2 className="search--heading">Search for meals</h2>
        <form onSubmit={this.onSubmit} className="search-form">
          <input
            type="text"
            name="text"
            value={this.state.text}
            placeholder="search meals"
            onChange={this.onChange}
            className="search-form--input"
          />
          <br />
          <button
            type="submit"
            value="search"
            className="button button--submit"
          >
            Search
          </button>
          <button className="button button--random" disabled="disabled">
            Random
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
