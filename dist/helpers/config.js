import { getIconConfig } from './iconConfig';
import { getLocale, getTranslations } from './localization';
import { detectFeatures } from './featureFlags';
/**
 * Normalize and validate the configuration
 * @param config - The raw config object passed into setConfig
 */
export async function initializeConfig(config, imagePath) {
    if (!config)
        throw new Error('Invalid configuration');
    const normalized = {
        ...config,
        name: config.name || '',
        language: getLocale(config.language),
        display: config.display || ['top', 'current', 'forecast'],
    };
    const flags = detectFeatures(normalized);
    const iconConfig = getIconConfig(normalized, imagePath);
    const terms = await getTranslations(imagePath, normalized.language ?? 'en');
    return {
        config: normalized,
        iconConfig,
        flags,
        terms,
    };
}
//# sourceMappingURL=config.js.map