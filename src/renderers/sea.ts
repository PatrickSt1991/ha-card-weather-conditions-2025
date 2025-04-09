// src/renderers/sea.ts
import { html } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { CardConfig } from '../types';

interface SeaRenderOptions {
  hass: HomeAssistant;
  config: CardConfig;
}

export function renderSeaForecast({ hass, config }: SeaRenderOptions) {
  const entityId = config.sea;
  if (!entityId) return html``;

  const entity = hass.states[entityId];
  if (!entity) return html``;

  return html`
    <div class="sea">
      <div>🌊 Sea State: ${entity.state}</div>
      ${entity.attributes.wave_height
        ? html`<div>Height: ${entity.attributes.wave_height} m</div>`
        : ''}
      ${entity.attributes.wave_period
        ? html`<div>Period: ${entity.attributes.wave_period} s</div>`
        : ''}
    </div>
  `;
}
