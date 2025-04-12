import { CardConfig } from '../types';
/**
 * Interface defining feature availability flags for the weather card
 */
export interface FeatureFlags {
    hasCurrent: boolean;
    hasForecast: boolean;
    hasMeteogram: boolean;
    hasAirQuality: boolean;
    hasPollen: boolean;
    hasUv: boolean;
    hasAlert: boolean;
    hasSea: boolean;
}
/**
 * Analyzes configuration to determine which features should be enabled
 * @param config - The card configuration object
 * @returns Feature flag object with boolean values for each feature
 */
export declare function detectFeatures(config: CardConfig): FeatureFlags;
/**
 * Determines which sections should be visible based on configuration and feature availability
 * @param config - The card configuration object
 * @param flags - The feature flags object
 * @returns Object with boolean values for section visibility
 */
export declare function determineSectionVisibility(config: CardConfig, flags: FeatureFlags): Record<string, boolean>;
//# sourceMappingURL=featureFlags.d.ts.map