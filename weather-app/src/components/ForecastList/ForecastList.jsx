import styles from "./ForecastList.module.css";
import ForecastCard from "../ForecastCard/ForecastCard";
import { useState } from "react";
export default function ForecastList({ weatherData }) {
  const [forecastView, setForecastView] = useState("Week");
  const [tempView, setTempView] = useState("C");

  if (!weatherData) {
    return <div>Loading...</div>;
  } else {
    const forecast = weatherData.time.map((time, index) => ({
      time: weatherData.time[index],
      temperature_2m: Math.trunc(weatherData.temperature_2m[index]),
      relative_humidity_2m: Math.trunc(weatherData.relative_humidity_2m[index]),
      wind_speed_10m: Math.trunc(weatherData.wind_speed_10m[index]),
    }));
    return (
      <section className={styles.forecast}>
        <div className={styles.header}>
          <div className={styles.timeToggleWrapper}>
            <button
              onClick={() => setForecastView("Today")}
              className={`${styles.time} ${
                forecastView == "Today" && styles.active
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setForecastView("Week")}
              className={`${styles.time} ${
                forecastView == "Week" && styles.active
              }`}
            >
              Week
            </button>
          </div>
          <div className={styles.tempToggleWrapper}>
            <button
              onClick={() => setTempView("C")}
              className={`${styles.temp} ${tempView == "C" && styles.active}`}
            >
              °C
            </button>
            <button
              onClick={() => setTempView("F")}
              className={`${styles.temp} ${tempView == "F" && styles.active}`}
            >
              °F
            </button>
          </div>
        </div>
        <ul className={styles.list}>
          {forecast.map((forecast, index) => {
            return (
              <ForecastCard
                key={index}
                data={forecast}
                tempView={tempView}
              ></ForecastCard>
            );
          })}
        </ul>
      </section>
    );
  }
}
