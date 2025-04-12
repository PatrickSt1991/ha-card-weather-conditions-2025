// Importing the translation files as raw strings
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

// Parsing the raw JSON strings
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
export const LOCALE_MAP: { [key: string]: number } = {
  'en': 0,   // English
  'it': 1,   // Italian
  'nl': 2,   // Dutch
  'es': 3,   // Spanish
  'de': 4,   // German
  'fr': 5,   // French
  'sr': 6,   // Serbian (Latin)
  'pt': 7,   // Portuguese
  'da': 8,   // Danish
  'no': 9    // Norwegian
};

/**
 * Default locale to use if the requested one is not found
 */
export const DEFAULT_LOCALE = 'en';

/**
 * File names for the translation files (keep these for reference)
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
  'no.json'
];

/**
 * Default wind directions for fallback
 */
export const DEFAULT_WIND_DIRECTIONS = [
  'N', 'NNE', 'NE', 'ENE', 
  'E', 'ESE', 'SE', 'SSE', 
  'S', 'SSW', 'SW', 'WSW', 
  'W', 'WNW', 'NW', 'NNW'
];

/**
 * Default terms for fallback
 */
export const DEFAULT_TERMS = {
  'cwc_trans_day': 'Day',
  'cwc_trans_night': 'Night',
  'cwc_trans_humidity': 'Humidity',
  'cwc_trans_pressure': 'Pressure',
  'cwc_trans_visibility': 'Visibility',
  'cwc_trans_wind': 'Wind',
  'cwc_trans_precipitation': 'Precipitation',
  'cwc_trans_precipitation_probability': 'Precipitation Probability',
  'cwc_trans_daily_forecast': 'Daily Forecast',
  'cwc_trans_hourly_forecast': 'Hourly Forecast',
  'cwc_trans_feels_like': 'Feels Like',
  'cwc_trans_alerts': 'Alerts',
  'cwc_trans_no_alerts': 'No alerts',
  'cwc_trans_uv': 'UV Index',
  'cwc_trans_uv_protection': 'UV Protection',
  'cwc_trans_ozone_level': 'Ozone Level',
  'cwc_trans_pollen': 'Pollen',
  'cwc_trans_tree': 'Tree',
  'cwc_trans_grass': 'Grass',
  'cwc_trans_weed': 'Weed',
  'cwc_trans_air_quality': 'Air Quality',
  'cwc_trans_co': 'CO',
  'cwc_trans_no2': 'NO₂',
  'cwc_trans_o3': 'O₃',
  'cwc_trans_so2': 'SO₂',
  'cwc_trans_pm10': 'PM₁₀',
  'cwc_trans_pm25': 'PM₂.₅',
  'cwc_trans_epa_aqi': 'EPA AQI',
  'cwc_trans_epa_health': 'Health Concern',
  'cwc_trans_sun': 'Sun',
  'cwc_trans_sunrise': 'Sunrise',
  'cwc_trans_sunset': 'Sunset',
  'cwc_trans_high': 'High',
  'cwc_trans_low': 'Low',
  'cwc_trans_sea': 'Sea',
  'cwc_trans_waves': 'Waves',
  'cwc_trans_swell': 'Swell',
  'cwc_trans_water_temp': 'Water Temperature'
};
