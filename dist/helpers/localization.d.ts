import { ITerms } from '../types';
export declare const TRANSLATIONS: {
    en: any;
    it: any;
    nl: any;
    es: any;
    de: any;
    fr: any;
    sr: any;
    pt: any;
    da: any;
    no: any;
};
/**
 * Map of language codes to array indices for translation files
 */
export declare const LOCALE_MAP: Record<string, number>;
/**
 * Default locale to use if the requested one is not found
 */
export declare const DEFAULT_LOCALE = "en";
/**
 * Translation file names, ordered to match LOCALE_MAP
 */
export declare const TRANSLATION_FILES: string[];
/**
 * Default wind directions for fallback translations
 */
export declare const DEFAULT_WIND_DIRECTIONS: string[];
/**
 * Default fallback translation terms (used when JSON is missing or invalid)
 */
export declare const DEFAULT_TERMS_BASE: Record<string, string>;
/**
 * Default words structure that satisfies the ITerms.words requirement
 */
export declare const DEFAULT_WORDS: {
    [key: string]: string | string[];
    humidity: string;
    pressure: string;
    visibility: string;
    wind: string;
    days: string[];
};
/**
 * Complete default terms that match the ITerms interface
 */
export declare const DEFAULT_TERMS: ITerms;
/**
 * Sets up image paths and determines which path is valid by checking directory existence
 * @returns {string} The valid image path or empty string if none found
 */
export declare function setupImagePaths(): string;
/**
 * Get the normalized locale code
 * @param language - The language code from config
 * @returns Normalized locale code
 */
export declare function getLocale(language?: string): string;
/**
 * Get translations for the specified locale
 * @param imagePath - The base path for loading translation files
 * @param locale - The locale to load translations for
 * @returns Object containing translated terms
 */
export declare function getTranslations(imagePath: string, locale: string): Promise<ITerms>;
//# sourceMappingURL=localization.d.ts.map