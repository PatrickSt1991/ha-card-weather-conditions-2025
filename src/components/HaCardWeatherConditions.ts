// src/components/HaCardWeatherConditions.ts
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';

import { initializeConfig } from '../helpers/config';
import { setupImagePaths } from '../helpers/localization';

import { styles } from '../styles';
import { CardConfig, IconsConfig, ITerms } from '../types';
import { FeatureFlags } from '../helpers/featureFlags';
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

@customElement('ha-card-weather-conditions')
export class HaCardWeatherConditions extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() private config?: CardConfig;
  @state() private iconConfig?: IconsConfig;
  @state() private flags?: FeatureFlags;
  @state() private terms?: ITerms;
  @state() private invalidConfig = false;

  static styles = styles;

  public async setConfig(config: CardConfig): Promise<void> {
    try {
      // Get image path based on setup
      const imagePath = setupImagePaths();
      
      // Initialize configuration, iconConfig, flags, and terms
      const { config: normalized, iconConfig, flags, terms } = await initializeConfig(config, imagePath || '');

      // Update the state with the values
      this.config = normalized;
      this.iconConfig = iconConfig;
      this.flags = flags;
      this.terms = terms;

      // Trigger a re-render once the configuration is updated
      this.requestUpdate();
    } catch (err) {
      console.error('Error in setConfig:', err);
      this.invalidConfig = true;
      this.requestUpdate(); // Trigger a re-render even on error
    }
  }

  public getCardSize(): number {
    return 2; // Card size
  }

  protected render() {
    // Destructure state values
    const { hass, config, iconConfig, terms, flags } = this;

    // Show a more helpful loading state before configuration is ready
    if (!hass || !config || !iconConfig || !terms || !flags) {
      return html`
        <ha-card class="ha-card-weather-conditions">
          <div class="content">Loading weather card...</div>
        </ha-card>
      `;
    }

    // Fallback for invalid configuration
    if (this.invalidConfig) {
      return html`
        <ha-card class="ha-card-weather-conditions">
          <div class="banner">
            <div class="header">ha-card-weather-conditions</div>
          </div>
          <div class="content">Configuration ERROR!</div>
        </ha-card>
      `;
    }

    // Options passed to renderers
    const options = { hass, config, terms, icons: iconConfig };

    // Main render layout
    return html`
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
}
