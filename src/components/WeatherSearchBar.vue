<script setup>
import { ref, computed } from "vue";
import WeatherTodayForecast from "./WeatherTodayForecast.vue";
import WeatherNextDaysForecast from "./WeatherNextDaysForecast.vue";
import { getCurrentWeatherByCity } from "../services/api.js";

let data;
const city = ref("");
let forecast = ref({
  cityName: "",
  temp: 0,
  tempMin: 0,
  tempMax: 0,
  humidity: 0,
  windSpeed: 0,
});

const searchCity = async (city) => {
  if (city.length > 3) {
    data = await getCurrentWeatherByCity(city);
    saveWeatherData.value = {
      cityName: data.name,
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
    };
  }
};

const saveWeatherData = computed({
  get() {
    return console.log(forecast);
  },
  set(newValue) {
    return (forecast.value = newValue);
  },
});
</script>

<template>
  <div class="search-bar-area">
    <input
      type="text"
      placeholder="Search city"
      v-model="city"
      @input="searchCity(city)"
    />
    <button v-on:click="searchCity(city)">Search</button>
  </div>
  <WeatherTodayForecast v-bind="forecast"></WeatherTodayForecast>
  <WeatherNextDaysForecast></WeatherNextDaysForecast>
</template>

<style>
.search-bar-area {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 2rem;
}
</style>
