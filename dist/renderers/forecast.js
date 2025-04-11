// src/renderers/forecast.ts
import { html } from 'lit';
export function renderForecasts(data) {
    if (!data?.daily?.length)
        return html ``;
    return html `
    <div class="forecast">
      ${data.daily.map(day => html `
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
//# sourceMappingURL=forecast.js.map