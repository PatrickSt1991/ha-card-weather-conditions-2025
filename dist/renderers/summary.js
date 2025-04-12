// src/renderers/summary.ts
import { html } from 'lit';
export function renderSummary({ hass, config, icons, terms }) {
    const entityId = config.weather?.current?.temperature;
    const entity = entityId ? hass.states[entityId] : undefined;
    if (!entity)
        return html ``;
    const temp = entity.state;
    const condition = entity.attributes?.weather || 'unknown';
    const icon = icons.iconsDay[condition] || icons.iconsDay['clear'];
    return html `
    <div class="summary">
      <div class="temp">
        ${temp}
        <span class="unit">°</span>
      </div>
      <div class="state">${terms.words?.[condition] || condition}</div>
      <img class="icon" src="${icons.path}/${icon}" />
    </div>
  `;
}
//# sourceMappingURL=summary.js.map