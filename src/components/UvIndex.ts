// src/components/UvIndex.ts
import { html } from 'lit';
import { UvConfig } from '../types/weather-types';

export const renderUvIndex = (
  hass: any,
  config: UvConfig
) => {
  if (!config.uv_index) return html``;

  const uv = hass.states[config.uv_index]?.state;
  
  return html`
    <div class="uv-index">
      <ha-icon icon="mdi:weather-sunny"></ha-icon>
      UV Index: ${uv}
    </div>
  `;
};