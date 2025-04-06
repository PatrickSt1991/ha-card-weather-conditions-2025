import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { WeatherCurrent } from '../types/weather-types';
import { formatTemp, getWeatherIcon, isNightTime } from '../utils/weather-utils';

export const renderCurrentWeather = (
  hass: any,
  config: WeatherCurrent,
  icons: any
) => {
  const condition = hass.states[config.current_conditions!]?.state;
  const temp = formatTemp(hass.states[config.temperature!]?.state);
  const isNight = isNightTime(hass, config.sun);

  return html`
    <div class="current">
      <span class="icon bigger" 
            style=${styleMap({
              background: `url('${getWeatherIcon(condition, isNight, icons)}') no-repeat`,
              backgroundSize: 'contain'
            })}>
        ${condition}
      </span>
      ${config.name ? html`<span class="title">${config.name}</span>` : ''}
      <span class="temp">${temp}</span>
    </div>
  `;
};