import "../style/WeatherDayCard.css";

function WeatherDayCard({ day, maxTemp, minTemp, weatherForecast, iconWeather }) {
  maxTemp = Math.floor(maxTemp - 273);
  minTemp = Math.floor(minTemp - 273);

  const dayWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];


  return (
    <div className="weatherDayCard">
      <button>{day >= 7 ? dayWeek[day - 7] : dayWeek[day]}</button>
      <div className="weatherDayCard__group">
        <img src={iconWeather} alt="weather Icon" />
        <div className="weatherDayCard__group_temp">
          <span>{maxTemp}°</span>
          <span>{minTemp}°</span>
        </div>
      </div>
      <p>{weatherForecast}</p>
    </div>
  );
}

export default WeatherDayCard;
