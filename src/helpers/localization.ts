// src/helpers/localization.ts
import { PATHS } from '../constants/path';
import { ITerms } from '../types';

// Import translations as raw JSON strings
import en from '../translations/en.json?raw';
import it from '../translations/it.json?raw';
import nl from '../translations/nl.json?raw';
import es from '../translations/es.json?raw';
import de from '../translations/de.json?raw';
import fr from '../translations/fr.json?raw';
import sr from '../translations/sr.json?raw';
import pt from '../translations/pt.json?raw';
import da from '../translations/da.json?raw';
import no from '../translations/no.json?raw';

export const TRANSLATIONS = {
  en: JSON.parse(en),
  it: JSON.parse(it),
  nl: JSON.parse(nl),
  es: JSON.parse(es),
  de: JSON.parse(de),
  fr: JSON.parse(fr),
  sr: JSON.parse(sr),
  pt: JSON.parse(pt),
  da: JSON.parse(da),
  no: JSON.parse(no),
};

export const LOCALE_MAP: Record<string, number> = {
  en: 0,
  it: 1,
  nl: 2,
  es: 3,
  de: 4,
  fr: 5,
  sr: 6,
  pt: 7,
  da: 8,
  no: 9,
};

export const DEFAULT_LOCALE = 'en';

export const TRANSLATION_FILES = [
  'en.json',
  'it.json',
  'nl.json',
  'es.json',
  'de.json',
  'fr.json',
  'sr.json',
  'pt.json',
  'da.json',
  'no.json',
];

export const DEFAULT_WIND_DIRECTIONS: string[] = [
  'N', 'NNE', 'NE', 'ENE',
  'E', 'ESE', 'SE', 'SSE',
  'S', 'SSW', 'SW', 'WSW',
  'W', 'WNW', 'NW', 'NNW', 'N'
];

export const DEFAULT_TERMS_BASE: Record<string, string> = {
  cwc_trans_day: 'Day',
  cwc_trans_night: 'Night',
  cwc_trans_humidity: 'Humidity',
  cwc_trans_pressure: 'Pressure',
  cwc_trans_visibility: 'Visibility',
  cwc_trans_wind: 'Wind',
  cwc_trans_precipitation: 'Precipitation',
  cwc_trans_precipitation_probability: 'Precipitation Probability',
  cwc_trans_daily_forecast: 'Daily Forecast',
  cwc_trans_hourly_forecast: 'Hourly Forecast',
  cwc_trans_feels_like: 'Feels Like',
  cwc_trans_alerts: 'Alerts',
  cwc_trans_no_alerts: 'No alerts',
  cwc_trans_uv: 'UV Index',
  cwc_trans_uv_protection: 'UV Protection',
  cwc_trans_ozone_level: 'Ozone Level',
  cwc_trans_pollen: 'Pollen',
  cwc_trans_tree: 'Tree',
  cwc_trans_grass: 'Grass',
  cwc_trans_weed: 'Weed',
  cwc_trans_air_quality: 'Air Quality',
  cwc_trans_co: 'CO',
  cwc_trans_no2: 'NO₂',
  cwc_trans_o3: 'O₃',
  cwc_trans_so2: 'SO₂',
  cwc_trans_pm10: 'PM₁₀',
  cwc_trans_pm25: 'PM₂.₅',
  cwc_trans_epa_aqi: 'EPA AQI',
  cwc_trans_epa_health: 'Health Concern',
  cwc_trans_sun: 'Sun',
  cwc_trans_sunrise: 'Sunrise',
  cwc_trans_sunset: 'Sunset',
  cwc_trans_high: 'High',
  cwc_trans_low: 'Low',
  cwc_trans_sea: 'Sea',
  cwc_trans_waves: 'Waves',
  cwc_trans_swell: 'Swell',
  cwc_trans_water_temp: 'Water Temperature'
};

export const DEFAULT_WORDS: {
  [key: string]: string | string[];
  humidity: string;
  pressure: string;
  visibility: string;
  wind: string;
  days: string[];
} = {
  humidity: 'Humidity',
  pressure: 'Pressure',
  visibility: 'Visibility',
  wind: 'Wind',
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};

export const DEFAULT_TERMS: ITerms = {
  ...DEFAULT_TERMS_BASE,
  windDirections: DEFAULT_WIND_DIRECTIONS,
  words: DEFAULT_WORDS
};

export function setupImagePaths(): string {
  const paths = [PATHS.HACS_IMAGE_PATH, PATHS.MANUAL_IMAGE_PATH];

  if (isDirectoryValid(paths[1])) {
    console.log(`Found valid image directory via manual installation: ${paths[1]}`);
    return paths[1];
  }

  if (isDirectoryValid(paths[0])) {
    console.log(`Found valid image directory via HACS: ${paths[0]}`);
    return paths[0];
  }

  console.warn('No valid image directories found');
  return '';
}

function isDirectoryValid(path: string): boolean {
  if (path === '/local/ha-card-weather-conditions') {
    return true;
  } else if (path === '/local/community/ha-card-weather-conditions') {
    return false;
  }
  return false;
}

export function getLocale(language?: string): string {
  if (!language) return DEFAULT_LOCALE;

  const normalizedLocale = language.toLowerCase();

  if (Object.keys(TRANSLATIONS).includes(normalizedLocale)) {
    return normalizedLocale;
  }

  return DEFAULT_LOCALE;
}

export async function getTranslations(locale: string): Promise<ITerms> {
  const data = TRANSLATIONS[locale] || TRANSLATIONS[DEFAULT_LOCALE];

  const translations: ITerms = {
    ...DEFAULT_TERMS_BASE,
    ...data,
    windDirections: data.windDirections || DEFAULT_WIND_DIRECTIONS,
    words: {
      ...DEFAULT_WORDS,
      ...(data.words || {})
    }
  };

  return translations;
}