import styles from "./WeatherCardMain.module.css";
import moon from "../../assets/icons/moon.svg";
import wind from "../../assets/icons/wind.svg";
import humidity from "../../assets/icons/droplet.svg";

export default function WeatherCardMain({ city, weatherData }) {
  return (
    <div className={styles.card}>
      <div className={styles.leftWrappper}>
        <h2 className={styles.title}>{city.name ? city.name : "Volgograd"}</h2>
        <div className={styles.country}>
          {city.state ? city.state : "Russia"}
        </div>
        <div className={styles.temp}>{weatherData.temperature_2m}°C</div>
      </div>
      <div className={styles.rightWrapper}>
        <img src={moon} className={styles.currentWeatherLogo}></img>
        <div className={styles.windWrapper}>
          <img src={wind} className={styles.windLogo} alt="" />
          <div className={styles.windText}>
            {weatherData.wind_speed_10m} km/h
          </div>
        </div>
        <div className={styles.humidityWrapper}>
          <img src={humidity} className={styles.humidityLogo} alt="" />
          <div className={styles.humidityText}>
            {weatherData.relative_humidity_2m}%
          </div>
        </div>
      </div>
    </div>
  );
}
