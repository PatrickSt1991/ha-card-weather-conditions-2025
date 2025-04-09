// Define static paths for the card resources
export const PATHS = {
    // HACS installation path
    HACS_IMAGE_PATH: '/local/community/ha-card-weather-conditions/icons',
    // Manual installation path
    MANUAL_IMAGE_PATH: '/local/ha-card-weather-conditions/icons',
    // Default test file to check path existence
    TEST_FILE: '/static/cloudy.svg',
    // Translations folder relative to image path
    TRANSLATIONS_DIR: '/../transl/'
  };
  
  // Card metadata
  export const CARD_INFO = {
    NAME: 'ha-card-weather-conditions',
    VERSION: '2.0.0',
    AUTHOR: 'Original author + Contributors',
    GITHUB: 'https://github.com/username/ha-card-weather-conditions'
  };
  
  // Console styling for logging
  export const CONSOLE_STYLES = {
    PRIMARY: 'color: white; background: green; font-weight: 700;',
    SECONDARY: 'color: green; background: white; font-weight: 700;',
    INFO: 'color: black; background: white; font-weight: 700;'
  };