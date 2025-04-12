import clear from './weather/clear.svg?raw';
import cloudy from './weather/cloudy.svg?raw';
import fog from './weather/fog.svg?raw';
import hail from './weather/snow-and-sleet-mix.svg?raw';
import partlycloudy from './weather/cloudy-day-3.svg?raw';
import pouring from './weather/rainy-6.svg?raw';
import rain from './weather/rain.svg?raw';
import snow from './weather/snow.svg?raw';
import sleet from './weather/sleet.svg?raw';
import sunny from './weather/clear-day.svg?raw';
import wind from './weather/wind.svg?raw';
import alert from './weather/severe-thunderstorm.svg?raw';

export const defaultHassIcons: Record<string, string> = {
  clear,
  cloudy,
  fog,
  hail,
  partlycloudy,
  pouring,
  rainy: rain,
  snowy: snow,
  snowyrainy: sleet,
  sunny,
  windy: wind,
  exceptional: alert,
};