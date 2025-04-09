import { HassEntity } from "home-assistant-js-websocket";

/**
 * Main configuration for the weather card
 */
export interface CardConfig {
  name?: string;
  language?: string;
  animation?: boolean;
  display?: string[];
  weather?: WeatherConfig;
  air_quality?: AirQualityConfig;
  pollen?: PollenConfig;
  uv?: UvConfig;
  alert?: AlertConfig;
  sea?: SeaConfig;
  camera?: string;
}

/**
 * Weather configuration section
 */
export interface WeatherConfig {
  current?: CurrentWeatherConfig;
  forecast?: ForecastConfig;
  icons_model?: string;
}

/**
 * Current weather configuration
 */
export interface CurrentWeatherConfig {
  sun?: string;
  current_conditions?: string;
  temperature?: string;
  apparent_temperature?: string;
  humidity?: string;
  pressure?: string;
  visibility?: string;
  wind_bearing?: string;
  wind_speed?: string;
  forecast?: boolean;
}

/**
 * Forecast configuration
 */
export interface ForecastConfig {
  meteogram?: string;
  temperature_low?: {
    day_1?: string;
    day_2?: string;
    day_3?: string;
    day_4?: string;
    day_5?: string;
  };
  temperature_high?: {
    day_1?: string;
    day_2?: string;
    day_3?: string;
    day_4?: string;
    day_5?: string;
  };
  precipitation_intensity?: {
    day_1?: string;
    day_2?: string;
    day_3?: string;
    day_4?: string;
    day_5?: string;
  };
  precipitation_probability?: {
    day_1?: string;
    day_2?: string;
    day_3?: string;
    day_4?: string;
    day_5?: string;
  };
  condition?: {
    day_1?: string;
    day_2?: string;
    day_3?: string;
    day_4?: string;
    day_5?: string;
  };
}

/**
 * Air quality configuration
 */
export interface AirQualityConfig {
  co?: string;
  epa_aqi?: string;
  epa_health_concern?: string;
  no2?: string;
  o3?: string;
  pm10?: string;
  pm25?: string;
  so2?: string;
}

/**
 * Pollen configuration
 */
export interface PollenConfig {
  tree?: PollenTypeConfig;
  weed?: PollenTypeConfig;
  grass?: PollenTypeConfig;
}

/**
 * Configuration for a specific pollen type
 */
export interface PollenTypeConfig {
  entity?: string;
  state_l1?: string;
  state_l2?: string;
  state_l3?: string;
  state_l4?: string;
  state_l5?: string;
}

/**
 * UV configuration
 */
export interface UvConfig {
  protection_window?: string;
  ozone_level?: string;
  uv_index?: string;
  uv_level?: string;
  max_uv_index?: string;
}

/**
 * Alert configuration
 */
export interface AlertConfig {
  entity?: string;
}

/**
 * Sea forecast configuration
 */
export interface SeaConfig {
  condition?: string;
  wave_height?: string;
  water_temperature?: string;
  swell_height?: string;
  swell_period?: string;
  primary_swell_wave_direction?: string;
  secondary_swell_height?: string;
  secondary_swell_period?: string;
  secondary_swell_wave_direction?: string;
  wave_direction?: string;
}

/**
 * Icons configuration
 */
export interface IconsConfig {
  path: string;
  iconType: string;
  icons_model: string;
  iconsDay: { [key: string]: string };
  iconsNight: { [key: string]: string };
}

/**
 * Localization terms
 */
export interface ITerms {
  windDirections: string[];
  words: { [key: string]: string };
}

/**
 * Feature flags interface to track available card features
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
 * Display configuration interface
 */
export interface DisplayConfig {
  top: boolean;
  current: boolean;
  forecast: boolean;
}