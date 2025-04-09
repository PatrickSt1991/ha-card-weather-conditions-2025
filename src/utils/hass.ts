import { HomeAssistant } from "custom-card-helpers";
import { HassEntity } from "home-assistant-js-websocket";

/**
 * Gets the state of an entity from Home Assistant
 * @param hass - The Home Assistant instance
 * @param entityId - The entity ID to get the state for
 * @returns The entity state object or undefined if not found
 */
export function getEntity(hass: HomeAssistant, entityId?: string): HassEntity | undefined {
  if (!entityId || !hass.states[entityId]) {
    return undefined;
  }
  return hass.states[entityId];
}

/**
 * Gets the state value of an entity
 * @param hass - The Home Assistant instance
 * @param entityId - The entity ID to get the state for
 * @param defaultValue - The default value to return if the entity is not found
 * @returns The entity state value or the default value
 */
export function getEntityStateValue<T>(
  hass: HomeAssistant,
  entityId?: string,
  defaultValue?: T
): string | T {
  const entity = getEntity(hass, entityId);
  if (!entity) {
    return defaultValue as T;
  }
  return entity.state;
}

/**
 * Gets a numeric attribute value from an entity
 * @param hass - The Home Assistant instance
 * @param entityId - The entity ID to get the attribute from
 * @param attribute - The name of the attribute
 * @param defaultValue - The default value to return if not found
 * @returns The numeric value of the attribute
 */
export function getNumericAttributeValue(
  hass: HomeAssistant,
  entityId: string | undefined,
  attribute: string,
  defaultValue: number = 0
): number {
  if (!entityId) return defaultValue;
  
  const entity = getEntity(hass, entityId);
  if (!entity || !entity.attributes || entity.attributes[attribute] === undefined) {
    return defaultValue;
  }
  
  const value = parseFloat(entity.attributes[attribute]);
  return isNaN(value) ? defaultValue : value;
}

/**
 * Gets a string attribute value from an entity
 * @param hass - The Home Assistant instance
 * @param entityId - The entity ID to get the attribute from
 * @param attribute - The name of the attribute
 * @param defaultValue - The default value to return if not found
 * @returns The string value of the attribute
 */
export function getStringAttributeValue(
  hass: HomeAssistant,
  entityId: string | undefined,
  attribute: string,
  defaultValue: string = ""
): string {
  if (!entityId) return defaultValue;
  
  const entity = getEntity(hass, entityId);
  if (!entity || !entity.attributes || entity.attributes[attribute] === undefined) {
    return defaultValue;
  }
  
  return String(entity.attributes[attribute]);
}

/**
 * Gets the unit of measurement for an entity
 * @param hass - The Home Assistant instance
 * @param entityId - The entity ID to get the unit for
 * @param defaultUnit - The default unit to return if not found
 * @returns The unit of measurement
 */
export function getEntityUnit(
  hass: HomeAssistant,
  entityId: string | undefined,
  defaultUnit: string = ""
): string {
  return getStringAttributeValue(hass, entityId, "unit_of_measurement", defaultUnit);
}

/**
 * Gets the friendly name for an entity
 * @param hass - The Home Assistant instance
 * @param entityId - The entity ID to get the name for
 * @param defaultName - The default name to return if not found
 * @returns The friendly name
 */
export function getEntityName(
  hass: HomeAssistant,
  entityId: string | undefined,
  defaultName: string = ""
): string {
  return getStringAttributeValue(hass, entityId, "friendly_name", defaultName);
}

/**
 * Gets the state value of an entity as a number
 * @param hass - The Home Assistant instance
 * @param entityId - The entity ID to get the state for
 * @param defaultValue - The default value to return if the entity is not found or the state is not a number
 * @returns The entity state value as a number or the default value
 */
export function getEntityStateAsNumber(
  hass: HomeAssistant,
  entityId: string | undefined,
  defaultValue: number = 0
): number {
  if (!entityId) return defaultValue;
  
  const state = getEntityStateValue(hass, entityId, "");
  if (state === "") return defaultValue;
  
  const value = parseFloat(state as string);
  return isNaN(value) ? defaultValue : value;
}