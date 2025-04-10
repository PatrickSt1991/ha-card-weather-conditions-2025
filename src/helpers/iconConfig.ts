// helpers/iconConfig.ts
import {
   climacellIcons,
  darkskyIcons,
  openWeatherMapIcons,
  buienradarIcons,
  defaultHassIcons,
} from '../icons';

import { CardConfig, IconsConfig } from '../types';

export function getIconConfig(config: CardConfig, path: string): IconsConfig {
  const model = config.weather?.icons_model?.toLowerCase();

  const defaultConfig: IconsConfig = {
      iconType: config.animation ? 'animated' : 'static',
      icons_model: 'climacell',
      iconsDay: climacellIcons,
      iconsNight: climacellIcons,
      path,
  };

  switch (model) {
      case 'darksky':
          return {
              ...defaultConfig,
              icons_model: 'darksky',
              iconsDay: darkskyIcons,
              iconsNight: darkskyIcons,
          };
      case 'openweathermap':
          return {
              ...defaultConfig,
              icons_model: 'openweathermap',
              iconsDay: openWeatherMapIcons,
              iconsNight: openWeatherMapIcons,
          };
      case 'buienradar':
          return {
              ...defaultConfig,
              icons_model: 'buienradar',
              iconsDay: buienradarIcons,
              iconsNight: buienradarIcons,
          };
      case 'defaulthass':
          return {
              ...defaultConfig,
              icons_model: 'defaulthass',
              iconsDay: defaultHassIcons,
              iconsNight: defaultHassIcons,
          };
      default:
          return defaultConfig;
  }
}