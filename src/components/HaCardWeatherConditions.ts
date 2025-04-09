import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';

// Import styles
import baseStyle from '../styles/base';
import summaryStyle from '../styles/summary';
import meterStyle from '../styles/meter';
import forecastStyle from '../styles/forecast';
import cameraStyle from '../styles/camera';
import dayNightStyle from '../styles/dayNight';
import { getSeaStyle } from '../styles/sea';

// Import icon sets
import {
  cwcClimacellDayIcons,
  cwcClimacellNightIcons,
  cwcClimacellDayBg
} from '../icons/climacell';
import { cwcDarkskyDayIcons, cwcDarkskyNightIcons } from '../icons/darksky';
import { cwcOpenWeatherMapDayIcons, cwcOpenWeatherMapNightIcons } from '../icons/openweathermap';
import { cwcBuienradarDayIcons, cwcBuienradarNightIcons } from '../icons/buienradar';
import { cwcDefaultHassDayIcons, cwcDefaultHassNightIcons } from '../icons/hass';

// Import types
import { IconsConfig, ITerms, CardConfig } from '../types';

// Import helpers
import { getTranslationTerms, loadTranslations, LOCALE_INDICES } from '../helpers/localization';
import { initializeConfig } from '../helpers/config';
import { setupImagePath, determineImagePath } from '../helpers/imagePath';
import { FeatureFlags, detectFeatures, determineSectionVisibility } from '../helpers/featureFlags';
import { PATHS, CONSOLE_STYLES } from '../constants/paths';

