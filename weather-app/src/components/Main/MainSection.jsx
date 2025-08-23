import SearchSection from "../SearchSection/SearchSection";
import WeatherCardMain from "../WeatherCardMain/WeatherCardMain";
import ForecastList from "../ForecastList/ForecastList";
import { useEffect, useState } from "react";
import { fetchWeatherApi } from "openmeteo";
export default function Main() {
  const [city, setCity] = useState({});
  const [weatherData, setWeatherData] = useState({
    current: {
      temperature_2m: 26,
      relative_humidity_2m: 67,
      wind_speed_10m: 17,
      weather_code: 1,
    },
  });
  useEffect(() => {
    (async () => {
      const params = {
        latitude: city.lat || 48,
        longitude: city.lon || 44,
        current: [
          "temperature_2m",
          "relative_humidity_2m",
          "wind_speed_10m",
          "is_day",
          "weather_code",
        ],
        hourly: [
          "temperature_2m",
          "relative_humidity_2m",
          "wind_speed_10m",
          "weather_code",
        ],
      };
      const url = "https://api.open-meteo.com/v1/forecast";
      const responses = await fetchWeatherApi(url, params);

      const response = responses[0];
      const current = response.current();
      const hourly = response.hourly();
      const utcOffsetSeconds = response.utcOffsetSeconds();

      const weatherData = {
        current: {
          temperature_2m: Math.trunc(current.variables(0).value()),
          relative_humidity_2m: Math.trunc(current.variables(1).value()),
          wind_speed_10m: Math.trunc(current.variables(2).value()),
          is_day: current.variables(3).value(),
          weather_code: current.variables(4).value(),
        },
        hourly: {
          temperature_2m: hourly.variables(0).valuesArray(),
          relative_humidity_2m: hourly.variables(1).valuesArray(),
          wind_speed_10m: hourly.variables(2).valuesArray(),
          weather_code: hourly.variables(3).valuesArray(),
          time: [
            ...Array(
              (Number(hourly.timeEnd()) - Number(hourly.time())) /
                hourly.interval()
            ),
          ].map(
            (_, i) =>
              new Date(
                (Number(hourly.time()) +
                  i * hourly.interval() +
                  utcOffsetSeconds) *
                  1000
              )
          ),
        },
      };
      for (const key in weatherData.hourly) {
        weatherData.hourly[key] = weatherData.hourly[key]
          .filter((_, index) => index > 20)
          .filter((_, index) => index % 12 == 0)
          .filter((_, index) => index % 2 == 1);
      }
      setWeatherData(weatherData);

      // 'weatherData' now contains a simple structure with arrays with datetime and weather data
      console.log(
        `\nCurrent temperature_2m: ${weatherData.current.temperature_2m}`,
        `\nCurrent relative_humidity_2m: ${weatherData.current.relative_humidity_2m}`,
        `\nCurrent wind_speed_10m: ${weatherData.current.wind_speed_10m}`,
        `\nIs a day?: ${weatherData.current.is_day}`,
        `\nWeather Code: ${weatherData.current.weather_code}`,
        weatherData.current,

        weatherData.hourly
      );
    })();
    return () => {};
  }, [city]);

  return (
    <main>
      <div className="container">
        <SearchSection onSendCity={(data) => setCity(data)}></SearchSection>
        <WeatherCardMain
          weatherData={weatherData.current}
          city={city}
        ></WeatherCardMain>
        <ForecastList weatherData={weatherData.hourly}></ForecastList>
      </div>
    </main>
  );
}
