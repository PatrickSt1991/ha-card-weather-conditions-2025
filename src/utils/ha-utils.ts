import {getMoonPhaseIcon} from "./weather-utils";
import {HomeAssistant} from "custom-card-helpers/dist";
import {IconsConfig} from "./types";
import {hacsImagePathExist, manImagePathExist} from "./ha-card-weather-conditions";

export const getWeatherIcon = (
  condition: string,
  iconsConfig: IconsConfig,
  sunState: string
): string => {
  let isNight = sunState === "below_horizon";
  let iconName = isNight
    ? iconsConfig.iconsNight[condition]
    : iconsConfig.iconsDay[condition];

  if (!iconsConfig.path) {
    console.info(`Image path not found. (hacsImagePathExist=${hacsImagePathExist})(manImagePathExist=${manImagePathExist})`);
  }

  if (iconName === undefined) {
    console.info(`Icons issue. States: icons_model=${iconsConfig.icons_model} - isDay=${!isNight} - condition: ${condition}.`);
  }

  return `${iconsConfig.path}/${iconsConfig.iconType}/${iconName}.svg`;
};

export const getWeatherBg = (
  condition: string,
  iconsConfig: IconsConfig,
  sunState: string
): string => {
  let isNight = sunState === "below_horizon";
  let iconName = isNight
    ? iconsConfig.iconsNight[condition]
    : iconsConfig.iconsDay[condition];

  if (!iconsConfig.path) {
    console.info(`Image path not found. (hacsImagePathExist=${hacsImagePathExist})(manImagePathExist=${manImagePathExist})`);
  }

  if (iconName === undefined) {
    console.info(`Icons issue. States: icons_model=${iconsConfig.icons_model} - isDay=${!isNight} - condition: ${condition}.`);
  }

  return `${iconsConfig.path}/background/${iconName}`;
};

export const getUnit = (hass: HomeAssistant, measure: string): string => {
  const lengthUnit = hass.config.unit_system.length;

  switch (measure) {
    case "air_pressure":
      return lengthUnit === "km" ? "hPa" : "inHg";
    case "length":
      return lengthUnit;
    case "precipitation":
      return lengthUnit === "km" ? "mm" : "in";
    default:
      return hass.config.unit_system[measure] || "";
  }
};

export const getWindDirections = (wd: number, cwcLocWindDirections): string | null => {
  if (wd < 0 || wd > 360) {
    console.log("Enter a degree between 0 and 360 degrees.");
    return null;
  }

  const directions = [
    "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
    "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"
  ];
  const index = Math.round(wd / 22.5);
  return cwcLocWindDirections[directions[index]];
};

export function getMoonIcon(phase: string): string {
  return cwcMoonPhaseIcons[phase.toLowerCase()];
}
