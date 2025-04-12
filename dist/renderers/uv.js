// src/renderers/uv.ts
import { html } from 'lit';
export function renderUv({ hass, config }) {
    const uv = config.uv;
    if (!uv)
        return html ``;
    const get = (key) => {
        const id = uv[key];
        return id ? hass.states[id]?.state ?? '-' : '-';
    };
    return html `
    <div class="uv">
      <div>🌞 UV Index: ${get('uv_index')}</div>
      <div>Max UV: ${get('max_uv_index')}</div>
      <div>Level: ${get('uv_level')}</div>
      <div>Protection: ${get('protection_window')}</div>
      <div>Ozone: ${get('ozone_level')} DU</div>
    </div>
  `;
}
//# sourceMappingURL=uv.js.map