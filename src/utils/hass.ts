// src/utils/hass.ts

import { HomeAssistant } from 'custom-card-helpers';

/**
 * Check if an image exists at a given URL (via HEAD request).
 */
export async function imageExist(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Load and parse a JSON file from a remote URL.
 */
export async function loadJSON(url: string): Promise<any | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Bad response: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(`[loadJSON] Failed to load from ${url}`, err);
    return null;
  }
}

/**
 * Get the state value of an entity safely.
 */
export function getEntityState(hass: HomeAssistant, entityId: string): string | null {
  const entity = hass.states[entityId];
  return entity ? entity.state : null;
}

/**
 * Get the friendly name of an entity (from its attributes).
 */
export function getFriendlyName(hass: HomeAssistant, entityId: string): string {
  const entity = hass.states[entityId];
  return entity?.attributes?.friendly_name || entityId;
}

/**
 * Check if an entity exists in hass
 */
export function entityExists(hass: HomeAssistant, entityId: string): boolean {
  return Boolean(hass.states[entityId]);
}

/**
 * Get an attribute of an entity safely
 */
export function getAttribute(hass: HomeAssistant, entityId: string, attr: string): any {
  return hass.states[entityId]?.attributes?.[attr];
}
