// src/renderers/airQuality.ts
import { html } from 'lit';
export function renderAirQualities({ hass, config }) {
    const aqi = config.air_quality;
    if (!aqi)
        return html ``;
    const get = (key) => {
        const id = aqi[key];
        return id ? hass.states[id]?.state ?? '-' : '-';
    };
    return html `
    <div class="air-quality">
      <div>PM2.5: ${get('pm25')} μg/m³</div>
      <div>PM10: ${get('pm10')} μg/m³</div>
      <div>O₃: ${get('o3')} μg/m³</div>
      <div>NO₂: ${get('no2')} μg/m³</div>
      <div>SO₂: ${get('so2')} μg/m³</div>
      <div>CO: ${get('co')} μg/m³</div>
      <div>AQI: ${get('epa_aqi')}</div>
      <div>Concern: ${get('epa_health_concern')}</div>
    </div>
  `;
}
//# sourceMappingURL=airQuality.js.map