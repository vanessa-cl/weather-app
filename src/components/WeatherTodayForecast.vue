<script setup>
import "../assets/icons/weather-icons.css";
</script>

<template>
  <section class="weather-today-wrapper">
    <h1>Today</h1>
    <div class="weather-today-area">
      <div class="weather-lateral-info">
        <p class="weather-lateral-text">Humidity</p>
        <i class="wi wi-night-sleet"></i>
        <p>42%</p>
      </div>
      <div class="weather-central-info">
        <h2>Salvador</h2>
        <i class="wi wi-night-sleet"></i>
        <p>30°C</p>
        <p>Max/Min</p>
        <p>35°/26°</p>
      </div>
      <div class="weather-lateral-info">
        <p class="weather-lateral-text">Wind</p>
        <i class="wi wi-night-sleet"></i>
        <p>1.5km</p>
      </div>
    </div>
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
  height: 12rem;
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
