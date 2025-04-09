// src/renderers/alert.ts
import { html } from 'lit';
import { AlertData } from '../types';

export function renderAlert(data: AlertData) {
  if (!data || !data.alerts.length) {
    return html``;
  }

  return html`
    <div class="alerts">
      ${data.alerts.map(
        alert => html`
          <div class="alert">
            <span class="title">${alert.title}</span>
            <span class="description">${alert.description}</span>
          </div>
        `
      )}
    </div>
  `;
}
