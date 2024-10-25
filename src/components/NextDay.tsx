import React from "react";
import { getDay } from "../hooks/getDay";
import { WeatherData } from "../types/weather";

interface NextDayProps{
    weather: WeatherData;
}

function NextDay({weather}: NextDayProps) {

  return (
    <div className="day-box">
      <img src={`icon/${weather.weather.icon}.png`} className="day-image" width={50} height={50}/>
      <h3 className="day-temp">{weather.temp}°C</h3>
      <h5>{getDay(weather.datetime)}</h5>
      <h5>{weather.datetime}</h5>
    </div>
  );
}

export default NextDay;