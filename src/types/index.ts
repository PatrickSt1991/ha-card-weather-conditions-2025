// src/types/index.ts

export interface CardConfig {
  name?: string;
  language?: string;
  display?: string[];
  animation?: boolean;
  weather?: {
    current?: WeatherCurrent;
    forecast?: WeatherForecast;
    icons_model?: string;
  };
  air_quality?: AirQualityEntities;
  pollen?: PollenEntities;
  uv?: UvEntities;
  alert?: string;
  sea?: string;
  camera?: string;
}

export interface WeatherCurrent {
  temperature?: string;
  humidity?: string;
  pressure?: string;
  visibility?: string;
  wind_bearing?: string;
  wind_speed?: string;
  sun?: string;
  current_conditions?: string;
}

export interface WeatherForecast {
  temperature_high?: DayValue;
  temperature_low?: DayValue;
  precipitation_probability?: DayValue;
  precipitation_intensity?: DayValue;
  condition?: DayValue;
  meteogram?: string;
}

export interface DayValue {
  [key: string]: string;
}

export interface AirQualityEntities {
  co?: string;
  epa_aqi?: string;
  epa_health_concern?: string;
  no2?: string;
  o3?: string;
  pm10?: string;
  pm25?: string;
  so2?: string;
}

export interface PollenEntities {
  tree?: { entity: string };
  weed?: { entity: string };
  grass?: { entity: string };
}

export interface UvEntities {
  protection_window?: string;
  ozone_level?: string;
  uv_index?: string;
  uv_level?: string;
  max_uv_index?: string;
}

export interface IconsConfig {
  iconType: 'animated' | 'static';
  icons_model: string;
  iconsDay: Record<string, string>;
  iconsNight: Record<string, string>;
  path: string;
}

export interface ITerms {
  windDirections: string[];
  words: {
    humidity: string;
    pressure: string;
    visibility: string;
    wind: string;
    days: string[];
    [key: string]: string | string[];
  };
}

// Render data types used by individual components
export interface AirQualityData {
  index: number;
  category: string;
}

export interface AlertData {
  alerts: { title: string; description: string }[];
}

export interface ForecastData {
  daily: {
    date: string;
    condition: string;
    high: number;
    low: number;
  }[];
}

export interface PollenData {
  tree: string;
  weed: string;
  grass: string;
}

export interface PresentData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}

export interface SeaData {
  temperature: number;
  waveHeight: number;
  wavePeriod: number;
}

export interface SummaryData {
  location: string;
  description: string;
}

export interface UVData {
  index: number;
  riskLevel: string;
}