var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// src/components/HaCardWeatherConditions.ts
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { initializeConfig } from '../helpers/config';
import { setupImagePaths } from '../helpers/localization';
import { styles } from '../styles';
import { buildForecastData } from '../helpers/forecastBuilder';
// Renderers
import { renderSummary } from '../renderers/summary';
import { renderPresent } from '../renderers/present';
import { renderForecasts } from '../renderers/forecast';
import { renderPollens } from '../renderers/pollen';
import { renderAirQualities } from '../renderers/airQuality';
import { renderUv } from '../renderers/uv';
import { renderAlert } from '../renderers/alert';
import { renderSeaForecast } from '../renderers/sea';
let HaCardWeatherConditions = class HaCardWeatherConditions extends LitElement {
    hass;
    config;
    iconConfig;
    flags;
    terms;
    invalidConfig = false;
    static styles = styles;
    async setConfig(config) {
        try {
            const imagePath = setupImagePaths();
            const { config: normalized, iconConfig, flags, terms } = await initializeConfig(config, imagePath || '');
            this.config = normalized;
            this.iconConfig = iconConfig;
            this.flags = flags;
            this.terms = terms;
        }
        catch (err) {
            console.error('Error in setConfig:', err);
            this.invalidConfig = true;
        }
    }
    getCardSize() {
        return 2;
    }
    render() {
        const { hass, config, iconConfig, terms, flags } = this;
        // Show a more helpful loading state before configuration is ready
        if (!hass || !config || !iconConfig || !terms || !flags) {
            return html `
        <ha-card class="ha-card-weather-conditions">
          <div class="content">Loading weather card...</div>
        </ha-card>
      `;
        }
        // Fallback for invalid configuration
        if (this.invalidConfig) {
            return html `
        <ha-card class="ha-card-weather-conditions">
          <div class="banner">
            <div class="header">ha-card-weather-conditions</div>
          </div>
          <div class="content">Configuration ERROR!</div>
        </ha-card>
      `;
        }
        const options = { hass, config, terms, icons: iconConfig };
        return html `
      <ha-card class="ha-card-weather-conditions">
        <div class="nd-container">
          ${flags.hasCurrent ? renderSummary(options) : ''}
          ${flags.hasCurrent ? renderPresent(options) : ''}
          ${flags.hasForecast ? renderForecasts(buildForecastData(hass, config)) : ''}
          ${flags.hasAlert ? renderAlert({ hass, config }) : ''}
          ${flags.hasAirQuality ? renderAirQualities(options) : ''}
          ${flags.hasPollen ? renderPollens(options) : ''}
          ${flags.hasUv ? renderUv(options) : ''}
          ${flags.hasSea ? renderSeaForecast({ hass, config }) : ''}
        </div>
      </ha-card>
    `;
    }
};
__decorate([
    property({ attribute: false })
], HaCardWeatherConditions.prototype, "hass", void 0);
__decorate([
    state()
], HaCardWeatherConditions.prototype, "config", void 0);
__decorate([
    state()
], HaCardWeatherConditions.prototype, "iconConfig", void 0);
__decorate([
    state()
], HaCardWeatherConditions.prototype, "flags", void 0);
__decorate([
    state()
], HaCardWeatherConditions.prototype, "terms", void 0);
__decorate([
    state()
], HaCardWeatherConditions.prototype, "invalidConfig", void 0);
HaCardWeatherConditions = __decorate([
    customElement('ha-card-weather-conditions')
], HaCardWeatherConditions);
export { HaCardWeatherConditions };
//# sourceMappingURL=HaCardWeatherConditions.js.map