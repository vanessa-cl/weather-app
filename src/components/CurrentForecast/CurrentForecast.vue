<script setup>
import "./CurrentForecast.css";
defineProps({
  cityName: String,
  weatherDescription: String,
  temp: Number,
  tempMin: Number,
  tempMax: Number,
  humidity: Number,
  windSpeed: Number,
});
</script>

<template>
  <div class="current-forecast-area">
    <div class="current-city">
      <h4>{{ cityName }}</h4>
      <p>9pm, January 12th</p>
    </div>
    <section class="current-forecast-wrapper" v-if="cityName.length > 0">
      <div class="main-forecast">
        <div class="current-weather-data">
          <div class="current-data">
            <img class="side-icon" src="../../assets/svg/windy.svg" />
            <p>Wind</p>
          </div>
          <p>{{ windSpeed }}m/s</p>
        </div>
        <div class="current-weather-temp">
          <img class="main-icon" src="../../assets/svg/Cloudy_Weather.svg" />
          <p>{{ parseInt(temp) }}°C</p>
        </div>
        <div class="current-weather-data">
          <div class="current-data">
            <img class="side-icon" src="../../assets/svg/hum.svg" />
            <p>Hum</p>
          </div>
          <p>{{ humidity }}%</p>
        </div>
      </div>
      <div>
        <p class="current-weather-desc">Cloudy Weather</p>
      </div>
    </section>
    <p v-else>No data</p>
  </div>
</template>
