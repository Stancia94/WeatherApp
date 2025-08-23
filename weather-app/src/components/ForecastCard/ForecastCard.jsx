import styles from "./ForecastCard.module.css";
import cloudRain from "../../assets/icons/cloud-rain.svg";
import humidity from "../../assets/icons/droplet-purple.svg";
import thermometer from "../../assets/icons/thermometer.svg";
import { useEffect, useState } from "react";
import { DAY_NAMES } from "../../utils/constant";

export default function ForecastCard({ data, tempView }) {
  const { time, relative_humidity_2m } = data;
  const [temperature, setTemperature] = useState(data.temperature_2m);
  useEffect(() => {
    if (tempView == "F") {
      setTemperature(Math.trunc(data.temperature_2m * (9 / 5) + 32));
    } else {
      setTemperature(data.temperature_2m);
    }
  }, [tempView, data.temperature_2m]);
  return (
    <article className={styles.card}>
      <h3 className={styles.time}>
        {DAY_NAMES[time.getDay()] + " " + time.getDate()}
      </h3>
      <div className={styles.weather}>Raining</div>
      <img src={cloudRain} className={styles.icon}></img>
      <div className={styles.tempWrapper}>
        <img src={thermometer} alt="" />
        <div className={styles.temp}>
          {temperature} {tempView == "F" ? "F" : "C"}°
        </div>
      </div>
      <div className={styles.humidityWrapper}>
        <img src={humidity} className={styles.humidityIcon} alt="" />
        <div className={styles.humidity}>{relative_humidity_2m} %</div>
      </div>
    </article>
  );
}
