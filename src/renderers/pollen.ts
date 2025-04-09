// src/renderers/pollen.ts
import { html } from 'lit';
import { PollenData } from '../types';

export function renderPollen(data: PollenData) {
  if (!data) {
    return html``;
  }

  return html`
    <div class="pollen">
      <span class="tree">Tree: ${data.tree}</span>
      <span class="weed">Weed: ${data.weed}</span>
      <span class="grass">Grass: ${data.grass}</span>
    </div>
  `;
}
