// src/components/Camera.ts
import { html } from 'lit';
import { handlePopup } from '../utils/weather-utils';

export const renderCamera = (
  hass: any,
  entityId: string
) => {
  const camera = hass.states[entityId];
  if (!camera?.attributes.entity_picture) return html``;

  return html`
    <div class="camera" @click=${(e: Event) => handlePopup(e.currentTarget as HTMLElement, entityId)}>
      <img src="${camera.attributes.entity_picture}" 
           alt="${camera.attributes.friendly_name}">
    </div>
  `;
};