// Import renderers
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
  
  // Stateful properties
  @state() private iconConfig!: IconsConfig;
  @state() private terms!: ITerms;
  @state() private flags!: FeatureFlags;
  @state() private imagePath: string | null = null;
  @state() private visibility: Record<string, boolean> = {};
  @state() private translations: any[] = [];
  @state() private initialized: boolean = false;
  @state() private invalidConfig: boolean = false;
  
  static styles = [
    baseStyle,
    summaryStyle,
    forecastStyle,
    meterStyle,
    cameraStyle,
    dayNightStyle,
    css`${getSeaStyle(PATHS.HACS_IMAGE_PATH)}` // Default path, will be updated
  ];

  /**
   * Set configuration and initialize the component
   * @param config - The card configuration
   */
  public setConfig(config: CardConfig): void {
    if (!config) {
      this.invalidConfig = true;
      throw new Error("Invalid configuration");
    }
    
    try {
      // 1. Normalize configuration
      this.config = initializeConfig(config);
      
      // 2. Setup image path
      this.imagePath = setupImagePath(this.config.image_path);
      
      // 3. Initialize icon configuration
      this._setupIconConfig();
      
      // 4. Set up formatter based on locale
      this._setupFormatters();
      
      // 5. Detect features and visibility
      this._updateFeatureFlags();
      
      // 6. Start async initialization
      this._initializeAsync();
    } catch (error) {
      console.error('Error initializing weather card:', error);
      this.invalidConfig = true;
    }
  }
  
  /**
   * Component lifecycle method called on first render
   */
  protected firstUpdated(changedProps: PropertyValues): void {
    super.firstUpdated(changedProps);
    
    if (!this.initialized && this.config) {
      // Additional initialization after first render if needed
    }
  }
  
  /**
   * Initialize asynchronous operations (image path validation, translations)
   */
  private async _initializeAsync(): Promise<void> {
    if (!this.config) return;
    
    try {
      // Validate and update image path
      const validatedPath = await determineImagePath(this.config.image_path);
      if (validatedPath !== this.imagePath) {
        this.imagePath = validatedPath;
      }
      
      // Load translations
      if (this.imagePath) {
        const translations = await loadTranslations(this.imagePath);
        this.translations = translations;
        this._loadTranslations();
      }
      
      this.initialized = true;
      this.requestUpdate();
    } catch (error) {
      console.error('Async initialization error:', error);
    }
  }
  
  /**
   * Configure icon set based on configuration
   */
  private _setupIconConfig(): void {
    if (!this.config?.weather?.icons_model) {
      // Default to climacell icons
      this.iconConfig = {
        iconType: this.config?.animation ? "animated" : "static",
        icons_model: "climacell",
        iconsDay: cwcClimacellDayIcons,
        iconsNight: cwcClimacellNightIcons,
        path: this.imagePath
      };
      return;
    }
    
    // Select icon set based on configuration
    const iconModel = this.config.weather.icons_model.toLowerCase();
    
    switch (iconModel) {
      case 'darksky':
        this.iconConfig = {
          iconType: this.config.animation ? "animated" : "static",
          icons_model: "darksky",
          iconsDay: cwcDarkskyDayIcons,
          iconsNight: cwcDarkskyNightIcons,
          path: this.imagePath
        };
        break;
      case 'openweathermap':
        this.iconConfig = {
          iconType: this.config.animation ? "animated" : "static",
          icons_model: "openweathermap",
          iconsDay: cwcOpenWeatherMapDayIcons,
          iconsNight: cwcOpenWeatherMapNightIcons,
          path: this.imagePath
        };
        break;
      case 'buienradar':
        this.iconConfig = {
          iconType: this.config.animation ? "animated" : "static",
          icons_model: "buienradar",
          iconsDay: cwcBuienradarDayIcons,
          iconsNight: cwcBuienradarNightIcons,
          path: this.imagePath
        };
        break;
      case 'defaulthass':
        this.iconConfig = {
          iconType: this.config.animation ? "animated" : "static",
          icons_model: "defaulthass",
          iconsDay: cwcDefaultHassDayIcons,
          iconsNight: cwcDefaultHassNightIcons,
          path: this.imagePath
        };
        break;
      default:
        // Default to climacell
        this.iconConfig = {
          iconType: this.config.animation ? "animated" : "static",
          icons_model: "climacell",
          iconsDay: cwcClimacellDayIcons,
          iconsNight: cwcClimacellNightIcons,
          path: this.imagePath
        };
    }
  }
  
  /**
   * Set up number formatters based on locale
   */
  private _setupFormatters(): void {
    if (!this.config) return;
    
    const locale = this.config.language || this.hass?.language || navigator.language || 'en';
    
    // These will be used by renderer functions
    window.numberFormat_0dec = new Intl.NumberFormat(locale, { maximumFractionDigits: 0 });
    window.numberFormat_1dec = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 });
  }
  
  /**
   * Load translations based on configured language
   */
  private _loadTranslations(): void {
    if (!this.config) return;
    
    // Determine user's locale
    const locale = this.config.language || this.hass?.language || navigator.language || 'en';
    
    // Initialize terms with translations
    this.terms = getTranslationTerms(locale, LOCALE_INDICES, this.translations);
    
    // Log successful locale loading
    console.info(
      `%c WEATHER-CONDITION-CARD %c card "${this.config.name || ''}", locale is '${locale}'.`,
      CONSOLE_STYLES.PRIMARY,
      CONSOLE_STYLES.SECONDARY
    );
  }
  
  /**
   * Update feature flags based on configuration
   */
  private _updateFeatureFlags(): void {
    if (!this.config) return;
    
    // Detect available features
    this.flags = detectFeatures(this.config);
    
    // Determine which sections should be visible
    this.visibility = determineSectionVisibility(this.config, this.flags);
  }
  
  /**
   * Get the size of the card for layout calculations
   */
  public getCardSize(): number {
    let size = 1; // Base size
    
    // Add size for each enabled section
    if (this.visibility.showSummary) size += 1;
    if (this.visibility.showPresent) size += 1;
    if (this.visibility.showForecast) size += 2;
    if (this.visibility.showAlert) size += 1;
    if (this.visibility.showUv) size += 1;
    if (this.visibility.showAirQuality) size += 1;
    if (this.visibility.showPollen) size += 1;
    if (this.visibility.showSea) size += 2;
    if (this.flags.hasMeteogram) size += 1;
    
    return size;
  }

  /**
   * Render camera for meteogram or other camera entities
   */
  private _renderCamera(entityId: string): any {
    if (!this.hass || !entityId) return '';
    
    const camera = this.hass.states[entityId];
    if (!camera) return '';
    
    const entityPicture = camera.attributes.entity_picture;
    if (!entityPicture) return '';
    
    return html`
      <div @click=${(e: Event) => this._handlePopup(e, entityId)} class="camera-container">
        <div class="camera-image">
          <img src="${entityPicture}" alt="${camera.attributes.friendly_name || entityId}"/>
        </div>
      </div>
    `;
  }
  
  /**
   * Handle click to open entity popup
   */
  private _handlePopup(e: Event, entityId: string): void {
    e.stopPropagation();
    
    const event = new Event('hass-more-info', { composed: true });
    (event as any).detail = { entityId };
    this.dispatchEvent(event);
  }
  
  /**
   * Main render function
   */
  protected render() {
    // Show error if configuration is invalid
    if (this.invalidConfig || !this.config || !this.hass) {
      return html`
        <ha-card class="ha-card-weather-conditions">
          <div class="banner">
            <div class="header">ha-card-weather-conditions</div>
          </div>
          <div class="content">
            Configuration ERROR!
          </div>
        </ha-card>
      `;
    }
    
    // Get background class if available
    let backgroundClass = '';
    if (this.config.weather?.current?.current_conditions && this.hass.states[this.config.weather.current.current_conditions]) {
      const condition = this.hass.states[this.config.weather.current.current_conditions].state;
      backgroundClass = `bg-${condition}`;
    }
    
    return html`
      <ha-card class="ha-card-weather-conditions">
        <div class="nd-container ${backgroundClass}">
          ${this.visibility.showSummary ? renderSummary(
            this.hass,
            this.config.weather?.current,
            this.config.name,
            this.iconConfig,
            this.terms
          ) : ''}
          
          ${this.visibility.showAlert ? renderAlert(
            this.hass,
            this.config.alert,
            this.visibility.showSummary
          ) : ''}
          
          ${this.visibility.showPresent ? renderPresent(
            this.hass,
            this.config.weather?.current,
            this.config.weather?.forecast,
            this.config.language || 'en',
            this.terms,
            this.visibility.showSummary || this.visibility.showAlert
          ) : ''}
          
          ${this.visibility.showUv ? renderUv(
            this.hass,
            this.config.uv,
            this.visibility.showSummary || this.visibility.showAlert || this.visibility.showPresent
          ) : ''}
          
          ${this.visibility.showAirQuality ? renderAirQualities(
            this.hass,
            this.config.air_quality,
            this.visibility.showSummary || this.visibility.showAlert || 
            this.visibility.showPresent || this.visibility.showUv
          ) : ''}
          
          ${this.visibility.showPollen ? renderPollens(
            this.hass,
            this.config.pollen,
            this.visibility.showSummary || this.visibility.showAlert || 
            this.visibility.showPresent || this.visibility.showUv || 
            this.visibility.showAirQuality
          ) : ''}
          
          ${this.visibility.showForecast ? renderForecasts(
            this.hass,
            this.config.weather?.current,
            this.config.weather?.forecast,
            this.iconConfig,
            this.config.language || 'en',
            this.visibility.showSummary || this.visibility.showAlert || 
            this.visibility.showPresent || this.visibility.showUv || 
            this.visibility.showAirQuality || this.visibility.showPollen
          ) : ''}
          
          ${this.visibility.showSea ? renderSeaForecast(
            this.hass,
            this.config.sea,
            this.iconConfig,
            this.config.language || 'en',
            this.visibility.showSummary || this.visibility.showAlert || 
            this.visibility.showPresent || this.visibility.showUv || 
            this.visibility.showAirQuality || this.visibility.showPollen || 
            this.visibility.showForecast
          ) : ''}
          
          ${this.flags.hasMeteogram && this.config.weather?.forecast?.meteogram ? 
            this._renderCamera(this.config.weather.forecast.meteogram) : ''}
          
          ${this.config.camera ? this._renderCamera(this.config.camera) : ''}
        </div>
      </ha-card>
    `;
  }
}

// Add typing for global formatters
declare global {
  interface Window {
    numberFormat_0dec: Intl.NumberFormat;
    numberFormat_1dec: Intl.NumberFormat;
  }
}