import { CardConfig, ITerms } from '../types';
import { getIconConfig } from './iconConfig';
import { FeatureFlags } from './featureFlags';
/**
 * Normalize and validate the configuration
 * @param config - The raw config object passed into setConfig
 */
export declare function initializeConfig(config: CardConfig, imagePath: string): Promise<{
    config: CardConfig;
    iconConfig: ReturnType<typeof getIconConfig>;
    flags: FeatureFlags;
    terms: ITerms;
}>;
//# sourceMappingURL=config.d.ts.map