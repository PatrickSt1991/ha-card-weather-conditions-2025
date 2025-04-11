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
      const imagePath = await setupImagePaths();
      console.log()
      const { config: normalized, iconConfig, flags, terms } = await initializeConfig(config, imagePath || '');

      this.config = normalized;
      this.iconConfig = iconConfig;
      this.flags = flags;
      this.terms = terms;
    } catch (err) {
      console.error('Error in setConfig:', err);
      this.invalidConfig = true;
    }
  }

  public getCardSize(): number {
    return 2;
  }

  protected render() {
    const { hass, config, iconConfig, terms, flags } = this;

    // Show a more helpful loading state before configuration is ready
    console.log('Rendering card...');
    console.log('Hass:', hass);
    console.log('Config:', config); //Undefined
    console.log('Icon Config:', iconConfig); //Undefined
    console.log('Terms:', terms); //Undefined
    console.log('Flags:', flags); //Undefined
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

    const options = { hass, config, terms, icons: iconConfig };

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