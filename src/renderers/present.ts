// src/renderers/present.ts
import { html } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { CardConfig, ITerms } from '../types';

interface PresentRenderOptions {
  hass: HomeAssistant;
  config: CardConfig;
  terms: ITerms;
}

export function renderPresent({ hass, config, terms }: PresentRenderOptions) {
  const data = config.weather?.current;
  if (!data) return html``;

  const get = (id?: string) => id ? hass.states[id]?.state ?? '-' : '-';

  return html`
    <div class="present">
      <div>${terms.words.temperature ?? 'Temp'}: ${get(data.temperature)}°</div>
      <div>${terms.words.humidity ?? 'Humidity'}: ${get(data.humidity)}%</div>
      <div>${terms.words.pressure ?? 'Pressure'}: ${get(data.pressure)} hPa</div>
      <div>${terms.words.wind ?? 'Wind'}: ${get(data.wind_speed)} km/h</div>
    </div>
  `;
}
