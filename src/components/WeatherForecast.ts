// src/components/WeatherForecast.ts
import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { WeatherForecast } from '../types/weather-types';
import { formatTemp, getWeatherIcon, isNightTime } from '../utils/weather-utils';

export const renderWeatherForecast = (
  hass: any,
  forecast: WeatherForecast,
  currentSun: string | undefined,
  icons: any
) => {
  if (!forecast.temperature_high) return html``;

  const isNight = isNightTime(hass, currentSun);
  const forecastDays = Object.keys(forecast.temperature_high);

  return html`
    <div class="forecast">
      ${forecastDays.map(day => {
        const high = formatTemp(hass.states[forecast.temperature_high![day]]?.state);
        const condition = hass.states[forecast.icons![day]]?.state;
        
        return html`
          <div class="day">
            <div class="dayname">${day}</div>
            <i class="icon" style=${styleMap({
              background: `url('${getWeatherIcon(condition, isNight, icons)}')`
            })}></i>
            <div class="highTemp">${high}</div>
          </div>
        `;
      })}
    </div>
  `;
};