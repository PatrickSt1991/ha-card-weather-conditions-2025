// src/renderers/present.ts
import { html } from 'lit';
import { PresentData } from '../types';

export function renderPresent(data: PresentData) {
  if (!data) {
    return html``;
  }

  return html`
    <div class="present">
      <span class="temperature">${data.temperature}°</span>
      <span class="condition">${data.condition}</span>
      <span class="humidity">Humidity: ${data.humidity}%</span>
      <span class="wind">Wind: ${data.windSpeed} km/h</span>
    </div>
  `;
}
