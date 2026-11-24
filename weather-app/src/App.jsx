import { useState } from "react";
import weatherdata from "./assets/weatherdata.js";
import './App.css'

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const getData = () => { 
    const res = weatherdata.find((item) => 
      item.city.toLowerCase() === city.toLowerCase()
    );
    setWeather(res);
  }
  return (
    <>
      <div>
        <h1>Weather App</h1>
        <div className="container">
        <input type="text" placeholder="enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)} />
        <button onClick={getData}>Search</button>
        {weather ? (
          <div className="weather-card">
            <h2>{weather.city}</h2>
            <p>Temperature: {weather.temperature} &deg;C</p>
            <p>Humidity: {weather.humidity}%</p>
            <p>Condition: {weather.condition}</p>
          </div>
        ) : (
          <p>Enter city and click the button!</p>
          )}
        </div>
      </div>
    </>
  )
}

export default App

