import React, { useState } from "react";
import Icon1 from "../../img/icons/icon-1.svg";
import IconUmbrella from "../../img/icon-umberella.png";
import IconWind from "../../img/icon-wind.png";
import IconCompass from "../../img/icon-compass.png";

function Temperature({ weatherData }) {
    const WindDirection = (wind) => {
        switch (true) {
            case 0 :
            case 360:
                return "North";
            break;
            case 90 :
                return "East";
            break;
            case 180 :
                return "South";
            break;
            case 270 :
                return "West";
            break;
            case (wind>0 && wind<90) :
                return "North East";
            break;
            case (wind>90 && wind<180) :
                return "South East";
            break;
            case (wind>180 && wind<270) :
                return "South West";
            break;
            case (wind>270 && wind<360) :
                return "North West";
            break;
            default:
                return "-";
                break;
        }
    }
    const DayMonth = (dt) => {
        let getDate = new Date(dt * 1000).getDate();
        let getMonth = new Date(dt * 1000).toLocaleString('default', {month: 'long'});
        let dm = getDate + " " + getMonth;
        return dm;
    }
    return (
        <div className="today forecast">
            <div className="forecast-header">
                <div className="day">{weatherData.todayDate}</div>
                <div className="date">{DayMonth(weatherData.dt)}</div>
            </div>
            <div className="forecast-content">
                <div className="location">{weatherData.name}</div>
                <div className="degree">
                    <div className="num">{weatherData.temp_celcius}<sup>o</sup>C</div>
                    <div className="forecast-icon">
                        <img src={Icon1} alt="" width="90" />
                    </div>
                </div>
                <span><img src={IconUmbrella} /> 4%</span>
                <span><img src={IconWind} /> {weatherData.wind.speed_km} km/h</span>
                <span><img src={IconCompass} />{WindDirection(weatherData.wind.deg)}</span>
            </div>
        </div>
    )
}

export default Temperature;