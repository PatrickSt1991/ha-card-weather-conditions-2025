/**
 * Number formatter with 0 decimal places
 */
class NumberFormatter {
    private formatter: Intl.NumberFormat;
  
    constructor() {
      this.formatter = new Intl.NumberFormat('en', { maximumFractionDigits: 0 });
    }
  
    setFormatter(formatter: Intl.NumberFormat) {
      this.formatter = formatter;
    }
  
    format(value: number): string {
      return this.formatter.format(value);
    }
  }
  
  /**
   * Singleton instances for number formatters
   */
  export const numberFormat_0dec = new NumberFormatter();
  export const numberFormat_1dec = new NumberFormatter();
  
  /**
   * Format a temperature value with the correct unit
   * @param value - The temperature value
   * @param units - Temperature unit (C or F)
   * @returns Formatted temperature string
   */
  export function formatTemperature(value: number, units: string = 'C'): string {
    return `${numberFormat_1dec.format(value)}°${units}`;
  }
  
  /**
   * Format a percentage value
   * @param value - The percentage value (0-100)
   * @returns Formatted percentage string
   */
  export function formatPercentage(value: number): string {
    return `${numberFormat_0dec.format(value)}%`;
  }
  
  /**
   * Format a wind speed value with the correct unit
   * @param value - The wind speed value
   * @param units - Wind speed unit (m/s, km/h, mph)
   * @returns Formatted wind speed string
   */
  export function formatWindSpeed(value: number, units: string = 'm/s'): string {
    return `${numberFormat_1dec.format(value)} ${units}`;
  }
  
  /**
   * Format a pressure value with the correct unit
   * @param value - The pressure value
   * @param units - Pressure unit (hPa, inHg, mmHg)
   * @returns Formatted pressure string
   */
  export function formatPressure(value: number, units: string = 'hPa'): string {
    return `${numberFormat_0dec.format(value)} ${units}`;
  }
  
  /**
   * Format a distance value with the correct unit
   * @param value - The distance value
   * @param units - Distance unit (km, mi)
   * @returns Formatted distance string
   */
  export function formatDistance(value: number, units: string = 'km'): string {
    return `${numberFormat_1dec.format(value)} ${units}`;
  }
  
  /**
   * Format a precipitation value with the correct unit
   * @param value - The precipitation value
   * @param units - Precipitation unit (mm, in)
   * @returns Formatted precipitation string
   */
  export function formatPrecipitation(value: number, units: string = 'mm'): string {
    return `${numberFormat_1dec.format(value)} ${units}`;
  }
  
  /**
   * Convert a timestamp to a localized date/time string
   * @param timestamp - The timestamp to format
   * @param locale - The locale to use for formatting
   * @param options - Intl.DateTimeFormat options
   * @returns Formatted date/time string
   */
  export function formatDateTime(
    timestamp: number, 
    locale: string = 'en',
    options: Intl.DateTimeFormatOptions = { 
      weekday: 'short', 
      hour: 'numeric', 
      minute: 'numeric' 
    }
  ): string {
    return new Intl.DateTimeFormat(locale, options).format(new Date(timestamp));
  }
  
  /**
   * Format a day of the week
   * @param date - The date object
   * @param locale - The locale to use for formatting
   * @returns Day of week string
   */
  export function formatDayOfWeek(date: Date, locale: string = 'en'): string {
    return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date);
  }