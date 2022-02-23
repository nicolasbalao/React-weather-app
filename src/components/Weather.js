import "../style/Weather.css";
import cloudy from "../assets/partly-cloudy.png";
import rainy from "../assets/rainy.png";
import sunny from "../assets/sun.png";
import snowy from "../assets/snowy.png";
import storm from "../assets/storm.png";
import WeatherDayCard from "./WeatherDayCard";

function Weather({ weatherData, cityName }) {
  const date = new Date();
  const hours = formatTime(date.getHours());
  const minutes = formatTime(date.getMinutes());

  function formatTime(time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  }


  function getIconWeather(idWether) {
    if (idWether === 800) {
      return sunny;
    } else if (idWether >= 800) {
      return cloudy;
    } else if (idWether >= 600) {
      return snowy;
    } else if (idWether >= 500) {
      return rainy;
    } else if (idWether >= 200) {
      return storm;
    }
  }

  return (
    <div className="weather">
      <div className="weather__current">
        <div className="weather__current_placeDateHours">
          <div className="weather__current_placeDateHours__placeDate">
            <h2>{cityName}</h2>
            <p>{date.toDateString()}</p>
          </div>
          <div className="weather__current_placeDateHours_hours">
            {hours + ":" + minutes}
          </div>
        </div>
        <div className="weather__current_display">
          <button>TODAY</button>
          <div className="weather__current_display_weather">
            <div className="weather__current_display_group">
              <img
                src={getIconWeather(weatherData.current.weather[0].id)}
                alt="weather icon"
              />
              <span>{Math.floor(weatherData.current.temp - 273)}°C</span>
            </div>
            <span>{weatherData.current.weather[0].main}</span>
          </div>
        </div>
      </div>
      {/* Apres */}
      <div className="weather__weekly">
        {weatherData.daily.map(
          (forecast, index) =>
            index !== 0 && (
              <WeatherDayCard
                day={date.getDay() - 1 + index}
                minTemp={forecast.temp.min}
                maxTemp={forecast.temp.max}
                weatherForecast={forecast.weather[0].main}
                iconWeather={getIconWeather(forecast.weather[0].id)}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Weather;
