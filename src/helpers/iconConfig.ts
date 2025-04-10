// helpers/iconConfig.ts
import {
  cwcClimacellDayIcons,
  cwcClimacellNightIcons,
  cwcDarkskyDayIcons,
  cwcDarkskyNightIcons,
  cwcOpenWeatherMapDayIcons,
  cwcOpenWeatherMapNightIcons,
  cwcBuienradarDayIcons,
  cwcBuienradarNightIcons,
  cwcDefaultHassDayIcons,
  cwcDefaultHassNightIcons,
} from '../icons';

import { CardConfig, IconsConfig } from '../types';

export function getIconConfig(config: CardConfig, path: string): IconsConfig {
  const model = config.weather?.icons_model?.toLowerCase();

  const defaultConfig: IconsConfig = {
      iconType: config.animation ? 'animated' : 'static',
      icons_model: 'climacell',
      iconsDay: cwcClimacellDayIcons,
      iconsNight: cwcClimacellNightIcons,
      path,
  };

  switch (model) {
      case 'darksky':
          return {
              ...defaultConfig,
              icons_model: 'darksky',
              iconsDay: cwcDarkskyDayIcons,
              iconsNight: cwcDarkskyNightIcons,
          };
      case 'openweathermap':
          return {
              ...defaultConfig,
              icons_model: 'openweathermap',
              iconsDay: cwcOpenWeatherMapDayIcons,
              iconsNight: cwcOpenWeatherMapNightIcons,
          };
      case 'buienradar':
          return {
              ...defaultConfig,
              icons_model: 'buienradar',
              iconsDay: cwcBuienradarDayIcons,
              iconsNight: cwcBuienradarNightIcons,
          };
      case 'defaulthass':
          return {
              ...defaultConfig,
              icons_model: 'defaulthass',
              iconsDay: cwcDefaultHassDayIcons,
              iconsNight: cwcDefaultHassNightIcons,
          };
      default:
          return defaultConfig;
  }
}