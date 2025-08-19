import styles from "./ForecastCard.module.css";
import cloudRain from "../../assets/icons/cloud-rain.svg";
import humidity from "../../assets/icons/droplet-purple.svg";
import thermometer from "../../assets/icons/thermometer.svg";
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export default function ForecastCard({ data }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.time}>
        {dayNames[data.time.getDay()] + " " + data.time.getDate()}
      </h3>
      <div className={styles.weather}>Raining</div>
      <img src={cloudRain} className={styles.icon}></img>
      <div className={styles.tempWrapper}>
        <img src={thermometer} alt="" />
        <div className={styles.temp}>{data.temperature_2m}°</div>
      </div>
      <div className={styles.humidityWrapper}>
        <img src={humidity} className={styles.humidityIcon} alt="" />
        <div className={styles.humidity}>{data.relative_humidity_2m}°</div>
      </div>
    </article>
  );
}
