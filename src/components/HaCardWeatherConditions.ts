// src/HaCardWeatherConditions.ts
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';

import { initializeConfig } from './helpers/config';
import { setupImagePaths } from './helpers/localization';
import { styles } from './styles';
import { CardConfig, IconsConfig, ITerms } from './types';
import { FeatureFlags } from './helpers/featureFlags';

@customElement('ha-card-weather-conditions')
export class HaCardWeatherConditions extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private config?: CardConfig;
  @state() private iconConfig?: IconsConfig;
  @state() private flags?: FeatureFlags;
  @state() private terms?: ITerms;
  @state() private imagePath: string | null = null;
  @state() private invalidConfig = false;

  static styles = styles;

  public async setConfig(config: CardConfig): Promise<void> {
    try {
      const imagePath = setupImagePaths();
      const { config: normalized, iconConfig, flags, terms } = await initializeConfig(config, imagePath || '');

      this.config = normalized;
      this.iconConfig = iconConfig;
      this.flags = flags;
      this.terms = terms;
      this.imagePath = imagePath;
    } catch (err) {
      console.error('Error in setConfig:', err);
      this.invalidConfig = true;
    }
  }

  public getCardSize(): number {
    return 1;
  }

  protected render() {
    if (this.invalidConfig || !this.config || !this.hass) {
      return html`
        <ha-card class="ha-card-weather-conditions">
          <div class="banner">
            <div class="header">ha-card-weather-conditions</div>
          </div>
          <div class="content">Configuration ERROR!</div>
        </ha-card>
      `;
    }

    return html`
      <ha-card class="ha-card-weather-conditions">
        <div class="nd-container">
          <!-- RENDER LOGIC START -->
          <!-- Example: -->
          <!-- ${this.flags?.hasCurrent ? renderSummary({...}) : ''} -->
          <!-- Add more renderers here using flags and data -->
        </div>
      </ha-card>
    `;
  }
}
