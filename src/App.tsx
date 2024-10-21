import { useState } from "react";
import './App.css';
import Weather from "./components/Weather";
import Error from "./components/Error";
import { WeatherResponce } from "./types/weather";
import { weatherRequest } from "./api/getRequest";
import React from "react";

function App() {
  const [resultSearch, setResultSearch] = useState<WeatherResponce | null>(null);
  const [error, setError] = useState<{ error: string; description: string } | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSearch(event: any) {
    event.preventDefault();
    try {
      setError(null); 
      const city = event.target.elements.search_location_city.value;
      const country = event.target.elements.search_location_country.value;

      const data = await weatherRequest(city, country);
      setResultSearch(data); 
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
            placeholder="City (necessarily)"
            required
          />
          <input
            className="search-item search-input"
            type="text"
            name="search_location_country"
            id="search_location_country"
            placeholder="Country"
          />
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
