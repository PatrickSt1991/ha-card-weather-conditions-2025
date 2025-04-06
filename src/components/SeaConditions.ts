// src/components/SeaConditions.ts
import { html } from 'lit';
import { SeaConfig } from '../types/weather-types';
import { formatTemp } from '../utils/weather-utils';

export const renderSeaConditions = (
  hass: any,
  config: SeaConfig
) => {
  if (!config.wave_height) return html``;

  const waveHeight = formatTemp(hass.states[config.wave_height]?.state);
  
  return html`
    <div class="sea-conditions">
      <ha-icon icon="mdi:waves"></ha-icon>
      Waves: ${waveHeight} m
    </div>
  `;
};