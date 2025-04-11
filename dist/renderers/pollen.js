// src/renderers/pollen.ts
import { html } from 'lit';
export function renderPollens({ hass, config }) {
    const pollen = config.pollen;
    if (!pollen)
        return html ``;
    const get = (key) => {
        const id = pollen[key]?.entity;
        return id ? hass.states[id]?.state ?? '-' : '-';
    };
    return html `
    <div class="pollen">
      <div>🌲 Tree: ${get('tree')}</div>
      <div>🌿 Weed: ${get('weed')}</div>
      <div>🌾 Grass: ${get('grass')}</div>
    </div>
  `;
}
//# sourceMappingURL=pollen.js.map