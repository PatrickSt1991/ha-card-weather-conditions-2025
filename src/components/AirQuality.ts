// src/components/AirQuality.ts
import { html } from 'lit';
import { AirQualityConfig } from '../types/weather-types';
import { formatTemp } from '../utils/weather-utils';

export const renderAirQuality = (
  hass: any,
  config: AirQualityConfig
) => {
  if (!config.pm25) return html``;

  const pm25 = formatTemp(hass.states[config.pm25]?.state);
  
  return html`
    <ul class="variations">
      <li>
        <ha-icon icon="mdi:air-filter"></ha-icon>
        PM2.5: ${pm25}
      </li>
    </ul>
  `;
};