<script setup>
// import { icons } from "../utils/utils.js";
// import "../assets/icons/weather-icons.css";
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
  <div class="weather-today-container">
    <div class="current-city">
      <h4>{{ cityName }}</h4>
      <p class="date-text">9pm, January 12th</p>
    </div>
    <section v-if="cityName.length > 0" class="weather-today-area">
      <div class="main-forecast">
        <div class="weather-info-wrapper">
          <div class="forecast-data">
            <img class="side-icon" src="../assets/svg/windy.svg" />
            <p>Wind</p>
          </div>
          <p>{{ windSpeed }}m/s</p>
        </div>
        <div class="weather-current-temp">
          <img class="main-icon" src="../assets/svg/Cloudy_Weather.svg" />
          <p class="current-temp">{{ parseInt(temp) }}°C</p>
        </div>
        <div class="weather-info-wrapper">
          <div class="forecast-data">
            <img class="side-icon" src="../assets/svg/hum.svg" />
            <p>Hum</p>
          </div>
          <p>{{ humidity }}%</p>
        </div>
      </div>
      <div class="forecast-desc">
        <p>Cloudy Weather</p>
      </div>
    </section>
    <p v-else>No data</p>
  </div>
</template>

<style>
.current-city,
.weather-today-container,
.weather-info-wrapper,
.weather-max-min,
.weather-current-temp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);
  /* text-shadow: 2px 2px var(--gray-dark); */
}

.forecast-data {
  display: inline-flex;
}

.forecast-data p {
  font-weight: 600;
}

.weather-info-wrapper p {
  font-weight: 600;
}

.main-forecast {
  display: flex;
  height: 6.5rem;
}

.main-icon {
  width: 4rem;
  height: 4rem;
}

.current-city {
  height: 4rem;
  margin-bottom: 1rem;
}

.current-temp {
  margin-top: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
}

h4 {
  font-weight: 600;
  letter-spacing: 0.05rem;
  margin-bottom: 0.1rem;
}

.date-text {
  font-weight: 300;
}

.forecast-desc {
  font-weight: 600;
  letter-spacing: 0.05rem;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
}

p {
  margin: 0;
}

.weather-today-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.weather-today-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8.5rem;
  background: linear-gradient(180deg,
      rgba(255, 223, 130, 0.7) 0%,
      #5fa8d3 100%);
  border-radius: 20px;
  border: 1px solid var(--white);
  /* box-shadow: 3px 3px var(--gray); */
}

.weather-info-wrapper {
  width: 7rem;
  height: 4rem;
}

.weather-current-temp {
  height: 8rem;
  bottom: 22%;
  position: relative;
}

.weather-current-info {
  display: flex;
  justify-content: space-evenly;
  width: 5rem;
}

.side-icon {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
}
</style>
