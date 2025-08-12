import styles from "./ForecastCard.module.css";
import cloudRain from "../../assets/icons/cloud-rain.svg";
import humidity from "../../assets/icons/droplet-purple.svg";
import thermometer from "../../assets/icons/thermometer.svg";
export default function ForecastCard() {
  return (
    <article className={styles.card}>
      <h3 className={styles.time}>Saturday 27th 2024, 9:00:00</h3>
      <div className={styles.weather}>Raining</div>
      <img src={cloudRain} className={styles.icon}></img>
      <div className={styles.tempWrapper}>
        <img src={thermometer} alt="" />
        <div className={styles.temp}>32°</div>
      </div>
      <div className={styles.humidityWrapper}>
        <img src={humidity} className={styles.humidityIcon} alt="" />
        <div className={styles.humidity}>67°</div>
      </div>
    </article>
  );
}
