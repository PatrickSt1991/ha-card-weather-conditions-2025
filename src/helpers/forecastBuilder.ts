// src/helpers/forecastBuilder.ts
import { HomeAssistant } from 'custom-card-helpers';
import { CardConfig, ForecastData, DayValue } from '../types';

export function buildForecastData(hass: HomeAssistant, config: CardConfig): ForecastData {
  const forecastConfig = config.weather?.forecast;

  const highs: DayValue = forecastConfig?.temperature_high || {};
  const lows: DayValue = forecastConfig?.temperature_low || {};
  const conditions: DayValue = forecastConfig?.condition || {};

  const days = Object.keys(highs);

  return {
    daily: days.map(date => {
      const highId = highs[date];
      const lowId = lows[date];
      const condId = conditions[date];

      const high = highId ? parseFloat(hass.states[highId]?.state || '0') : 0;
      const low = lowId ? parseFloat(hass.states[lowId]?.state || '0') : 0;
      const condition = condId ? hass.states[condId]?.state || 'clear' : 'clear';

      return {
        date,
        condition,
        high,
        low,
      };
    }),
  };
}
