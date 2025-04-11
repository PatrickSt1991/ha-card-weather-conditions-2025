export function buildForecastData(hass, config) {
    const forecastConfig = config.weather?.forecast;
    const highs = forecastConfig?.temperature_high || {};
    const lows = forecastConfig?.temperature_low || {};
    const conditions = forecastConfig?.condition || {};
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
//# sourceMappingURL=forecastBuilder.js.map