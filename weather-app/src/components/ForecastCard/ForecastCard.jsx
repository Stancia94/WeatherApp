import styles from "./ForecastCard.module.css";
import humidity from "../../assets/icons/droplet-purple.svg";
import thermometer from "../../assets/icons/thermometer.svg";
import { useEffect, useState } from "react";
import { DAY_NAMES } from "../../utils/constant";
import { motion, AnimatePresence } from "motion/react";
import { WEATHER_CODE } from "../../utils/matchingIconAndWeatherCode";
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
      <img src={WEATHER_CODE[data.weather_code]} className={styles.icon}></img>
      <div className={styles.tempWrapper}>
        <img src={thermometer} alt="" />
        <AnimatePresence mode="wait">
          <motion.div
            key={temperature}
            className={styles.temp}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {temperature} {tempView == "F" ? "F" : "C"}°
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={styles.humidityWrapper}>
        <img src={humidity} className={styles.humidityIcon} alt="" />
        <AnimatePresence mode="wait">
          <motion.div
            key={relative_humidity_2m}
            className={styles.humidity}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {relative_humidity_2m} %
          </motion.div>
        </AnimatePresence>
      </div>
    </article>
  );
}
