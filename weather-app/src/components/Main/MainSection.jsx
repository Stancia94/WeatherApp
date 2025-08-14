import SearchSection from "../SearchSection/SearchSection";
import WeatherCardMain from "../WeatherCardMain/WeatherCardMain";
import ForecastList from "../ForecastList/ForecastList";
import { useState } from "react";

export default function Main() {
  const [city, setCity] = useState({});
  function handleCity(data) {
    setCity(data);
  }
  return (
    <main>
      <div className="container">
        <SearchSection onSendCity={handleCity}></SearchSection>
        <WeatherCardMain city={city}></WeatherCardMain>
        <ForecastList></ForecastList>
      </div>
    </main>
  );
}
