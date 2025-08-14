import styles from "./WeatherCardMain.module.css";
import moon from "../../assets/icons/moon.svg";
import wind from "../../assets/icons/wind.svg";
import humidity from "../../assets/icons/droplet.svg";
import { useEffect, useState } from "react";
import { fetchWeatherApi } from "openmeteo";

export default function WeatherCardMain({ city }) {
  useEffect(() => {
    (async () => {
      const params = {
        latitude: city.lat,
        longitude: city.lon,
        current: ["temperature_2m", "relative_humidity_2m", "wind_speed_10m"],
      };
      const url = "https://api.open-meteo.com/v1/forecast";
      const responses = await fetchWeatherApi(url, params);

      // Process first location. Add a for-loop for multiple locations or weather models
      const response = responses[0];

      // Attributes for timezone and location
      const latitude = response.latitude();
      const longitude = response.longitude();
      const elevation = response.elevation();
      const utcOffsetSeconds = response.utcOffsetSeconds();

      console.log(
        `\nCoordinates: ${latitude}°N ${longitude}°E`,
        `\nElevation: ${elevation}m asl`,
        `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`
      );

      const current = response.current();

      // Note: The order of weather variables in the URL query and the indices below need to match!
      const weatherData = {
        current: {
          time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
          temperature_2m: Math.trunc(current.variables(0).value()),
          relative_humidity_2m: Math.trunc(current.variables(1).value()),
          wind_speed_10m: Math.trunc(current.variables(2).value()),
        },
      };
      setWeatherData(weatherData);
      // 'weatherData' now contains a simple structure with arrays with datetime and weather data
      console.log(
        `\nCurrent time: ${weatherData.current.time}`,
        `\nCurrent temperature_2m: ${weatherData.current.temperature_2m}`,
        `\nCurrent relative_humidity_2m: ${weatherData.current.relative_humidity_2m}`,
        `\nCurrent wind_speed_10m: ${weatherData.current.wind_speed_10m}`
      );
    })();
    return () => {};
  }, [city]);
  const [weatherData, setWeatherData] = useState({
    current: {
      temperature_2m: 26,
      relative_humidity_2m: 67,
      wind_speed_10m: 17,
    },
  });
  return (
    <div className={styles.card}>
      <div className={styles.leftWrappper}>
        <h2 className={styles.title}>{city.name ? city.name : "New York"}</h2>
        <div className={styles.country}>
          {city.state ? city.state : "United States"}
        </div>
        <div className={styles.temp}>
          {weatherData.current.temperature_2m}°C
        </div>
      </div>
      <div className={styles.rightWrapper}>
        <img src={moon} className={styles.currentWeatherLogo}></img>
        <div className={styles.windWrapper}>
          <img src={wind} className={styles.windLogo} alt="" />
          <div className={styles.windText}>
            {weatherData.current.wind_speed_10m} km/h
          </div>
        </div>
        <div className={styles.humidityWrapper}>
          <img src={humidity} className={styles.humidityLogo} alt="" />
          <div className={styles.humidityText}>
            {weatherData.current.relative_humidity_2m}%
          </div>
        </div>
      </div>
    </div>
  );
}
