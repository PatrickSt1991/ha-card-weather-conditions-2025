import { CardConfig } from '../types';

/**
 * Interface defining feature availability flags for the weather card
 */
export interface FeatureFlags {
  hasCurrent: boolean;
  hasForecast: boolean;
  hasMeteogram: boolean;
  hasAirQuality: boolean;
  hasPollen: boolean;
  hasUv: boolean;
  hasAlert: boolean;
  hasSea: boolean;
}

/**
 * Analyzes configuration to determine which features should be enabled
 * @param config - The card configuration object
 * @returns Feature flag object with boolean values for each feature
 */
export function detectFeatures(config: CardConfig): FeatureFlags {
  if (!config) {
    return {
      hasCurrent: false,
      hasForecast: false,
      hasMeteogram: false,
      hasAirQuality: false,
      hasPollen: false,
      hasUv: false,
      hasAlert: false,
      hasSea: false
    };
  }
  
  const weather = config.weather || {};
  const pollen = config.pollen;

  // Check for current weather data
  const hasCurrent = !!weather.current;
  
  // Check for forecast data
  const hasForecast = !!weather.forecast;
  
  // Check for meteogram (requires forecast)
  const hasMeteogram = hasForecast && !!weather.forecast?.meteogram;

  // Check for air quality data
  const hasAirQuality = !!config.air_quality;
  
  // Check for pollen data (requires at least one type)
  const hasPollen = !!pollen && (!!pollen.tree || !!pollen.weed || !!pollen.grass);
  
  // Check for UV data
  const hasUv = !!config.uv;
  
  // Check for alert data
  const hasAlert = !!config.alert;
  
  // Check for sea forecast data
  const hasSea = !!config.sea;

  return {
    hasCurrent,
    hasForecast,
    hasMeteogram,
    hasAirQuality,
    hasPollen,
    hasUv,
    hasAlert,
    hasSea
  };
}

/**
 * Determines which sections should be visible based on configuration and feature availability
 * @param config - The card configuration object
 * @param flags - The feature flags object
 * @returns Object with boolean values for section visibility
 */
export function determineSectionVisibility(
  config: CardConfig,
  flags: FeatureFlags
): Record<string, boolean> {
  // Default to showing all available sections
  const showAll = !config.display || config.display.includes('all');
  
  // Check display configuration
  const displayTop = showAll || !config.display || config.display.includes('top');
  const displayCurrent = showAll || !config.display || config.display.includes('current');
  const displayForecast = showAll || !config.display || config.display.includes('forecast');
  
  return {
    showSummary: displayTop && flags.hasCurrent,
    showPresent: displayCurrent && flags.hasCurrent,
    showUv: displayTop && flags.hasUv,
    showAirQuality: displayTop && flags.hasAirQuality,
    showPollen: displayTop && flags.hasPollen,
    showForecast: displayForecast && flags.hasForecast,
    showAlert: displayTop && flags.hasAlert,
    showSea: displayForecast && flags.hasSea
  };
}