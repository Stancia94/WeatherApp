import styles from "./ForecastList.module.css";
import ForecastCard from "../ForecastCard/ForecastCard";
export default function ForecastList() {
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
      <ul>
        <li className={styles.list}>
          <ForecastCard></ForecastCard>
          <ForecastCard></ForecastCard>
          <ForecastCard></ForecastCard>
          <ForecastCard></ForecastCard>
          <ForecastCard></ForecastCard>
          <ForecastCard></ForecastCard>
          <ForecastCard></ForecastCard>
          <ForecastCard></ForecastCard>
          <ForecastCard></ForecastCard>
          <ForecastCard></ForecastCard>
        </li>
      </ul>
    </section>
  );
}
