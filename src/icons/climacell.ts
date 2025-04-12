import clear from './weather/clear.svg?raw';
import cloudy from './weather/cloudy.svg?raw';
import fog from './weather/fog.svg?raw';
import hail from './weather/hail.svg?raw';
import partlycloudy from './weather/partly-cloudy.svg?raw';
import pouring from './weather/pouring.svg?raw';
import rain from './weather/rain.svg?raw';
import snow from './weather/snow.svg?raw';
import sleet from './weather/sleet.svg?raw';
import sunny from './weather/sunny.svg?raw';
import wind from './weather/wind.svg?raw';
import alert from './weather/alert.svg?raw';

export const climacellIcons: Record<string, string> = {
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

export const cwcClimacellDayBg: Record<string, string> = {
  clear: './bg/day-clear.jpg',
  partlycloudy: './bg/day-cloud-1.jpg',
  cloudy: './bg/day-cloud-2.jpg',
  rainy: './bg/day-cloud-3.jpg',
};
