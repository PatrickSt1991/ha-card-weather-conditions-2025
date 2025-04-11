// src/utils/hass.ts
/**
 * Check if an image exists at a given URL (via HEAD request).
 */
export async function imageExist(url) {
    try {
        const res = await fetch(url, { method: 'HEAD' });
        return res.ok;
    }
    catch {
        return false;
    }
}
/**
 * Load and parse a JSON file from a remote URL.
 */
export async function loadJSON(url) {
    try {
        const res = await fetch(url);
        if (!res.ok)
            throw new Error(`Bad response: ${res.status}`);
        return await res.json();
    }
    catch (err) {
        console.error(`[loadJSON] Failed to load from ${url}`, err);
        return null;
    }
}
/**
 * Get the state value of an entity safely.
 */
export function getEntityState(hass, entityId) {
    const entity = hass.states[entityId];
    return entity ? entity.state : null;
}
/**
 * Get the friendly name of an entity (from its attributes).
 */
export function getFriendlyName(hass, entityId) {
    const entity = hass.states[entityId];
    return entity?.attributes?.friendly_name || entityId;
}
/**
 * Check if an entity exists in hass
 */
export function entityExists(hass, entityId) {
    return Boolean(hass.states[entityId]);
}
/**
 * Get an attribute of an entity safely
 */
export function getAttribute(hass, entityId, attr) {
    return hass.states[entityId]?.attributes?.[attr];
}
//# sourceMappingURL=hass.js.map