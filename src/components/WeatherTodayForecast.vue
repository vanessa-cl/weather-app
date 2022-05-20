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
  <h3>Today</h3>
  <div class="weather-today-container">
    <section v-if="cityName.length > 0" class="weather-today-area">
      <div class="weather-current-temp">
        <h4>{{ cityName }}</h4>
        <i class="main-icon" v-bind:class="[icons[weatherDescription]]"></i>
        <p>{{ parseInt(temp) }}°C</p>
      </div>
      <div class="weather-max-min">
        <h5>Min / Max</h5>
        <p>{{ parseInt(tempMin) }}°C / {{ parseInt(tempMax) }}°C</p>
      </div>
      <div class="weather-info-wrapper">
        <div class="weather-info-wrapper">
          <p>Wind</p>
          <div class="weather-current-info">
            <i class="wi wi-windy side-icon"></i>
            <p>{{ windSpeed }}m/s</p>
          </div>
        </div>
        <div class="weather-info-wrapper">
          <p>Humidity</p>
          <div class="weather-current-info">
            <i class="wi wi-humidity side-icon"></i>
            <p>{{ humidity }}%</p>
          </div>
        </div>
      </div>
    </section>
    <p v-else>No data</p>
  </div>
</template>

<style>
.weather-today-container,
.weather-info-wrapper,
.weather-max-min,
.weather-current-temp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);
  text-shadow: 2px 2px var(--gray-dark);
}

h3 {
  margin: 0.5rem 1rem;
}

.weather-today-area {
  display: grid;
  justify-content: center;
  align-items: center;
  width: 18rem;
  height: 13rem;
  padding: 1rem;
  background-color: #5f85a7;
  border-radius: 5%;
  box-shadow: 3px 3px var(--gray);
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}

.weather-info-wrapper {
  width: 8rem;
  height: 100%;
  grid-row: 1 / span 2;
  grid-column: 2;
}

.weather-current-temp {
  grid-row: 1;
  grid-column: 1;
  font-size: 1.2rem;
}

.weather-max-min {
  grid-row: 2;
  grid-column: 1;
}

.weather-current-info {
  display: flex;
  justify-content: space-evenly;
  width: 5rem;
}

.main-icon {
  font-size: 2rem;
}

.side-icon {
  font-size: 1.5rem;
}
</style>
