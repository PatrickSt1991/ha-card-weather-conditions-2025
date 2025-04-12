// src/helpers/config.ts
import { CardConfig, ITerms } from '../types';
import { getIconConfig } from './iconConfig';
import { getLocale, getTranslations } from './localization';
import { FeatureFlags, detectFeatures } from './featureFlags';

/**
 * Normalize and validate the configuration
 * @param config - The raw config object passed into setConfig
 */
export async function initializeConfig(config: CardConfig, imagePath: string): Promise<{
  config: CardConfig;
  iconConfig: ReturnType<typeof getIconConfig>;
  flags: FeatureFlags;
  terms: ITerms;
}> {
  if (!config) throw new Error('Invalid configuration');

  const normalized: CardConfig = {
    ...config,
    name: config.name || '',
    language: getLocale(config.language),
    display: config.display || ['top', 'current', 'forecast'],
  };

  const flags = detectFeatures(normalized);
  const iconConfig = getIconConfig(normalized, imagePath);
  const terms = await getTranslations(normalized.language ?? 'en');

  return {
    config: normalized,
    iconConfig,
    flags,
    terms,
  };
}