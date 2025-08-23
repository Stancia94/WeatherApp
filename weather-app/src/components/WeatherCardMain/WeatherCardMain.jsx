import styles from "./WeatherCardMain.module.css";
import wind from "../../assets/icons-weather-code/wind.svg";
import humidity from "../../assets/icons/droplet.svg";
import { AnimatePresence, motion } from "motion/react";

import dayBg from "../../assets/images/sunshine.avif";
import nightBg from "../../assets/images/night.avif";
import { useEffect } from "react";

import { IS_DAY, WEATHER_CODE } from "../../utils/matchingIconAndWeatherCode";

export default function WeatherCardMain({ city, weatherData }) {
  const bgImages = [dayBg, nightBg];
  const bgImage = weatherData.is_day ? dayBg : nightBg;
  const weatherLogo = weatherData.is_day ? IS_DAY["day"] : IS_DAY["night"];
  useEffect(() => {
    bgImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  return (
    <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <div className={styles.leftWrappper}>
          <h2 className={styles.title}>
            {city.name ? city.name : "Volgograd"}
          </h2>
          <div className={styles.country}>
            {city.state ? city.state : "Russia"}
          </div>
          <div className={styles.temp}>{weatherData.temperature_2m}°C</div>
        </div>
        <div className={styles.rightWrapper}>
          <AnimatePresence mode="popLayout">
            <motion.img
              key={weatherLogo}
              className={styles.currentWeatherLogo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={weatherLogo}
            />
          </AnimatePresence>
          <div className={styles.windWrapper}>
            <img src={wind} className={styles.logo} alt="" />
            <div className={styles.windText}>
              {weatherData.wind_speed_10m} km/h
            </div>
          </div>
          <div className={styles.humidityWrapper}>
            <img src={humidity} className={styles.logo} alt="" />
            <div className={styles.humidityText}>
              {weatherData.relative_humidity_2m}%
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="sync">
        <motion.div
          key={bgImage}
          className={styles.cardBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      </AnimatePresence>
    </div>
  );
}
