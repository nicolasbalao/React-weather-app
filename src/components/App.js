import { useEffect, useState } from "react";
import "../style/App.css";
import SearchBar from "./SearchBar";
import Weather from "./Weather";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, updateCityName] = useState("Pau");

  //CALL API WEATHER
  const fetchApiWeather = async () => {
    const cityData = await fetchApiGeocoding();
    const resp = await fetch(
      // "https://api.openweathermap.org/data/2.5/weather?q=pau&appid=2ce26d6ff6b3519b4858bc5796133eac"
      `https://api.openweathermap.org/data/2.5/onecall?lat=${cityData.lat}&lon=${cityData.lon}&exclude=minutely,hourly,alerts&appid=2ce26d6ff6b3519b4858bc5796133eac`
    );

    const data = await resp.json();

    setWeatherData(data);
  };

  //TODO: ADD functionality SEARCH LOCATION CITY WITH THE API GEOCODING
  const fetchApiGeocoding = async () => {
    const resp = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=2ce26d6ff6b3519b4858bc5796133eac`
    );

    const data = await resp.json();

    return data[0];
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchApiWeather();
  }, [cityName]);

  return (
    <>
      <SearchBar cityName={cityName} updateCityName={updateCityName} />
      {weatherData && <Weather weatherData={weatherData} cityName={cityName} />}
    </>
  );
}

export default App;
