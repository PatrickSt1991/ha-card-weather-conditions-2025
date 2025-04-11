// src/utils/format.ts
/**
 * Format a number with a specified number of decimal places and optional unit.
 */
export function formatNumber(value, decimals = 0, unit = '', locale = 'en') {
    const formatted = new Intl.NumberFormat(locale, {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
    }).format(value);
    return `${formatted}${unit ? ` ${unit}` : ''}`;
}
/**
 * Capitalizes the first letter of a string.
 */
export function capitalize(str) {
    if (!str)
        return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * Truncates a string to a max length, appending '…' if truncated.
 */
export function truncate(str, maxLength = 30) {
    if (!str || str.length <= maxLength)
        return str;
    return str.slice(0, maxLength - 1) + '…';
}
/**
 * Format a timestamp to a weekday abbreviation, e.g. "Mon"
 */
export function formatDayName(date, locale = 'en') {
    return date.toLocaleDateString(locale, { weekday: 'short' });
}
/**
 * Format a time (24h or 12h) based on locale.
 */
export function formatTime(date, locale = 'en') {
    return date.toLocaleTimeString(locale, {
        hour: '2-digit',
        minute: '2-digit',
    });
}
//# sourceMappingURL=format.js.map