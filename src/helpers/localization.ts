// src/helpers/localization.ts
import { PATHS } from '../constants/path';
import { ITerms } from '../types';
import en from './transl/en.json?raw';
import it from './transl/it.json?raw';
import nl from './transl/nl.json?raw';
import es from './transl/es.json?raw';
import de from './transl/de.json?raw';
import fr from './transl/fr.json?raw';
import sr from './transl/sr.json?raw';
import pt from './transl/pt.json?raw';
import da from './transl/da.json?raw';
import no from './transl/no.json?raw';

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

/**
 * Map of language codes to array indices for translation files
 */
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

/**
 * Default locale to use if the requested one is not found
 */
export const DEFAULT_LOCALE = 'en';

/**
 * Translation file names, ordered to match LOCALE_MAP
 */
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

/**
 * Default wind directions for fallback translations
 */
export const DEFAULT_WIND_DIRECTIONS: string[] = [
  'N', 'NNE', 'NE', 'ENE',
  'E', 'ESE', 'SE', 'SSE',
  'S', 'SSW', 'SW', 'WSW',
  'W', 'WNW', 'NW', 'NNW', 'N'
];

/**
 * Default fallback translation terms (used when JSON is missing or invalid)
 */
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

/**
 * Default words structure that satisfies the ITerms.words requirement
 */
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

/**
 * Complete default terms that match the ITerms interface
 */
export const DEFAULT_TERMS: ITerms = {
  ...DEFAULT_TERMS_BASE,
  windDirections: DEFAULT_WIND_DIRECTIONS,
  words: DEFAULT_WORDS
};

/**
 * Sets up image paths and determines which path is valid by checking directory existence
 * @returns {string} The valid image path or empty string if none found
 */
export function setupImagePaths(): string {
  // Try both HACS and manual installation paths
  const paths = [PATHS.HACS_IMAGE_PATH, PATHS.MANUAL_IMAGE_PATH];
  
  // Check for the manual installation path first
  if (isDirectoryValid(paths[1])) {
    console.log(`Found valid image directory via manual installation: ${paths[1]}`);
    return paths[1]; // Manual install path should be valid
  }

  // If the manual path is not valid, check the HACS path
  if (isDirectoryValid(paths[0])) {
    console.log(`Found valid image directory via HACS: ${paths[0]}`);
    return paths[0]; // HACS install path should be valid
  }

  // If no directory path is valid, log a warning and return empty string
  console.warn('No valid image directories found');
  return '';
}

/**
 * Checks if a directory is valid. Since we can't check the filesystem directly in the browser,
 * we rely on knowing the expected installation paths (HACS or manual).
 * @param {string} path - The directory path to check
 * @returns {boolean} True if the directory is valid, false otherwise
 */
function isDirectoryValid(path: string): boolean {
  // For manual installation, the valid path should start with /local/ha-card-weather-conditions
  // For HACS, it would be /local/community/ha-card-weather-conditions
  if (path === '/local/ha-card-weather-conditions') {
    // Assuming you know the directory is valid if it exists in the manual installation path
    return true;
  } else if (path === '/local/community/ha-card-weather-conditions') {
    // This would only be used if the card were installed via HACS
    return false; // We're skipping HACS in this case since you're doing manual installation
  }
  return false;
}


/**
 * Get the normalized locale code
 * @param language - The language code from config
 * @returns Normalized locale code
 */
export function getLocale(language?: string): string {
  if (!language) return DEFAULT_LOCALE;
  
  // Convert to lowercase for consistent comparison
  const normalizedLocale = language.toLowerCase();
  
  // Check if the locale exists in our map
  if (Object.keys(LOCALE_MAP).includes(normalizedLocale)) {
    return normalizedLocale;
  }
  
  // Return default locale if not found
  return DEFAULT_LOCALE;
}

/**
 * Get translations for the specified locale
 * @param imagePath - The base path for loading translation files
 * @param locale - The locale to load translations for
 * @returns Object containing translated terms
 */
export async function getTranslations(imagePath: string, locale: string): Promise<ITerms> {
  try {
    // Get the index of the locale in our map
    const localeIndex = LOCALE_MAP[locale];
    
    if (localeIndex === undefined) {
      console.warn(`Locale ${locale} not found, using default`);
      return DEFAULT_TERMS;
    }
  
    const translationFile = TRANSLATION_FILES[localeIndex];
    // Fixed path - translations are at the same level as icons, not inside icons folder
    const translationPath = `${imagePath}/transl/${translationFile}`;
    console.log(`Loading translation from: ${translationPath}`);
    try {
      // Try to fetch the translation file
      const response = await fetch(translationPath);
      if (!response.ok) {
        throw new Error(`Failed to load translations: ${response.statusText}`);
      }
      
      const translationJson = await response.json();
      console.log('Translation loaded successfully');
      
      // Create a proper ITerms object with all required properties
      const translations: ITerms = {
        ...DEFAULT_TERMS_BASE,
        ...translationJson,
        windDirections: translationJson.windDirections || DEFAULT_WIND_DIRECTIONS,
        words: {
          ...DEFAULT_WORDS,
          ...(translationJson.words || {})
        }
      };
      
      return translations;
    } catch (fetchError) {
      console.warn(`Failed to load translation file ${translationPath}:`, fetchError);
      // Fall back to default terms if load fails
      return DEFAULT_TERMS;
    }
  } catch (error) {
    console.error('Error loading translations:', error);
    return DEFAULT_TERMS;
  }
}