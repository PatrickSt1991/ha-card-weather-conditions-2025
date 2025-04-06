// src/types/weather-types.ts

// Core Home Assistant types
export interface HomeAssistant {
  states: Record<string, {
    state: string;
    attributes: {
      unit_of_measurement?: string;
      friendly_name?: string;
      entity_picture?: string;
      icon?: string;
      [key: string]: any;
    };
  }>;
  config: {
    unit_system: {
      temperature: string;
      length: string;
      precipitation: string;
      pressure: string;
      [key: string]: string;
    };
  };
}

// Main card configuration
export interface WeatherCardConfig {
  type: string;
  name?: string;
  language?: string;
  animation?: boolean;
  display: string[];
  weather?: {
    current?: WeatherCurrent;
    forecast?: WeatherForecast;
  };
  air_quality?: AirQualityConfig;
  pollen?: PollenConfig;
  uv?: UvConfig;
  alert?: AlertConfig;
  sea?: SeaConfig;
  camera?: string;
}

// Weather Current Conditions
export interface WeatherCurrent {
  current_conditions?: string;
  temperature?: string;
  feels_like?: string;
  humidity?: string;
  pressure?: string;
  wind_speed?: string;
  wind_bearing?: string;
  visibility?: string;
  precipitation?: string;
  sun?: string;
  moon_phase?: string;
  [key: string]: string | undefined;
}

// Weather Forecast
export interface WeatherForecast {
  meteogram?: string;
  icons?: Record<string, string>; // e.g. { day_1: "sensor.day1_icon" }
  temperature_high?: Record<string, string>;
  temperature_low?: Record<string, string>;
  precipitation_probability?: Record<string, string>;
  precipitation_intensity?: Record<string, string>;
  [key: string]: any;
}

// Air Quality
export interface AirQualityConfig {
  co?: string;
  no2?: string;
  o3?: string;
  pm10?: string;
  pm25?: string;
  so2?: string;
  epa_aqi?: string;
  epa_primary_pollutant?: string;
  epa_health_concern?: string;
  [key: string]: string | undefined;
}

// Pollen
export interface PollenConfig {
  tree?: PollenEntity;
  weed?: PollenEntity;
  grass?: PollenEntity;
}

export interface PollenEntity {
  entity: string;
  min?: number;
  max?: number;
  low?: number;
  high?: number;
  icon?: string;
}

// UV Index
export interface UvConfig {
  set_skin_type_1?: string ;
  set_skin_type_2?: string ;
  set_skin_type_3?: string ;
  set_skin_type_4?: string ;
  set_skin_type_5?: string ;
  set_skin_type_6?: string ;
  uv_index?: string;
  max_uv_index?: string;
  uv_level?: string;
  ozone_level?: string;
  protection_window?: string;
  [key: string]: string | undefined;
}

// Weather Alerts
export interface AlertConfig {
  fire_risk?: AlertItemConfig;
  thunderstorms_riks?: AlertItemConfig;
  hydraulic_risk?: AlertItemConfig;
  hydrogeological_risk: AlertItemConfig;
}

export interface AlertItemConfig {
  entity: string;
  icon?: string;
  min?: number;
  max?: number;
  show_if_on?: boolean;
  show_if_ge?: boolean;
}

// Sea Conditions
export interface SeaConfig {
  swell_direction?: Record<string, string>;
  swell_height?: Record<string, string>;
  swell_period?: Record<string, string>;
  wind_direction?: Record<string, string>;
  wind_speed?: Record<string, string>;
  air_temperature?: Record<string, string>;
  water_temperature?: Record<string, string>;
  [key: string]: any;
}

// Moon phases (enum style)
export enum MoonPhase {
  NEW = 'new',
  NEW_MOON = 'new_moon',
  WAXING_CRESCENT = 'waxing_crescent',
  FIRST_QUARTER = 'first_quarter',
  WAXING_GIBBOUS = 'waxing_gibbous',
  FULL = 'full',
  FULL_MOON = 'full_moon',
  WANING_GIBBOUS = 'waning_gibbous',
  THIRD_QUARTER = 'third_quarter',
  LAST_QUARTER = 'last_quarter',
  WANING_CRESCENT = 'waning_crescent'
}

// Wind directions (enum style)
export enum WindDirection {
  NORTH = 'N',
  NORTH_NORTHEAST = 'NNE',
  NORTHEAST = 'NE',
  EAST_NORTHEAST = 'ENE',
  EAST = 'E',
  EAST_SOUTHEAST = 'ESE',
  SOUTHEAST = 'SE',
  SOUTH_SOUTHEAST = 'SSE',
  SOUTH = 'S',
  SOUTH_SOUTHWEST = 'SSW',
  SOUTHWEST = 'SW',
  WEST_SOUTHWEST = 'WSW',
  WEST = 'W',
  WEST_NORTHWEST = 'WNW',
  NORTHWEST = 'NW',
  NORTH_NORTHWEST = 'NNW',
}