/**
 * Format a number with a specified number of decimal places and optional unit.
 */
export declare function formatNumber(value: number, decimals?: number, unit?: string, locale?: string): string;
/**
 * Capitalizes the first letter of a string.
 */
export declare function capitalize(str: string): string;
/**
 * Truncates a string to a max length, appending '…' if truncated.
 */
export declare function truncate(str: string, maxLength?: number): string;
/**
 * Format a timestamp to a weekday abbreviation, e.g. "Mon"
 */
export declare function formatDayName(date: Date, locale?: string): string;
/**
 * Format a time (24h or 12h) based on locale.
 */
export declare function formatTime(date: Date, locale?: string): string;
//# sourceMappingURL=format.d.ts.map