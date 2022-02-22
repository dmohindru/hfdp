import {WeatherData} from "./weatherdata";
import {CurrentConditionsDisplay} from "./currentconditonsdisplay";
import {ForeCastDisplay} from "./forecastdisplay";
import {StatisticsDisplay} from "./statisticsdisplay";
import {HeatIndexDisplay} from "./heatindex";

console.log('-----------Weather Stations-----------');

const weatherData = new WeatherData();

const currentConditionDisplay = new CurrentConditionsDisplay(weatherData);
const foreCastDisplay = new ForeCastDisplay(weatherData);
const statisticsDisplay = new StatisticsDisplay(weatherData);
const headIndexDisplay = new HeatIndexDisplay(weatherData);

console.log('--------------------------');
weatherData.setMeasurements(80, 65, 30.4);
console.log('--------------------------');
weatherData.setMeasurements(82, 70, 29.2);
console.log('--------------------------');
weatherData.removeObserver(statisticsDisplay);
weatherData.setMeasurements(78, 90, 29.2);
console.log('--------------------------');