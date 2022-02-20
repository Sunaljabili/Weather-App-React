import React, { useState } from "react";
import "./App.css";

function App() {
  const apiKey = "1d9caae64f6efcec1d37416658fd71cf";
  const [weatherData, setWeatherData] = useState("");
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
      )
        .then(response => response.json())
        .then(data => {
          setWeatherData(data);
          setCity("");
        });
    }
  };
  return (
    <div className="container">
      <input
        className="input"
        placeholder="Enter ..."
        onChange={e =>setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />
      {typeof weatherData.main === "undefined" ? (
        <div>
          <p>Welcome to Weather app !Enter in a city to get weather of.</p>
        </div>
      ) : (
        <div>
          <p>{weatherData.name}</p>
          <p>{Math.round(weatherData.main.temp)}F</p>
          <p>{weatherData.weather[0].main}</p>
        </div>
      )}
      {weatherData.cod==="404" ?(
          <p>City is not found</p>
      ):(
        <>
        
        </>
      )
      }
    </div>
  );
}

export default App;

