import { HomeAssistant } from "custom-card-helpers";
import { CardConfig, IconsConfig, ITerms } from "../types";
import { getImagePath } from "./imagePath";
import { getLocale, getTranslations } from "./localization";
import { numberFormat_0dec, numberFormat_1dec } from "../utils/format";
import { 
  climacellDayIcons, 
  climacellNightIcons 
} from "../icons/climacell";
import {
  darkskyDayIcons,
  darkskyNightIcons
} from "../icons/darksky";
import {
  openWeatherMapDayIcons,
  openWeatherMapNightIcons
} from "../icons/openweathermap";
import {
  buienradarDayIcons,
  buienradarNightIcons
} from "../icons/buienradar";
import {
  defaultHassDayIcons,
  defaultHassNightIcons
} from "../icons/hass";

const CONSOLE_PREFIX = "%c WEATHER-CONDITION-CARD %c";
const CONSOLE_VERSION = "2.0.0";
const CONSOLE_STYLE_1 = "color: white; background: green; font-weight: 700;";
const CONSOLE_STYLE_2 = "color: green; background: white; font-weight: 700;";
const CONSOLE_STYLE_3 = "color: black; background: white; font-weight: 700;";

/**
 * Validates and sets up the configuration for the weather card
 * @param config - The card configuration
 * @param hass - The Home Assistant instance
 * @returns Configuration object with processed settings
 */
export function setupConfig(config: CardConfig, hass: HomeAssistant) {
  console.log({ card_config: config });

  if (!config) {
    throw new Error("Invalid configuration");
  }

  // Process card name
  const name = config.name && config.name.length > 0 ? config.name : '';

  // Process language setting
  const language = config.language && config.language.length > 0 
    ? config.language.toLowerCase() 
    : 'en';

  // Setup translations
  const { terms, success } = getTranslations(language);
  
  if (success) {
    console.info(
      `${CONSOLE_PREFIX} ${CONSOLE_VERSION} %c card "${name}", locale is '${language}'.`,
      CONSOLE_STYLE_1, 
      CONSOLE_STYLE_2, 
      CONSOLE_STYLE_3
    );
  } else {
    console.info(
      `${CONSOLE_PREFIX} ${CONSOLE_VERSION} %c card "${name}" unable to use '${language}' locale, set as default 'en'.`,
      CONSOLE_STYLE_1, 
      CONSOLE_STYLE_2, 
      CONSOLE_STYLE_3
    );
  }

  // Setup number formatters
  setupNumberFormatters(language);

  // Process display settings
  const display = {
    top: config.display ? config.display.some(item => 'top' === item.toLowerCase()) : true,
    current: config.display ? config.display.some(item => 'current' === item.toLowerCase()) : true,
    forecast: config.display ? config.display.some(item => 'forecast' === item.toLowerCase()) : true,
  };

  // Detect available features
  const features = {
    hasCurrent: Boolean(config.weather?.current),
    hasForecast: Boolean(config.weather?.forecast),
    hasMeteogram: Boolean(config.weather?.forecast?.meteogram),
    hasAirQuality: Boolean(config.air_quality),
    hasPollen: Boolean(config.pollen && (config.pollen.tree || config.pollen.weed || config.pollen.grass)),
    hasUv: Boolean(config.uv),
    hasAlert: Boolean(config.alert),
    hasSea: Boolean(config.sea),
  };

  // Setup icons configuration
  const iconsConfig = setupIconsConfig(config);

  return {
    name,
    language,
    terms,
    display,
    features,
    iconsConfig,
    config,
    invalidConfig: false,
  };
}

/**
 * Sets up the number formatters for the current language
 * @param language - The language code
 */
function setupNumberFormatters(language: string): void {
  numberFormat_0dec.setFormatter(new Intl.NumberFormat(language, { maximumFractionDigits: 0 }));
  numberFormat_1dec.setFormatter(new Intl.NumberFormat(language, { maximumFractionDigits: 1 }));
}

/**
 * Sets up the icons configuration based on card settings
 * @param config - The card configuration
 * @returns The icons configuration object
 */
function setupIconsConfig(config: CardConfig): IconsConfig {
  const imagePath = getImagePath();
  const iconType = config.animation ? "animated" : "static";
  let iconsDay = climacellDayIcons;
  let iconsNight = climacellNightIcons;
  let iconsModel = "climacell";

  // Set the icon model based on configuration
  if (config.weather?.icons_model) {
    switch (config.weather.icons_model.toLowerCase()) {
      case 'darksky':
        iconsDay = darkskyDayIcons;
        iconsNight = darkskyNightIcons;
        iconsModel = "darksky";
        break;
      case 'openweathermap':
        iconsDay = openWeatherMapDayIcons;
        iconsNight = openWeatherMapNightIcons;
        iconsModel = "openweathermap";
        break;
      case 'buienradar':
        iconsDay = buienradarDayIcons;
        iconsNight = buienradarNightIcons;
        iconsModel = "buienradar";
        break;
      case 'defaulthass':
        iconsDay = defaultHassDayIcons;
        iconsNight = defaultHassNightIcons;
        iconsModel = "defaulthass";
        break;
    }
  }

  return {
    path: imagePath,
    iconType,
    iconsDay,
    iconsNight,
    icons_model: iconsModel,
  };
}