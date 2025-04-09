// src/renderers/alert.ts
import { html } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { CardConfig } from '../types';

interface AlertRenderOptions {
  hass: HomeAssistant;
  config: CardConfig;
}

export function renderAlert({ hass, config }: AlertRenderOptions) {
  const entityId = config.alert;
  if (!entityId) return html``;

  const entity = hass.states[entityId];
  if (!entity || entity.state === 'off') return html``;

  return html`
    <div class="alert">
      <div class="title">🚨 Alert Active</div>
      <div class="description">${entity.attributes.message || 'Details not available.'}</div>
    </div>
  `;
}
