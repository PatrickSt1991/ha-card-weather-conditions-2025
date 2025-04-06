import { HomeAssistant } from '../types/weather-types';

export const formatTemp = (value?: string, decimals = 1): string => {
  if (!value) return '--';
  const num = parseFloat(value);
  return num.toFixed(decimals);
};

export const getWeatherIcon = (
  condition: string | undefined, 
  isNight: boolean,
  icons: any
): string => {
  if (!condition) return '';
  const iconSet = isNight ? icons.night : icons.day;
  return iconSet[condition.toLowerCase()] || condition;
};

export const isNightTime = (hass: HomeAssistant, sunEntity?: string): boolean => {
  if (!sunEntity) return false;
  return hass.states[sunEntity]?.state === 'below_horizon';
};

// src/utils/weather-utils.ts (additional functions)
export const getWindDirection = (degrees: number): string => {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.round((degrees % 360) / 45);
  return directions[index % 8];
};

export const getMoonPhaseIcon = (phase: string): string => {
  const phases: Record<string, string> = {
    'new': '🌑',
    'new_moon' : "🌑",
    'waxing_crescent': '🌒',
    'first_quarter': '🌓',
    'waxing_gibbous': '🌔',
    'full': '🌕',
    'full_moon': '🌕',
    'waning_gibbous': '🌖',
    'third_quarter': '🌗',
    'last_quarter': '🌗',
    'waning_crescent': '🌘'

  };
  return phases[phase.toLowerCase()] || '🌕';
};