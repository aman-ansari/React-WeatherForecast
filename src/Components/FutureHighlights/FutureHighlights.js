import React, { useEffect, useState } from "react";
import { ReactComponent as Icon3 } from "../../img/icons/icon-3.svg";
import { ReactComponent as Icon5 } from "../../img/icons/icon-5.svg";
import { ReactComponent as Icon7 } from "../../img/icons/icon-7.svg";
import { ReactComponent as Icon12 } from "../../img/icons/icon-12.svg";
import { ReactComponent as Icon13 } from "../../img/icons/icon-13.svg";
import { ReactComponent as Icon14 } from "../../img/icons/icon-14.svg";

function FutureHighlights({city}) {
    const [futureWeather, setFutureWeather] = useState(null);
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ead42f082c9a4385f3898099f78285de`;
    useEffect(()=>{
        fetch(API_URL)
        .then((response)=>{
            if (!response.ok) {
                throw new Error("Error");
              }
              return response.json();
        })
        .then((data)=>{
            setFutureWeather(data);
            console.log(data);
        })
        .catch((e)=>{
            console.log(e);
        })
    }, [city])
    return (
        <>
            <div className="forecast">
                <div className="forecast-header">
                    <div className="day">Tuesday</div>
                </div>
                <div className="forecast-content">
                    <div className="forecast-icon">
                        <Icon3 width="48" />
                    </div>
                    <div className="degree">23<sup>o</sup>C</div>
                    <small>18<sup>o</sup></small>
                </div>
            </div>
            <div className="forecast">
                <div className="forecast-header">
                    <div className="day">Wednesday</div>
                </div>
                <div className="forecast-content">
                    <div className="forecast-icon">
                        <Icon5 width="48" />
                    </div>
                    <div className="degree">23<sup>o</sup>C</div>
                    <small>18<sup>o</sup></small>
                </div>
            </div>
            <div className="forecast">
                <div className="forecast-header">
                    <div className="day">Thursday</div>
                </div>
                <div className="forecast-content">
                    <div className="forecast-icon">
                        <Icon7 width="48" />
                    </div>
                    <div className="degree">23<sup>o</sup>C</div>
                    <small>18<sup>o</sup></small>
                </div>
            </div>
            <div className="forecast">
                <div className="forecast-header">
                    <div className="day">Friday</div>
                </div>
                <div className="forecast-content">
                    <div className="forecast-icon">
                        <Icon12 width="48" />
                    </div>
                    <div className="degree">23<sup>o</sup>C</div>
                    <small>18<sup>o</sup></small>
                </div>
            </div>
            <div className="forecast">
                <div className="forecast-header">
                    <div className="day">Saturday</div>
                </div>
                <div className="forecast-content">
                    <div className="forecast-icon">
                        <Icon13 width="48" />
                    </div>
                    <div className="degree">23<sup>o</sup>C</div>
                    <small>18<sup>o</sup></small>
                </div>
            </div>
            <div className="forecast">
                <div className="forecast-header">
                    <div className="day">Sunday</div>
                </div>
                <div className="forecast-content">
                    <div className="forecast-icon">
                        <Icon14 width="48" />
                    </div>
                    <div className="degree">23<sup>o</sup>C</div>
                    <small>18<sup>o</sup></small>
                </div>
            </div>
        </>
    )
}

export default FutureHighlights;