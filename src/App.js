import React, { useEffect, useState } from "react";
import Search from "./Components/Search/Search";
import Temperature from "./Components/Temperature/Temperature";
import FutureHighlights from "./Components/FutureHighlights/FutureHighlights";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  const [city, setCity] = useState("Delhi");
  const [weatherData, setWeatherData] = useState(null);

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ead42f082c9a4385f3898099f78285de`;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        let sunsetTime = new Date(data.sys.sunset * 1000);
        data.sunset_time = sunsetTime.toLocaleTimeString();

        let sunriseTime = new Date(data.sys.sunrise * 1000);
        data.sunrise_time = sunriseTime.toLocaleTimeString();

        let currentDate = new Date();
        data.isDay = (currentDate.getTime() < sunsetTime.getTime());

        data.temp_celcius = (data.main.temp - 273.15).toFixed(0);
        data.temp_min = (data.main.temp_min - 273.15).toFixed(0);
        data.temp_max = (data.main.temp_max - 273.15).toFixed(0);
        data.temp_feels_like = (data.main.feels_like - 273.15).toFixed(0);
        data.wind.speed_km = (data.wind.speed * 3.6).toFixed(1);
        data.todayDate = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(data.dt * 1000).getDay()];
        
        setWeatherData(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      })
  }, [city])
  return (
    <div className="site-content" style={{ height: "100vh" }}>
      <Search setCity={setCity} />
      <div className="forecast-table">
        <div className="container">
          <div className="forecast-container">
            {
              weatherData != [] && weatherData != null ?<>
                  <Temperature weatherData={weatherData} />
                </>:''
            }
            <FutureHighlights city={city} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
