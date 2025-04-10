import { ITerms } from '../types';
import { PATHS } from '../constants/path';
/**
 * Loads a JSON file from a URL
 */
export async function loadJSON(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to load JSON from ${url}: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error(`Error loading JSON from ${url}:`, error);
    return null;
  }
}

export const LOCALE_INDICES: Record<string, number> = {
  'en': 0, 'it': 1, 'nl': 2, 'es': 3, 'de': 4,
  'fr': 5, 'sr-latn': 6, 'pt': 7, 'da': 8, 'no-no': 9
};

export function getLocale(locale?: string): string {
  return locale?.toLowerCase() || 'en';
}

export function getTranslationTerms(
  locale: string,
  localeMap: Record<string, number>,
  translations?: any[]
): ITerms {
  const fallbackTerms: ITerms = {
    windDirections: [
      'N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
      'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N'
    ],
    words: {
      humidity: 'Humidity',
      pressure: 'Pressure',
      visibility: 'Visibility',
      wind: 'Wind',
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
  };

  if (!translations) return fallbackTerms;

  try {
    const normalizedLocale = locale.toLowerCase();
    const index = localeMap[normalizedLocale] ?? 0;
    const translationData = translations[index];

    return {
      windDirections: translationData?.cwcLocWindDirections || fallbackTerms.windDirections,
      words: translationData?.cwcTerms || fallbackTerms.words,
    };
  } catch (e) {
    console.error(`Error processing translations for ${locale}:`, e);
    return fallbackTerms;
  }
}

export async function loadTranslations(imagePath: string): Promise<any[]> {
  const translPath = imagePath + PATHS.TRANSLATIONS_DIR;

  const files = [
    'en.json', 'it.json', 'nl.json', 'es.json', 'de.json',
    'fr.json', 'sr-latn.json', 'pt.json', 'da.json', 'no-NO.json',
  ];

  return Promise.all(files.map(file => loadJSON(`${translPath}${file}`)));
}

export async function getTranslations(imagePath: string, locale: string): Promise<ITerms> {
  const translations = await loadTranslations(imagePath);
  return getTranslationTerms(locale, LOCALE_INDICES, translations);
}

/**
 * Determine image path (can be overridden via custom path in config).
 */
export function setupImagePaths(customPath?: string): string | null {
  if (customPath) return customPath;

  const script = document.currentScript as HTMLScriptElement | null;
  const basePath = script?.src ? script.src.substring(0, script.src.lastIndexOf('/')) : '';

  // Try to infer path relative to Lovelace or HACS install
  if (basePath.includes('/community_plugin/')) {
    return '/hacsfiles/ha-card-weather-conditions';
  }

  if (basePath.includes('/local/')) {
    return '/local/ha-card-weather-conditions';
  }

  return '/hacsfiles/ha-card-weather-conditions'; // fallback
}
