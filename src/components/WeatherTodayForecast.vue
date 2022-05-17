<script setup>
import { icons } from "../utils/utils.js";
import "../assets/icons/weather-icons.css";
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
  <section class="weather-today-wrapper">
    <h1>Today</h1>
    <div v-if="cityName.length > 0" class="weather-today-area">
      <div class="weather-lateral-info">
        <p class="weather-lateral-text">Humidity</p>
        <i class="wi wi-humidity"></i>
        <p>{{ humidity }}%</p>
      </div>
      <div class="weather-central-info">
        <h2>{{ cityName }}</h2>
        <i v-bind:class="[icons[weatherDescription]]"></i>
        <p>{{ parseInt(temp) }}°C</p>
        <p>Min/Max</p>
        <p>{{ parseInt(tempMin) }}°C/ {{ parseInt(tempMax) }}°C</p>
      </div>
      <div class="weather-lateral-info">
        <p class="weather-lateral-text">Wind</p>
        <i class="wi wi-windy"></i>
        <p>{{ windSpeed }}m/s</p>
      </div>
    </div>
    <p v-else>No data</p>
  </section>
</template>

<style>
.weather-today-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.weather-today-area {
  display: flex;
  width: 18rem;
  height: 13rem;
  background-color: aqua;
  border-radius: 5%;
}

.weather-lateral-info {
  display: grid;
  width: 4rem;
  height: 4rem;
  margin: 2rem 1rem;
  align-items: center;
  grid-template-rows: 32px 32px;
  grid-template-columns: 32px 32px;
}

.weather-lateral-text {
  text-align: center;
  grid-row: 1;
  grid-column: 1 / span 2;
}

.weather-central-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
