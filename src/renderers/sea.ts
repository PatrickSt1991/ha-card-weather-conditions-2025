// src/renderers/sea.ts
import { html } from 'lit';
import { SeaData } from '../types';

export function renderSea(data: SeaData) {
  if (!data) {
    return html``;
  }

  return html`
    <div class="sea">
      <span class="temperature">Sea Temp: ${data.temperature}°</span>
      <span class="wave-height">Wave Height: ${data.waveHeight} m</span>
      <span class="wave-period">Wave Period: ${data.wavePeriod} s</span>
    </div>
  `;
}
