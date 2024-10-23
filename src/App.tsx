import { useState } from "react";
import './App.css';
import Weather from "./components/Weather";
import Error from "./components/Error";
import { WeatherResponce } from "./types/weather";
import { weatherRequest } from "./api/getRequest";
import React from "react";
import { countries } from "./hooks/conrties";
import { getCountryName } from "./hooks/getContryName";

function App() {
  const [resultSearch, setResultSearch] = useState<WeatherResponce | null>(null);
  const [error, setError] = useState<{ error: string; description: string } | null>(null);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  async function handleSearch(event: any) {
    event.preventDefault();
    try {
      setError(null); 
      const city = event.target.elements.search_location_city.value;
      const country = selectedCountry;

      const data : WeatherResponce = await weatherRequest(city, country.replace("0", ""));
      setResultSearch(data); 
      event.target.elements.search_location_city.value = "";
      setSelectedCountry("")
      setSelectedCity(data.city_name)
    } catch (error: unknown) {
      console.error('Ошибка', error);
      setError({
        error: "Sorry, we can't do this due to an error. 😢",
        description: String(error).replace("Error: ", ""),
      });
    }
  }

  return (
    <div className="background">
      <div className="box">
        <form className="search section" id="formSearch" onSubmit={handleSearch}>
          <input
            className="search-item search-input"
            type="text"
            name="search_location_city"
            id="search_location_city"
            placeholder={selectedCity? selectedCity: "City (necessarily)"}
            required
          />
          <select
            className={`search-item search-select ${!selectedCountry ? 'select-value-null' : ''} ${resultSearch ? 'select-value_default_with-contry' : ''}`}
            name="search_location_country"
            id="search_location_country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="" disabled selected className="select-value_default">
              {resultSearch? getCountryName(resultSearch.country_code) : "Select country"}
            </option>
            <option value="0" className="select-value_none">
              Don't know country
            </option>
            <option value="" disabled>
            ———————————————
            </option>
            {Object.entries(countries).map(([code, country]) => (
              <option key={code} value={code} className="select-value">
                {country} 
              </option>
            ))}
          </select>
          <button className="search-item search-button" id="formEnter" type="submit">
            Search
          </button>
        </form>

        {error ? (
          <Error error={error.error} description={error.description} />
        ) : null}

        {resultSearch ? (
          <Weather weather={resultSearch} />
        ) : (
          !error ? <Error error={'Please enter city'} /> : null
        )}
      </div>
    </div>
  );
}

export default App;
