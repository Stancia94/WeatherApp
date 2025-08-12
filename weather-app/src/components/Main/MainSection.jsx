import SearchSection from "../SearchSection/SearchSection";
import WeatherCardMain from "../WeatherCardMain/WeatherCardMain";
import ForecastList from "../ForecastList/ForecastList";
export default function Main() {
  return (
    <main>
      <div className="container">
        <SearchSection></SearchSection>
        <WeatherCardMain></WeatherCardMain>
        <ForecastList></ForecastList>
      </div>
    </main>
  );
}
