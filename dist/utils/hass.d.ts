import { HomeAssistant } from 'custom-card-helpers';
/**
 * Check if an image exists at a given URL (via HEAD request).
 */
export declare function imageExist(url: string): Promise<boolean>;
/**
 * Load and parse a JSON file from a remote URL.
 */
export declare function loadJSON(url: string): Promise<any | null>;
/**
 * Get the state value of an entity safely.
 */
export declare function getEntityState(hass: HomeAssistant, entityId: string): string | null;
/**
 * Get the friendly name of an entity (from its attributes).
 */
export declare function getFriendlyName(hass: HomeAssistant, entityId: string): string;
/**
 * Check if an entity exists in hass
 */
export declare function entityExists(hass: HomeAssistant, entityId: string): boolean;
/**
 * Get an attribute of an entity safely
 */
export declare function getAttribute(hass: HomeAssistant, entityId: string, attr: string): any;
//# sourceMappingURL=hass.d.ts.map