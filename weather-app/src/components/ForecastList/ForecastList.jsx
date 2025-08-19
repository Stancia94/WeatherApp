import styles from "./ForecastList.module.css";
import ForecastCard from "../ForecastCard/ForecastCard";
export default function ForecastList({ weatherData }) {
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
      <section>
        <div className={styles.header}>
          <div className={styles.timeToggle}>
            <button>Today</button>
            <button>Week</button>
          </div>
          <div className={styles.tempToggle}>
            <button className={`${styles.active} ${styles.temp}`}>°C</button>
            <button className={`${styles.temp}`}>°F</button>
          </div>
        </div>
        <ul className={styles.list}>
          {forecast.map((forecast, index) => {
            return <ForecastCard key={index} data={forecast}></ForecastCard>;
          })}
        </ul>
      </section>
    );
  }
}
