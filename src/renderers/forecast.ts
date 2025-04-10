// src/renderers/forecast.ts
import { html } from 'lit';
import { ForecastData } from '../types';

export function renderForecasts(data: ForecastData) {
  if (!data?.daily?.length) return html``;

  return html`
    <div class="forecast">
      ${data.daily.map(day => html`
        <div class="day">
          <span class="date">${day.date}</span>
          <span class="condition">${day.condition}</span>
          <span class="high">${day.high}°</span>
          <span class="low">${day.low}°</span>
        </div>
      `)}
    </div>
  `;
}
