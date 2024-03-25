import React from "react";

function Temperature() {
    return (
        <div className="today forecast">
            <div className="forecast-header">
                <div className="day">Monday</div>
                <div className="date">6 Oct</div>
            </div>
            <div className="forecast-content">
                <div className="location"></div>
                <div className="degree">
                    <div className="num">30<sup>o</sup>C</div>
                    <div className="forecast-icon">
                        <img src="./img/icons/icon-1.svg" alt="" width="90" />
                    </div>
                </div>
                <span><img src="./img/icon-umberella.png" alt="" />4%</span>
                <span><img src="./img/icon-wind.png" alt="" />20 km/h</span>
                <span><img src="./img/icon-compass.png" alt="" />East</span>
            </div>
        </div>
    )
}

export default Temperature;