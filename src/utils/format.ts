// src/utils/format.ts

/**
 * Format a number with a specified number of decimal places and optional unit.
 */
export function formatNumber(value: number, decimals = 0, unit = '', locale = 'en'): string {
  const formatted = new Intl.NumberFormat(locale, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(value);

  return `${formatted}${unit ? ` ${unit}` : ''}`;
}

/**
 * Capitalizes the first letter of a string.
 */
export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncates a string to a max length, appending '…' if truncated.
 */
export function truncate(str: string, maxLength = 30): string {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength - 1) + '…';
}

/**
 * Format a timestamp to a weekday abbreviation, e.g. "Mon"
 */
export function formatDayName(date: Date, locale = 'en'): string {
  return date.toLocaleDateString(locale, { weekday: 'short' });
}

/**
 * Format a time (24h or 12h) based on locale.
 */
export function formatTime(date: Date, locale = 'en'): string {
  return date.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
  });
}
