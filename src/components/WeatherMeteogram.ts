// src/components/WeatherMeteogram.ts
import { html } from 'lit';
import { WeatherMeteogramConfig } from '../types/weather-types'; // Adjust the import according to your types
import { formatTemp } from '../utils/weather-utils'; // Reuse your utility functions as needed

export const renderWeatherMeteogram = (
  hass: any,
  config: WeatherMeteogramConfig
) => {
  if (!config.meteogram_image) return html``;

  const meteogramImage = hass.states[config.meteogram_image]?.state;
  
  return html`
    <div class="weather-meteogram">
      <img src="${meteogramImage}" alt="Weather Meteogram" />
    </div>
  `;
};
