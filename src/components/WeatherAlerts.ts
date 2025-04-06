// src/components/WeatherAlerts.ts
import { html } from 'lit';
import { AlertConfig, AlertItemConfig, Uv } from '../types/weather-types';
import { getUnit, getWeatherIcon, numFormat } from '../utils/weather-utils';

export const renderWeatherAlert = (
  hass: any,
  alertSensor: Alert,
  border: boolean
) => {
  let alerts = Object.entries(alertSensor);

  return html`
    <div class="forecast clear" style="margin-top: 4px; margin-bottom: 4px;">
      ${alerts.map((alert) => {
        let key = alert[0], value: AlertItem = alert[1], show: boolean = true;
        let sensor = hass.states[value.entity];

        if (undefined !== sensor) {
          let state: string = "- -", risk: number = 0, icon: string;

          if (sensor.state && "unknown" !== sensor.state) {
            icon = undefined !== value.icon ? value.icon : sensor.attributes.icon;

            if (undefined !== value['min'] && undefined !== value['max']) {
              state = numFormat(sensor.state);
              risk = Math.abs(((parseFloat(state) - value.min) * 100) / (value.max - value.min)) / 100;
              if (undefined !== value.show_if_ge && parseFloat(state) < value.show_if_ge)
                show = false;
            } else {
              state = sensor.state;
              risk = 'on' == state.toLowerCase() ? 1 : 0;

              if (value.show_if_on && 'off' == state.toLowerCase())
                show = false;
            }
          }

          let styleColors = colorByPercent(risk);

          return show
            ? html`
                <div class="day">
                  <div
                    id="rectangle"
                    style="color: ${styleColors.color}; background: ${styleColors.bgcolor}; width: 32px; height: 32px; display: table; margin: 0 auto;"
                  >
                    <ha-icon icon="${icon}"></ha-icon>
                  </div>
                  <div class="lowTemp">${state}</div>
                </div>
              `
            : "";
        } else return "";
      })}
    </div>
  `;
};

function colorByPercent(value: number) {
  let hue = ((1 - value) * 120).toString(10);

  let tcolor = getContrastYIQ(HSLToHex(hue, 100, 50));

  return { color: tcolor, bgcolor: ["hsl(", hue, ",100%,50%)"].join("") };
}

function getContrastYIQ(hexcolor: string) {
  hexcolor = hexcolor.replace("#", "");
  let r = parseInt(hexcolor.substr(0, 2), 16);
  let g = parseInt(hexcolor.substr(2, 2), 16);
  let b = parseInt(hexcolor.substr(4, 2), 16);
  let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return yiq >= 128 ? 'black' : 'white';
}

function HSLToHex(h: number, s: number, l: number) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs((h / 60) % 2 - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }

  let rs = Math.round((r + m) * 255).toString(16);
  let gs = Math.round((g + m) * 255).toString(16);
  let bs = Math.round((b + m) * 255).toString(16);

  if (rs.length == 1) rs = "0" + rs;
  if (gs.length == 1) gs = "0" + gs;
  if (bs.length == 1) bs = "0" + bs;

  return "#" + rs + gs + bs;
}
