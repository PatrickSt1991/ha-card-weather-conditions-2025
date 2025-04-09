// src/renderers/airQuality.ts
import { html } from 'lit';
import { AirQualityData } from '../types';

export function renderAirQuality(data: AirQualityData) {
  if (!data) {
    return html``;
  }

  return html`
    <div class="air-quality">
      <span class="label">Air Quality:</span>
      <span class="value">${data.index}</span>
      <span class="category">${data.category}</span>
    </div>
  `;
}
