# Weather Conditions Card

[![hacs_badge](https://img.shields.io/badge/HACS-Default-blue.svg)](https://github.com/hacs/integration)

[![License][license-shield]](LICENSE)

![Language grade: JavaScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)

![Support Ukraine](https://img.shields.io/badge/Support-Ukraine-FFD500?style=flat&labelColor=005BBB)


## Features

## Features ✨
- ✅ **Summary Weather Information**  
- 🌡️ **Detailed Current Weather Data**  
- 📅 **Detailed Forecast Weather Data**  
- 🌊 **Detailed Forecast Sea Weather Data**  
- ☀️ **Ultraviolet Radiation**  
- 🌫️ **Air Quality Data**  
- 🌿 **Pollen Data**  
- ⚠️ **Weather Alerts**  
- 🎥 **Camera Meteogram Display**  
- 📷 **Preferred Camera Display**  

---

## Screenshots 📸  

<div align="center">
  <img src="https://github.com/PatrickSt1991/ha-card-weather-conditions-2025/raw/master/md.images/ha-card-weather-condition-full.png" width="30%" alt="Full Weather Card">
  <img src="https://github.com/PatrickSt1991/ha-card-weather-conditions-2025/raw/master/md.images/ha-card-weather-condition-1.png" width="30%" alt="Weather Card Example">
  <img src="https://github.com/PatrickSt1991/ha-card-weather-conditions-2025/raw/master/md.images/ha-card-weather-condition-2.png" width="30%" alt="Weather Card Alternate Example">
</div>

## **Terms of use**
By using this project or its source code, for any purpose and in any shape or form, you grant your implicit agreement to all the following statements:

- You **condemn Russia and its military aggression against Ukraine**
- You **recognize that Russia is an occupant that unlawfully invaded a sovereign state**
- You **support Ukraine's territorial integrity, including its claims over temporarily occupied territories of Crimea and Donbas**
- You **reject false narratives perpetuated by Russian state propaganda**
To learn more about the war and how you can help, [click here](https://tyrrrz.me/ukraine). Glory to Ukraine! 🇺🇦


## **Installation**

## HACS
This card is available in HACS (Home Assistant Community Store).

Just search for ha-card-weather-conditions-2025 in frontend plugins tab.

## Manual
If you configure Lovelace via YAML, add a reference to `ha-card-weather-conditions.js` inside your configuration.yaml:

1. Download vacuum-card.js file from the [latest-release](https://github.com/PatrickSt1991/ha-card-weather-conditions-2025/releases/latest).

2. Put `ha-card-weather-conditions.js` file into your config/www folder.

3. Add reference to `ha-card-weather-conditions.js` in Lovelace. There's two way to do that:
 - Using UI: Configuration → Lovelace Dashboards → Resources Tab → Click Plus button → Set Url as /local/ha-card-weather-conditions.js → Set Resource type as JavaScript Module. 
 - Using YAML: Add following code to lovelace section.
    ```yaml
      resources:
        - url: /local/ha-card-weather-conditions.js
          type: module
    ```
4. Add custom: ha-card-weather-conditions.js to Lovelace UI as any other card (using either editor or YAML configuration).

## **Card Parameters**

| **Name**     | **Type**   | **Required** | **Default**                                  | **Description**                                      |
|-------------|-----------|-------------|--------------------------------|--------------------------------------------------|
| `type`      | string    | ✅ Yes      | `custom:ha-card-weather-conditions`          | The custom card type                              |
| `name`      | string    | ❌ No       | *(empty)*                                    | Card name shown on summary layer                 |
| `language`  | string    | ❌ No       | `en`                                        | See [Languages](#languages)                      |
| `animation` | boolean   | ❌ No       | `false`                                     | Enable/disable animations (`true`/`false`)       |
| `camera`    | string    | ❌ No       | *(empty)*                                    | Camera entity for display                        |
| `uv`        | object    | ❌ No       | *(empty)*                                    | See [Ultraviolet Radiation](#ultraviolet)        |
| `pollen`    | object    | ❌ No       | *(empty)*                                    | See [Pollen Data](#pollen)                       |
| `air_quality` | object  | ❌ No       | *(empty)*                                    | See [Air Quality](#air-quality)                  |
| `alert`     | object    | ❌ No       | *(empty)*                                    | See [Alert Section](#alert-parameters)           |
| `weather`   | object    | ❌ No       | *(empty)*                                    | See [Weather Card Parameters](#weather-card-parameters) |

## **Languages**
| **Language**        | **Short Code** |
|---------------------|----------------|
| English             | `en`           |
| Italiano            | `it`           |
| Nederlands          | `nl`           |
| Español             | `es`           |
| Deutsch             | `de`           |
| Français            | `fr`           |
| Srpski              | `sr`           |
| Português           | `pt`           |
| Dansk               | `da`           |
| Norsk (Nynorsk)     | `nn`           |
| Čeština             | `cs`           |
| Русский             | `ru`           |

**With using

## **Weather Card Parameters**

The following parameters and card configurations are used to display the current and forecast weather data.

#### **Parameters for the object: *weather*** 
| **Name**            | **Type**      | **Required** | **Default** | **Description**                                                                                          |
|---------------------|---------------|-----------------|-------------|----------------------------------------------------------------------------------------------------------|
| `icons_model`       | string        | ❌ No           | `climacell` | Icons template to use. Valid values: `climacell`, `darksky`, `openweathermap`, `buienradar`, `defaulthass` |
| `current`           | object list   | ❌ No           | *(empty)*   | Current weather data                                                                                     |
| `forecast`          | object list   | ❌ No           | *(empty)*   | Forecast weather data                                                                                     |


### **Current Weather Data**

#### **Parameters for the object list: *current*** 

| **Name**              | **Type**    | **Required** | **Default** | **Description**                                                                                             |
|-----------------------|-------------|--------------|-------------|-------------------------------------------------------------------------------------------------------------|
| `sun`                 | string      | ❌ No        | *(empty)*   | Sensor ID for sun data                                                                                      |
| `moon_phase`          | string      | ❌ No        | *(empty)*   | Sensor ID for moon phase data                                                                                |
| `current_conditions`  | string      | ❌ No        | *(empty)*   | Sensor ID for current weather conditions                                                                     |
| `humidity`            | string      | ❌ No        | *(empty)*   | Sensor ID for humidity data                                                                                  |
| `pressure`            | string      | ❌ No        | *(empty)*   | Sensor ID for atmospheric pressure                                                                            |
| `temperature`         | string      | ❌ No        | *(empty)*   | Sensor ID for temperature data                                                                                |
| `feels_like`          | string      | ❌ No        | *(empty)*   | Sensor ID for feels-like temperature data                                                                     |
| `visibility`          | string      | ❌ No        | *(empty)*   | Sensor ID for visibility data                                                                                 |
| `wind_bearing`        | string      | ❌ No        | *(empty)*   | Sensor ID for wind bearing data                                                                                |
| `wind_speed`          | string      | ❌ No        | *(empty)*   | Sensor ID for wind speed data                                                                                 |
| `precipitation`       | string      | ❌ No        | *(empty)*   | Sensor ID for precipitation data                                                                               |
| `forecast`            | boolean     | ❌ No        | `false`     | Show daily forecast for temperature and precipitation if set to `true`.                                      |


#### **Display the *Summary Layer*** 

<img src="https://github.com/PatrickSt1991/ha-card-weather-conditions-2025/raw/master/md.images/ha-card-weather-condition-summary.png" width="40%" height="auto" alt="Home Assistant lovelace card">

##### *Summary Layer*, example of card setup
```yaml
  type: custom:ha-card-weather-conditions
  name: "cc_test"
  language: it
  animation: true
  weather:
    icons_model: climacell
    current:
      sun: sun.sun
      moon_phase: sensor.cc_test_moon_phase
      current_conditions: sensor.cc_test_weather_condition
      temperature: sensor.cc_test_temperature
      feels_like: sensor.cc_test_feels_like
```

#### **Display the *Current Layer*** 

<p float="left">
<img src="https://github.com/PatrickSt1991/ha-card-weather-conditions-2025/raw/master/md.images/ha-card-weather-condition-current.png" width="40%" height="auto" alt="Home Assistant lovelace card">
<img src="https://github.com/PatrickSt1991/ha-card-weather-conditions-2025/raw/master/md.images/ha-card-weather-condition-current-ext.png" width="40%" height="auto" alt="Home Assistant lovelace card">
</p>

##### *Current Layer*, example of card setup
```yaml
  type: custom:ha-card-weather-conditions
  name: "cc_test"
  weather:
    icons_model: climacell
    current:
      sun: sun.sun
      humidity: sensor.cc_test_humidity_percentage
      pressure: sensor.cc_test_barometric_pressure
      visibility: sensor.cc_test_visibility
      wind_bearing: sensor.cc_test_wind_direction
      wind_speed: sensor.cc_test_wind_speed
      precipitation: sensor.cc_test_precipitation
  #
  # Optional:
  # add to display current day forecast weather
      forecast: true
    forecast:
      temperature_high:
        day_1: sensor.cc_test_temperature_max_0d
      temperature_low:
        day_1: sensor.cc_test_temperature_min_0d
      precipitation_probability:
        day_1: sensor.cc_test_precipitation_probability_0d
      precipitation_intensity:
        day_1: sensor.cc_test_precipitation_max_0d
```

#### **Display the *Summary & Current Layer*** 

<img src="https://github.com/PatrickSt1991/ha-card-weather-conditions-2025/raw/master/md.images/ha-card-weather-condition-summary+current.png" width="40%" height="auto" alt="Home Assistant lovelace card">

##### *Summary & Current Layer*, example of card setup

```yaml
  type: custom:ha-card-weather-conditions
  name: "cc_test"
  weather:
    icons_model: climacell
    current:
      sun: sun.sun
      moon_phase: sensor.cc_test_moon_phase
      current_conditions: sensor.cc_test_weather_condition
      temperature: sensor.cc_test_temperature
      feels_like: sensor.cc_test_feels_like
      humidity: sensor.cc_test_humidity_percentage
      pressure: sensor.cc_test_barometric_pressure
      visibility: sensor.cc_test_visibility
      wind_bearing: sensor.cc_test_wind_direction
      wind_speed: sensor.cc_test_wind_speed
      precipitation: sensor.cc_test_precipitation
  #
  # Optional:
  # add to display current day forecast weather
      forecast: true
    forecast:
      temperature_high:
        day_1: sensor.cc_test_temperature_max_0d
      temperature_low:
        day_1: sensor.cc_test_temperature_min_0d
      precipitation_probability:
        day_1: sensor.cc_test_precipitation_probability_0d
      precipitation_intensity:
        day_1: sensor.cc_test_precipitation_max_0d
```
### ** Forecast Weather Data**

#### **Parameters for the object list: *forecast*** 
| **Name**                     | **Type**      | **Required** | **Description**                         |
|------------------------------|---------------|-----------------|-----------------------------------------|
| `meteogram`                  | string        | ❌ No           | Camera ID for the meteogram data       |
| `icons`                      | object list   | ❌ No           | Sensor IDs for weather icons            |
| `temperature_high`           | object list   | ❌ No           | Sensor IDs for high temperature values  |
| `temperature_low`            | object list   | ❌ No           | Sensor IDs for low temperature values   |
| `precipitation_probability`  | object list   | ❌ No           | Sensor IDs for precipitation probabilities |
| `precipitation_intensity`    | object list   | ❌ No           | Sensor IDs for precipitation intensity   |


#### **Parameters for the object list: *icons, temperature_high, temperature_low, precipitation_probability, precipitation_intensity*** 

| **Name** | **Type** | **Required** | **Description**                                      |
|----------|----------|--------------|------------------------------------------------------|
| `day_1`  | string   | ❌ No        | Sensor ID for the current day forecast.              |
| `day_2`  | string   | ❌ No        | Sensor ID for the second day forecast.               |
| `day_3`  | string   | ❌ No        | Sensor ID for the third day forecast.                |
| `day_4`  | string   | ❌ No        | Sensor ID for the fourth day forecast.               |
| `day_5`  | string   | ❌ No        | Sensor ID for the fifth day forecast.                |


#### **Display the *Forecast Layer*** 

<img src="https://github.com/PatrickSt1991/ha-card-weather-conditions-2025/raw/master/md.images/ha-card-weather-condition-forecast.png" width="40%" height="auto" alt="Home Assistant lovelace card">

##### *Forecast Layer*, example of card setup

```yaml
  type: custom:ha-card-weather-conditions
  name: "cc_test"
  language: it
  animation: true
  weather:
    icons_model: climacell
    forecast:
      meteogram: camera.cc_test_c2
      icons:
        day_1: sensor.cc_test_weather_condition_0d
        day_2: sensor.cc_test_weather_condition_1d
        day_3: sensor.cc_test_weather_condition_2d
        day_4: sensor.cc_test_weather_condition_3d
        day_5: sensor.cc_test_weather_condition_4d
      temperature_high:
        day_1: sensor.cc_test_temperature_max_0d
        day_2: sensor.cc_test_temperature_max_1d
        day_3: sensor.cc_test_temperature_max_2d
        day_4: sensor.cc_test_temperature_max_3d
        day_5: sensor.cc_test_temperature_max_4d
      temperature_low:
        day_1: sensor.cc_test_temperature_min_0d
        day_2: sensor.cc_test_temperature_min_1d
        day_3: sensor.cc_test_temperature_min_2d
        day_4: sensor.cc_test_temperature_min_3d
        day_5: sensor.cc_test_temperature_min_4d
      precipitation_probability:
        day_1: sensor.cc_test_precipitation_probability_0d
        day_2: sensor.cc_test_precipitation_probability_1d
        day_3: sensor.cc_test_precipitation_probability_2d
        day_4: sensor.cc_test_precipitation_probability_3d
        day_5: sensor.cc_test_precipitation_probability_4d
      precipitation_intensity:
        day_1: sensor.cc_test_precipitation_max_0d
        day_2: sensor.cc_test_precipitation_max_1d
        day_3: sensor.cc_test_precipitation_max_2d
        day_4: sensor.cc_test_precipitation_max_3d
        day_5: sensor.cc_test_precipitation_max_4d
```

##### *Forecast Layer*, advanced examples of card setup

To capitalize the name of the days of the week use `style` directive:
```yaml
  type: custom:ha-card-weather-conditions
  style: |
    .dayname {
      text-transform: capitalize;
  }
```
### ** Sea Forecast Weather Data**

#### **Parameters for the object list: *sea*** 
| **Name**              | **Type**      | **Required** | **Description**                            |
|-----------------------|---------------|--------------|--------------------------------------------|
| `swell_direction`     | object list   | ❌ No        | Sensor ID for swell direction data         |
| `swell_height`        | object list   | ❌ No        | Sensor ID for swell height data            |
| `swell_period`        | object list   | ❌ No        | Sensor ID for swell period data            |
| `wind_direction`      | object list   | ❌ No        | Sensor ID for wind direction data          |
| `wind_speed`          | object list   | ❌ No        | Sensor ID for wind speed data              |
| `air_temperature`     | object list   | ❌ No        | Sensor ID for air temperature data         |
| `water_temperature`   | object list   | ❌ No        | Sensor ID for water temperature data       |

#### **Parameters for the object list: *swell_direction, swell_height, swell_period, wind_direction, wind_speed, air_temperature, water_temperature*** 

| **Name** | **Type** | **Required** | **Description**                              |
|----------|----------|--------------|----------------------------------------------|
| `hour_1` | string   | ❌ No        | Sensor ID for the forecast for hour 1.      |
| `hour_2` | string   | ❌ No        | Sensor ID for the forecast for hour 2.      |
| `hour_3` | string   | ❌ No        | Sensor ID for the forecast for hour 3.      |
| `hour_4` | string   | ❌ No        | Sensor ID for the forecast for hour 4.      |
| `hour_5` | string   | ❌ No        | Sensor ID for the forecast for hour 5.      |
| `hour_6` | string   | ❌ No        | Sensor ID for the forecast for hour 6.      |
| `hour_7` | string   | ❌ No        | Sensor ID for the forecast for hour 7.      |

#### **Display the *Sea Forecast Layer*** 

<img src="https://github.com/PatrickSt1991/ha-card-weather-conditions-2025/raw/master/md.images/ha-card-weather-condition-sea.png" width="40%" height="auto" alt="Home Assistant lovelace card">

##### *Sea Forecast Layer*, example of card setup

```yaml
  type: custom:ha-card-weather-conditions
  name: "cc_test"
  language: it
  sea:
    swell_direction:
      hour_1: sensor.sg_piscinas_swell_direction_0h
      hour_2: sensor.sg_piscinas_swell_direction_0h
      hour_3: sensor.sg_piscinas_swell_direction_0h
      hour_4: sensor.sg_piscinas_swell_direction_0h
      hour_5: sensor.sg_piscinas_swell_direction_0h
      hour_6: sensor.sg_piscinas_swell_direction_0h
      hour_7: sensor.sg_piscinas_swell_direction_0h
    swell_height:
      hour_1: sensor.sg_piscinas_swell_height_0h
      hour_2: sensor.sg_piscinas_swell_height_0h
      hour_3: sensor.sg_piscinas_swell_height_0h
      hour_4: sensor.sg_piscinas_swell_height_0h
      hour_5: sensor.sg_piscinas_swell_height_0h
      hour_6: sensor.sg_piscinas_swell_height_0h
      hour_7: sensor.sg_piscinas_swell_height_0h
    swell_period:
      hour_1: sensor.sg_piscinas_swell_period_0h
      hour_2: sensor.sg_piscinas_swell_period_0h
      hour_3: sensor.sg_piscinas_swell_period_0h
      hour_4: sensor.sg_piscinas_swell_period_0h
      hour_5: sensor.sg_piscinas_swell_period_0h
      hour_6: sensor.sg_piscinas_swell_period_0h
      hour_7: sensor.sg_piscinas_swell_period_0h
    wind_direction:
      hour_1: sensor.sg_piscinas_wind_direction_0h
      hour_2: sensor.sg_piscinas_wind_direction_0h
      hour_3: sensor.sg_piscinas_wind_direction_0h
      hour_4: sensor.sg_piscinas_wind_direction_0h
      hour_5: sensor.sg_piscinas_wind_direction_0h
      hour_6: sensor.sg_piscinas_wind_direction_0h
      hour_7: sensor.sg_piscinas_wind_direction_0h
    wind_speed:
      hour_1: sensor.sg_piscinas_wind_speed_0h
      hour_2: sensor.sg_piscinas_wind_speed_0h
      hour_3: sensor.sg_piscinas_wind_speed_0h
      hour_4: sensor.sg_piscinas_wind_speed_0h
      hour_5: sensor.sg_piscinas_wind_speed_0h
      hour_6: sensor.sg_piscinas_wind_speed_0h
      hour_7: sensor.sg_piscinas_wind_speed_0h
    air_temperature:
      hour_1: sensor.sg_piscinas_air_temperature_0h
      hour_2: sensor.sg_piscinas_air_temperature_0h
      hour_3: sensor.sg_piscinas_air_temperature_0h
      hour_4: sensor.sg_piscinas_air_temperature_0h
      hour_5: sensor.sg_piscinas_air_temperature_0h
      hour_6: sensor.sg_piscinas_air_temperature_0h
      hour_7: sensor.sg_piscinas_air_temperature_0h
    water_temperature:
      hour_1: sensor.sg_piscinas_water_temperature_0h
      hour_2: sensor.sg_piscinas_water_temperature_0h
      hour_3: sensor.sg_piscinas_water_temperature_0h
      hour_4: sensor.sg_piscinas_water_temperature_0h
      hour_5: sensor.sg_piscinas_water_temperature_0h
      hour_6: sensor.sg_piscinas_water_temperature_0h
      hour_7: sensor.sg_piscinas_water_temperature_0h
```

## **Ultraviolet Radiation Parameters**

The card has been tested with the sensors provided by `openuv` integrations. 

#### **Parameters for the object: *uv*** 
   
| **Name**                | **Type** | **Required** | **Description**                                          |
|-------------------------|----------|--------------|----------------------------------------------------------|
| `protection_window`     | string   | ❌ No        | Binary sensor indicating the protection window status.   |
| `ozone_level`           | string   | ❌ No        | Ozone level in Dobson Units (du) from the OMI data sensor. |
| `uv_index`              | string   | ❌ No        | Sensor providing the UV Index.                           |
| `uv_level`              | string   | ❌ No        | Sensor providing the UV level.                           |
| `max_uv_index`          | string   | ❌ No        | Maximum UV Index for the day (measured at solar noon). |
| `set_skin_type_1`       | string   | ❌ No        | Safe exposure time (in minutes) till burn for Skin Type 1. |
| `set_skin_type_2`       | string   | ❌ No        | Safe exposure time (in minutes) till burn for Skin Type 2. |
| `set_skin_type_3`       | string   | ❌ No        | Safe exposure time (in minutes) till burn for Skin Type 3. |
| `set_skin_type_4`       | string   | ❌ No        | Safe exposure time (in minutes) till burn for Skin Type 4. |
| `set_skin_type_5`       | string   | ❌ No        | Safe exposure time (in minutes) till burn for Skin Type 5. |
| `set_skin_type_6`       | string   | ❌ No        | Safe exposure time (in minutes) till burn for Skin Type 6. |

#### **Display the *Ultraviolet Radiation Layer*** 

<img src="https://github.com/PatrickSt1991/ha-card-weather-conditions-2025/raw/master/md.images/ha-card-weather-condition-uv.png" width="40%" height="auto" alt="Home Assistant lovelace card">

##### *Ultraviolet Radiation Layer*, example of card setup
```yaml
  type: custom:ha-card-weather-conditions
  uv:
    protection_window: binary_sensor.protection_window
    ozone_level: sensor.current_ozone_level
    uv_index: sensor.current_uv_index
    uv_level: sensor.current_uv_level
    max_uv_index: sensor.max_uv_index
    set_skin_type_1: sensor.skin_type_1_safe_exposure_time
    set_skin_type_2: sensor.skin_type_2_safe_exposure_time
    set_skin_type_3: sensor.skin_type_3_safe_exposure_time
    set_skin_type_4: sensor.skin_type_4_safe_exposure_time
    set_skin_type_5: sensor.skin_type_5_safe_exposure_time
    set_skin_type_6: sensor.skin_type_6_safe_exposure_time
```

## **Pollen Parameters**

The card has been tested with the sensors provided by `climacell` integrations. 

#### **Parameters for the object: *pollen*** 
 
| **Name**   | **Type**      | **Required** | **Description**           |
|------------|---------------|--------------|---------------------------|
| `tree`     | object list   | ❌ No        | Object list for pollen trees.     |
| `weed`     | object list   | ❌ No        | Object list for pollen weeds.     |
| `grass`    | object list   | ❌ No        | Object list for pollen grasses.   |

#### **Parameters for the object list: *tree, weed, grass*** 

| **Name**   | **Type** | **Required** | **Description**                                          |
|------------|----------|--------------|----------------------------------------------------------|
| `entity`   | string   | ✅ Yes       | Sensor ID for the pollen data.                          |
| `icon`     | string   | ❌ No        | Icon override for the sensor.                           |
| `min`      | number   | ✅ Yes       | Minimum sensor value.                                   |
| `max`      | number   | ✅ Yes       | Maximum sensor value.                                   |
| `low`      | number   | ❌ No        | Low pollen value (must satisfy: min < low < high < max). |
| `high`     | number   | ❌ No        | High pollen value (must satisfy: min < low < high < max). |


#### **Display the *Pollen Layer*** 

<img src="https://github.com/PatrickSt1991/ha-card-weather-conditions-2025/raw/master/md.images/ha-card-weather-condition-pollen.png" width="40%" height="auto" alt="Home Assistant lovelace card">

##### *Pollen Layer*, example of card setup

```yaml
  type: custom:ha-card-weather-conditions
  pollen:
    tree:
      entity: sensor.cc_test_pollen_tree
      min: 0
      max: 5
      low: 1
      high: 3
    weed:
      entity: sensor.cc_test_pollen_weed
      min: 0
      max: 5
      low: 1
      high: 3
    grass:
      entity: sensor.cc_test_pollen_grass
      min: 0
      max: 5
      low: 1
      high: 3
```

## **Air Quality Parameters**

#### **Parameters for the object: *air_quality*** 

| **Name**               | **Type** | **Required** | **Description**                          |
|------------------------|----------|--------------|------------------------------------------|
| `pm25`                 | string   | ❌ No        | Sensor ID for PM2.5 data.               |
| `pm10`                 | string   | ❌ No        | Sensor ID for PM10 data.                |
| `o3`                   | string   | ❌ No        | Sensor ID for ozone (O3) data.          |
| `no2`                  | string   | ❌ No        | Sensor ID for nitrogen dioxide (NO2) data. |
| `co`                   | string   | ❌ No        | Sensor ID for carbon monoxide (CO) data. |
| `so2`                  | string   | ❌ No        | Sensor ID for sulfur dioxide (SO2) data. |
| `epa_aqi`              | string   | ❌ No        | Sensor ID for EPA Air Quality Index (AQI). |
| `epa_health_concern`   | string   | ❌ No        | Sensor ID for EPA health concern level. |

#### **Display the *Air Quality Layer*** 

<img src="https://github.com/PatrickSt1991/ha-card-weather-conditions-2025/raw/master/md.images/ha-card-weather-condition-air-quality.png" width="40%" height="auto" alt="Home Assistant lovelace card">

##### *Air Quality Layer*, example of card setup

```yaml
  type: custom:ha-card-weather-conditions
  air_quality:
    pm25: sensor.cc_test_pm25
    pm10: sensor.cc_test_pm10
    o3: sensor.cc_test_o3
    no2: sensor.cc_test_no2
    co: sensor.cc_test_co
    so2: sensor.cc_test_so2
    epa_aqi: sensor.cc_test_epa_aqi
    epa_health_concern: sensor.cc_test_epa_health_concern
```

## **Alert Parameters**

#### **Parameters for the object: *alert*** 

| **Name**                   | **Type**      | **Required** | **Description**                   |
|----------------------------|---------------|--------------|-----------------------------------|
| `fire_risk`                | object list   | ❌ No        | Object list for fire risk data.   |
| `thunderstorms_risk`       | object list   | ❌ No        | Object list for thunderstorms risk.|
| `hydraulic_risk`           | object list   | ❌ No        | Object list for hydraulic risk data.|
| `hydrogeological_risk`     | object list   | ❌ No        | Object list for hydrogeological risk data.|


#### **Parameters for the object list: *fire_risk*** 

| **Name**        | **Type**  | **Required** | **Description**                                             |
|-----------------|-----------|--------------|-------------------------------------------------------------|
| `entity`        | string    | ✅ Yes       | Sensor ID for the entity.                                  |
| `icon`          | number    | ❌ No        | Name of the icon to use instead of the default sensor icon.|
| `min`           | number    | ✅ Yes       | Minimum sensor value.                                      |
| `max`           | number    | ✅ Yes       | Maximum sensor value.                                      |
| `show_if_ge`    | number    | ❌ No        | Show alert if the value is greater than or equal to this value. |


#### **Parameters for the object list: *thunderstorms_risk, hydraulic_risk, hydrogeological_risk*** 

| **Name**        | **Type**  | **Required** | **Description**                                              |
|-----------------|-----------|--------------|--------------------------------------------------------------|
| `entity`        | string    | ✅ Yes       | Sensor ID for the entity.                                   |
| `icon`          | number    | ❌ No        | Name of the icon to use instead of the default sensor icon. |
| `show_if_on`    | number    | ❌ No        | Show alert if the value is `on`.                            |


#### **Display the *Alert Layer*** 

<img src="https://github.com/PatrickSt1991/ha-card-weather-conditions-2025/raw/master/md.images/ha-card-weather-condition-alert.png" width="40%" height="auto" alt="Home Assistant lovelace card">

##### *Alert Layer*, example of card setup

```yaml
  type: custom:ha-card-weather-conditions
  name: "cc_test"
  language: it
  alert:
    fire_risk:
      entity: sensor.cc_test_fire_index
      icon: mdi:campfire
      min: 1
      max: 100
      show_if_ge: 15
    thunderstorms_risk:
      entity: binary_sensor.dpc_acquafredda_temporali_oggi
      show_if_on: true
    hydraulic_risk:
      entity: binary_sensor.dpc_acquafredda_idraulico_oggi
    hydrogeological_risk:
      entity: binary_sensor.dpc_acquafredda_idrogeologico_oggi
```

## **Other examples**

### **Climacell full card**

```yaml
  type: custom:ha-card-weather-conditions
  name: "cc_test"
  language: it
  animation: true
  camera: camera.cc_test_c1
  pollen:
    tree:
      entity: sensor.cc_test_pollen_tree
      min: 0
      max: 5
      low: 1
      high: 3
    weed:
      entity: sensor.cc_test_pollen_weed
      min: 0
      max: 5
      low: 1
      high: 3
    grass:
      entity: sensor.cc_test_pollen_grass
      min: 0
      max: 5
      low: 1
      high: 3
  air_quality:
    pm25: sensor.cc_test_pm25
    pm10: sensor.cc_test_pm10
    o3: sensor.cc_test_o3
    no2: sensor.cc_test_no2
    co: sensor.cc_test_co
    so2: sensor.cc_test_so2
    epa_aqi: sensor.cc_test_epa_aqi
    epa_health_concern: sensor.cc_test_epa_health_concern
  weather:
    icons_model: climacell
    current:
      sun: sun.sun
      current_conditions: sensor.cc_test_weather_condition
      humidity: sensor.cc_test_humidity_percentage
      pressure: sensor.cc_test_barometric_pressure
      temperature: sensor.cc_test_temperature
      visibility: sensor.cc_test_visibility
      wind_bearing: sensor.cc_test_wind_direction
      wind_speed: sensor.cc_test_wind_speed
      precipitation: sensor.cc_test_precipitation
      forecast: true
    forecast:
      meteogram: camera.cc_test_c2
      icons:
        day_1: sensor.cc_test_weather_condition_0d
        day_2: sensor.cc_test_weather_condition_1d
        day_3: sensor.cc_test_weather_condition_2d
        day_4: sensor.cc_test_weather_condition_3d
        day_5: sensor.cc_test_weather_condition_4d
      temperature_high:
        day_1: sensor.cc_test_temperature_max_0d
        day_2: sensor.cc_test_temperature_max_1d
        day_3: sensor.cc_test_temperature_max_2d
        day_4: sensor.cc_test_temperature_max_3d
        day_5: sensor.cc_test_temperature_max_4d
      temperature_low:
        day_1: sensor.cc_test_temperature_min_0d
        day_2: sensor.cc_test_temperature_min_1d
        day_3: sensor.cc_test_temperature_min_2d
        day_4: sensor.cc_test_temperature_min_3d
        day_5: sensor.cc_test_temperature_min_4d
      precipitation_probability:
        day_1: sensor.cc_test_precipitation_probability_0d
        day_2: sensor.cc_test_precipitation_probability_1d
        day_3: sensor.cc_test_precipitation_probability_2d
        day_4: sensor.cc_test_precipitation_probability_3d
        day_5: sensor.cc_test_precipitation_probability_4d
      precipitation_intensity:
        day_1: sensor.cc_test_precipitation_max_0d
        day_2: sensor.cc_test_precipitation_max_1d
        day_3: sensor.cc_test_precipitation_max_2d
        day_4: sensor.cc_test_precipitation_max_3d
        day_5: sensor.cc_test_precipitation_max_4d
```

[license-shield]:https://img.shields.io/github/license/PatrickSt1991/ha-card-weather-conditions-2025