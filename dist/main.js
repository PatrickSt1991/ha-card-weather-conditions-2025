// Main entry point for the weather conditions card
import { HaCardWeatherConditions } from './components/HaCardWeatherConditions';
// Version info for console output
const VERSION = '2.0.0';
console.info('%c WEATHER-CONDITION-CARD %c ' + VERSION, 'color: white; background: green; font-weight: 700;', 'color: green; background: white; font-weight: 700;');
// Export component for Home Assistant to use
customElements.define('ha-card-weather-conditions', HaCardWeatherConditions);
// Export any other components or utilities that might be needed by other modules
export { HaCardWeatherConditions };
//# sourceMappingURL=main.js.map