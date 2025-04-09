// src/renderers/uv.ts
import { html } from 'lit';
import { UVData } from '../types';

export function renderUV(data: UVData) {
  if (!data) {
    return html``;
  }

  return html`
    <div class="uv">
      <span class="index">UV Index: ${data.index}</span>
      <span class="risk">${data.riskLevel}</span>
    </div>
  `;
}
