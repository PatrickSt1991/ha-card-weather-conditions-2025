// src/renderers/uv.ts
import { html } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { CardConfig, ITerms } from '../types';

interface UVRenderOptions {
  hass: HomeAssistant;
  config: CardConfig;
  terms: ITerms;
}

export function renderUv({ hass, config, terms }: UVRenderOptions) {
  const uv = config.uv;
  if (!uv) return html``;

  const get = (key: keyof typeof uv) => {
    const id = uv[key];
    return id ? hass.states[id]?.state ?? '-' : '-';
  };

  return html`
    <div class="uv">
      <div>🌞 UV Index: ${get('uv_index')}</div>
      <div>Max UV: ${get('max_uv_index')}</div>
      <div>Level: ${get('uv_level')}</div>
      <div>Protection: ${get('protection_window')}</div>
      <div>Ozone: ${get('ozone_level')} DU</div>
    </div>
  `;
}
