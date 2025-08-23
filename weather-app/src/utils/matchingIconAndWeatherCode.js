import clearSky from "../assets/icons-weather-code/clear-day.svg";
import fog from "../assets/icons-weather-code/fog.svg";
import cloudySLight from "../assets/icons-weather-code/cloudy-1.svg";
import cloudy from "../assets/icons-weather-code/cloudy.svg";
import thunderstorm from "../assets/icons-weather-code/scattered-thunderstorms.svg";
import snowyGrains from "../assets/icons-weather-code/snowy-1.svg";
import snowySlight from "../assets/icons-weather-code/snowy-2.svg";
import snowyHeavy from "../assets/icons-weather-code/snowy-3.svg";
import rainSlight from "../assets/icons-weather-code/rainy-1.svg";
import rainModerate from "../assets/icons-weather-code/rainy-2.svg";
import rainIntesity from "../assets/icons-weather-code/rainy-3.svg";
import rainyAndSleet from "../assets/icons-weather-code/rain-and-sleet-mix.svg";
import rainyAndSnow from "../assets/icons-weather-code/rain-and-snow-mix.svg";
import hail from "../assets/icons-weather-code/hail.svg";

import day from "../assets/icons-weather-code/clear-day.svg";
import night from "../assets/icons-weather-code/clear-night.svg";

export const IS_DAY = {
  day: day,
  night: night
}

export const WEATHER_CODE = {
  0: clearSky,
  1: clearSky,
  2: cloudySLight,
  3: cloudy,
  45: fog,
  48: fog,
  51: hail,
  53: hail,
  55: hail,
  56: rainSlight,
  57: rainModerate,
  61: rainSlight,
  63: rainModerate,
  65: rainIntesity,
  66: rainyAndSleet,
  67: rainyAndSnow,
  71: snowyGrains,
  73: snowySlight,
  75: snowyHeavy,
  77: snowyGrains,
  80: rainSlight,
  81: rainModerate,
  82: rainIntesity,
  85: snowySlight,
  86: snowyHeavy,
  95: thunderstorm,
  96: thunderstorm,
  99: thunderstorm
}