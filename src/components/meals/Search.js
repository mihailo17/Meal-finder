import React, { useState } from "react";

const Search = ({ searchMeals, showClear, clearMeals, setAlert }) => {
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something boii", "light");
    } else {
      searchMeals(text);
      setText("");
    }
  };
  return (
    <div className="search">
      <h2 className="search--heading">Search for meals</h2>
      <form onSubmit={onSubmit} className="search-form">
        <input
          type="text"
          name="text"
          value={text}
          placeholder="search meals"
          onChange={onChange}
          className="search-form--input"
        />
        <br />
        <button type="submit" value="search" className="button button--submit">
          Search
        </button>

        <button className="button button--random" disabled="disabled">
          Random
        </button>
      </form>
      {showClear && (
        <button className="button" onClick={clearMeals}>
          clear
        </button>
      )}
    </div>
  );
};

export default Search;
