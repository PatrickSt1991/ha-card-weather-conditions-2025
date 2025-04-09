import { ITerms } from '../types';
import { PATHS } from '../constants/paths';

/**
 * Loads a JSON file from a URL
 * @param url - The URL of the JSON file
 * @returns Promise resolving to the JSON content
 */
export async function loadJSON(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load JSON from ${url}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error loading JSON from ${url}:`, error);
    return null;
  }
}

/**
 * Map of locale codes to array indices
 */
export const LOCALE_INDICES: Record<string, number> = {
  'en': 0,
  'it': 1,
  'nl': 2,
  'es': 3,
  'de': 4,
  'fr': 5,
  'sr-latn': 6,
  'pt': 7,
  'da': 8,
  'no-no': 9,
};

/**
 * Gets translations for a specific locale
 * @param locale - The locale code
 * @param localeMap - Map of locale codes to translation indices
 * @param translations - Array of loaded translations
 * @returns Terms object with translations
 */
export function getTranslationTerms(
  locale: string,
  localeMap: Record<string, number>,
  translations?: any[]
): ITerms {
  // Default fallback terms
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
      // Add more default words as needed
    }
  };

  // If no translations available, return fallback
  if (!translations) {
    return fallbackTerms;
  }

  try {
    // Normalize locale to lowercase and find its index
    const normalizedLocale = locale.toLowerCase();
    const index = localeMap[normalizedLocale] || 0; // Default to English (0)
    
    // Get the translation data
    const translationData = translations[index];
    if (!translationData) {
      console.warn(`No translation found for locale ${locale}, using fallback`);
      return fallbackTerms;
    }
    
    return {
      windDirections: translationData.cwcLocWindDirections || fallbackTerms.windDirections,
      words: translationData.cwcTerms || fallbackTerms.words
    };
  } catch (error) {
    console.error(`Error processing translations for ${locale}:`, error);
    return fallbackTerms;
  }
}

/**
 * Load translations for all supported locales
 * @param imagePath - Path to use as base for translation files
 * @returns Promise resolving to an array of translation objects
 */
export async function loadTranslations(imagePath: string): Promise<any[]> {
  const translPath = imagePath + PATHS.TRANSLATIONS_DIR;
  
  const translationPromises = [
    loadJSON(translPath + 'en.json'),
    loadJSON(translPath + 'it.json'),
    loadJSON(translPath + 'nl.json'),
    loadJSON(translPath + 'es.json'),
    loadJSON(translPath + 'de.json'),
    loadJSON(translPath + 'fr.json'),
    loadJSON(translPath + 'sr-latn.json'),
    loadJSON(translPath + 'pt.json'),
    loadJSON(translPath + 'da.json'),
    loadJSON(translPath + 'no-NO.json')
  ];
  
  return Promise.all(translationPromises);
}

/**
 * Setup image paths for components, checks path validity, and returns the path
 * @param customPath - Optional custom path override
 * @returns Valid path string or null
 */
export function setupImagePaths(customPath?: string): string | null {
  return setupImagePath(customPath);
}