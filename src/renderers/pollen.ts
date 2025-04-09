// src/renderers/pollen.ts
import { html } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { CardConfig, ITerms } from '../types';

interface PollenRenderOptions {
  hass: HomeAssistant;
  config: CardConfig;
  terms: ITerms;
}

export function renderPollens({ hass, config, terms }: PollenRenderOptions) {
  const pollen = config.pollen;
  if (!pollen) return html``;

  const get = (key: keyof typeof pollen) => {
    const id = pollen[key]?.entity;
    return id ? hass.states[id]?.state ?? '-' : '-';
  };

  return html`
    <div class="pollen">
      <div>🌲 Tree: ${get('tree')}</div>
      <div>🌿 Weed: ${get('weed')}</div>
      <div>🌾 Grass: ${get('grass')}</div>
    </div>
  `;
}
