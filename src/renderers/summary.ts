// src/renderers/summary.ts
import { html } from 'lit';
import { SummaryData } from '../types';

export function renderSummary(data: SummaryData) {
  if (!data) {
    return html``;
  }

  return html`
    <div class="summary">
      <span class="location">${data.location}</span>
      <span class="description">${data.description}</span>
    </div>
  `;
}
