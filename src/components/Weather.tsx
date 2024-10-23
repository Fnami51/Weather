import React from "react";
import { getCardinalDirection } from "../hooks/getCardinalDirection";
import { getCountryName } from "../hooks/getContryName";
import { WeatherResponce } from "../types/weather";
import NextDay from "./NextDay";

interface WeatherProps{
    weather: WeatherResponce;
}

function Weather({weather}: WeatherProps) {

  return (
    <div className="weather section">
      <div className="weather-items">
        <div className="weather-textbox">
          <h1>{weather.data[0].weather.description}</h1>
          <h3>{`📍${weather.city_name}, ${getCountryName(weather.country_code)}`}</h3>
          <h1>{weather.data[0].temp}°C</h1>
          <h4>Feels like {weather.data[0].app_min_temp}°C - {weather.data[0].app_max_temp}°C</h4>
        </div>
        <div className="weather-image">
          <img src={`/icon/${weather.data[0].weather.icon}.png`} width={150} height={150}/>
        </div>
      </div>
      <div className="weather-items">
        <div className="weather-textbox textbox">
          <h2>Wind</h2>
          <h1>{weather.data[0].wind_spd} m/s</h1>
          <h4>Gusts of wind {weather.data[0].wind_gust_spd} m/s</h4>
          <h3>{weather.data[0].wind_dir}° {getCardinalDirection(weather.data[0].wind_dir)}</h3>
        </div>
        <div className="weather-parameters">
          <h3 className="textbox textbox_small"><b>Press:</b> {weather.data[0].pres} mm Hg</h3>
          <h3 className="textbox textbox_small"><b>Clouds:</b> {weather.data[0].clouds}%</h3>
          <h3 className="textbox textbox_small"><b>Humidity:</b> {weather.data[0].rh} %</h3>
          <h3 className="textbox textbox_small"><b>UV index:</b> {weather.data[0].uv}</h3>
        </div>
      </div>
      <div className="days">
        <NextDay weather={weather.data[1]} />
        <NextDay weather={weather.data[2]} />
        <NextDay weather={weather.data[3]} />
        <NextDay weather={weather.data[4]} />
        <NextDay weather={weather.data[5]} />
      </div>
    </div>
  );
}

export default Weather;