import styles from "./SearchSection.module.css";
import searchSrc from "../../assets/icons/search.svg";
import { useEffect, useState } from "react";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const date = new Date();
const month = monthNames[date.getMonth()];
const day = date.getDate();
const year = date.getFullYear();
//open geocoding api
//http://api.openweathermap.org/geo/1.0/direct?q=Лондон&limit=5&appid=2e9adf378dd75b978b86aec199c3501e
export default function SearchSection({ onSendCity }) {
  const [city, setCity] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim() === "") {
        setCity([]);
        return;
      }
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=5&appid=2e9adf378dd75b978b86aec199c3501e`
      )
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setCity(data);
          } else {
            setCity([]);
          }
        })
        .catch(() => setCity([]));
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <section className={styles.searchSection}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Weather Forecast</h1>
        <div className={styles.date}>{`${month} ${day} ${year}`}</div>
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.controlGroup}>
          <input
            className={styles.inputSearch}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="City"
          />
          <img className={styles.imgSearch} src={searchSrc} alt="" />
        </div>

        {searchQuery.trim() != "" && (
          <ul className={styles.inputGuess}>
            {city.map((city, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    setSearchQuery("");
                    onSendCity(city);
                  }}
                >
                  {city.name} {`(${city.state})`}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
