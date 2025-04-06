// src/components/Pollen.ts
import { html } from 'lit';
import { PollenConfig } from '../types/weather-types';

export const renderPollen = (
  hass: any,
  config: PollenConfig
) => {
  if (!config.tree?.entity) return html``;

  const treeLevel = hass.states[config.tree.entity]?.state;
  
  return html`
    <div class="pollen">
      <ha-icon icon="mdi:flower"></ha-icon>
      <meter class="meter" 
             min="0" max="5" 
             value="${treeLevel}">
        ${treeLevel}/5
      </meter>
    </div>
  `;
};