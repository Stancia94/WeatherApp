import styles from "./WeatherCardMain.module.css";
import moon from "../../assets/icons/moon.svg";
import wind from "../../assets/icons/wind.svg";
import humidity from "../../assets/icons/droplet.svg";
import { fetchWeatherApi } from "openmeteo";

const params = {
  latitude: 48.7,
  longitude: 44.51330334,
  hourly: "temperature_2m",
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

const hourly = response.hourly();

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {
  hourly: {
    time: [
      ...Array(
        (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval()
      ),
    ].map(
      (_, i) =>
        new Date(
          (Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) *
            1000
        )
    ),
    temperature_2m: hourly.variables(0).valuesArray(),
  },
};

// 'weatherData' now contains a simple structure with arrays with datetime and weather data
console.log("\nHourly data", weatherData.hourly);

export default function WeatherCardMain() {
  return (
    <div className={styles.card}>
      <div className={styles.leftWrappper}>
        <h2 className={styles.title}>New York</h2>
        <div className={styles.country}>United States</div>
        <div className={styles.temp}>28°</div>
      </div>
      <div className={styles.rightWrapper}>
        <img src={moon} className={styles.currentWeatherLogo}></img>
        <div className={styles.windWrapper}>
          <img src={wind} className={styles.windLogo} alt="" />
          <div className={styles.windText}>17km/h</div>
        </div>
        <div className={styles.humidityWrapper}>
          <img src={humidity} className={styles.humidityLogo} alt="" />
          <div className={styles.humidityText}>67°</div>
        </div>
      </div>
    </div>
  );
}
