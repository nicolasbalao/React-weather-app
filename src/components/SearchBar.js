import { useState } from "react";
import "../style/SearchBar.css";
import iconSearch from "../assets/magnifying-glass.png";

function SearchBar({ cityName, updateCityName }) {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function checkValue(_inputValue) {
    if (_inputValue.length !== 0) {
      updateCityName(_inputValue);
    }
  }

  // onClick={() => (inputValue.length !== 0 && updateCityName(inputValue))}

  return (
    <div className="searchBar">
      <input
        placeholder={cityName}
        onChange={handleInput}
        value={inputValue}
        onKeyPress={(e) => e.key === "Enter" && checkValue(inputValue)}
      ></input>
      <button type="submit" onClick={() => checkValue(inputValue)}>
        <img src={iconSearch}></img>
      </button>
    </div>
  );
}

export default SearchBar;
