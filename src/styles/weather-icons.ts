type WeatherIconMap = Record<string, string>;

interface WeatherIconsProvider {
  day?: WeatherIconMap;
  night?: WeatherIconMap;
  swell?: WeatherIconMap;
  wind?: WeatherIconMap;
}

interface WeatherIconsType {
  [provider: string]: WeatherIconsProvider;
}

// Define common sets first for reuse
const buienradarDay: WeatherIconMap = {
  snowy: "snowy-3",
  "light-snow": "snowy-2",
  "snowy-rainy": "snowy-1",
  "partlycloudy-light-snow": "snowy-1",
  "partlycloudy-snow": "snowy-1",
  "partlycloudy-light-rain": "rainy-1",
  "light-rain": "rainy-1",
  rainy: "rainy-2",
  "partlycloudy-rain": "rainy-1",
  "partlycloudy-fog": "fog",
  cloudy: "cloudy-original",
  partlycloudy: "cloudy-day-2",
  "partlycloudy-lightning": "cloudy-day-1",
  lightning: "cloudy-day-1",
  clear: "day"
};

const defaulthassDay: WeatherIconMap = {
  cloudy: "cloudy-day-3",
  exceptional: "severe-thunderstorm",
  fog: "fog",
  hail: "snow-and-sleet-mix",
  lightning: "severe-thunderstorm",
  "lightning-rainy": "scattered-thunderstorms",
  partlycloudy: "cloudy-day-3",
  pouring: "rainy-6",
  rainy: "rainy-5",
  snowy: "snowy-6",
  "snowy-rainy": "snow-and-sleet-mix",
  sunny: "clear-day",
  windy: "wind",
  "windy-variant": "wind"
};

export const WeatherIcons: WeatherIconsType = {
  climacell: {
    day: {
      freezing_rain_heavy: "rainy-3",
      heavy_freezing_rain: "rainy-3",
      freezing_rain: "rainy-2",
      freezing_rain_light: "rainy-1",
      light_freezing_rain: "rainy-1",
      freezing_drizzle: "rain-and-sleet-mix",
      ice_pellets_heavy: "rain-and-snow-mix",
      heavy_ice_pellets: "rain-and-snow-mix",
      ice_pellets: "rain-and-snow-mix",
      ice_pellets_light: "rain-and-snow-mix",
      light_ice_pellets: "rain-and-snow-mix",
      snow_heavy: "snowy-3",
      heavy_snow: "snowy-3",
      snow: "snowy-2",
      snow_light: "snowy-1",
      light_snow: "snowy-1",
      flurries: "wind",
      tstorm: "tropical-storm",
      rain_heavy: "rainy-3",
      heavy_rain: "rainy-3",
      rain: "rainy-2",
      rain_light: "rainy-1",
      light_rain: "rainy-1",
      drizzle: "rainy-1",
      fog_light: "haze",
      light_fog: "haze",
      fog: "fog",
      cloudy: "cloudy-original",
      mostly_cloudy: "cloudy-day-3",
      mostly_cloudy_day: "cloudy-day-3",
      partly_cloudy: "cloudy-day-2",
      partly_cloudy_day: "cloudy-day-2",
      mostly_clear: "cloudy-day-1",
      mostly_clear_day: "cloudy-day-1",
      clear: "day",
      sunny: "day"
    },
    night: {
      freezing_rain_heavy: "rainy-6",
      heavy_freezing_rain: "rainy-6",
      freezing_rain: "rainy-5",
      freezing_rain_light: "rainy-4",
      light_freezing_rain: "rainy-4",
      snow_heavy: "snowy-6",
      heavy_snow: "snowy-6",
      snow: "snowy-5",
      snow_light: "snowy-4",
      light_snow: "snowy-4",
      rain_heavy: "rainy-6",
      heavy_rain: "rainy-6",
      rain: "rainy-5",
      rain_light: "rainy-4",
      light_rain: "rainy-4",
      drizzle: "rainy-4",
      mostly_cloudy: "cloudy-night-3",
      mostly_cloudy_night: "cloudy-night-3",
      partly_cloudy: "cloudy-night-2",
      partly_cloudy_night: "cloudy-night-2",
      mostly_clear: "cloudy-night-1",
      mostly_clear_night: "cloudy-night-1",
      clear: "night",
      clear_night: "night",
      sunny: "night"
    }
  },
  darksky: {
    day: {
      clear: "day",
      "clear-day": "day",
      rain: "rainy-2",
      snow: "snowy-2",
      sleet: "rain-and-sleet-mix",
      wind: "cloudy-day-1",
      fog: "fog",
      cloudy: "cloudy-original",
      "partly-cloudy-day": "cloudy-day-2"
    },
    night: {
      clear: "night",
      "clear-night": "night",
      rain: "rainy-2",
      snow: "snowy-2",
      sleet: "rain-and-sleet-mix",
      wind: "cloudy-night-1",
      fog: "fog",
      cloudy: "cloudy-night-3",
      "partly-cloudy-night": "cloudy-night-2"
    }
  },
  openweathermap: {
    day: {
      "clear sky": "day",
      "few clouds": "cloudy-day-1",
      "scattered clouds": "cloudy-day-2",
      "broken clouds": "cloudy-day-3",
      "shower rain": "rainy-3",
      rain: "rainy-2",
      thunderstorm: "tropical-storm",
      snow: "snowy-2",
      mist: "fog"
    },
    night: {
      "clear sky": "day-night",
      "few clouds": "cloudy-night-1",
      "scattered clouds": "cloudy-night-2",
      "broken clouds": "cloudy-night-3"
    }
  },
  buienradar: {
    day: buienradarDay,
    night: { ...buienradarDay }
  },
  defaulthass: {
    day: defaulthassDay,
    night: {
      ...buienradarDay,
      "clear-night": "clear-night",
      sunny: "clear-night"
    }
  },
  msw: {
    swell: {
      1: "msw-sw-1",
      2: "msw-sw-2"
      // Add more swell icons if needed
    },
    wind: {
      N: "msw-swa-0",
      NNE: "msw-swa-22",
      NE: "msw-swa-45"
      // Add more directions if needed
    }
  }
};

export const MoonPhases: Record<string, string> = {
  new_moon: "🌑",
  new: "🌑",
  waxing_crescent: "🌒",
  first_quarter: "🌓",
  waxing_gibbous: "🌔",
  full: "🌕",
  full_moon: "🌕",
  waning_gibbous: "🌖",
  third_quarter: "🌗",
  last_quarter: "🌗",
  waning_crescent: "🌘"
};

export const SkinTypes: Record<number, { color: string; label: string }> = {
  1: { color: "#F1D1B1", label: "I" },
  2: { color: "#E4B590", label: "II" },
  3: { color: "#CF9F7D", label: "III" },
  4: { color: "#B67851", label: "IV" },
  5: { color: "#A15E2D", label: "V" },
  6: { color: "#513938", label: "VI" }
};