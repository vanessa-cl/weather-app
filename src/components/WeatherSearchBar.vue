<script setup>
import { ref, computed } from "vue";
import WeatherTodayForecast from "./WeatherTodayForecast.vue";
import WeatherNextDaysForecast from "./WeatherNextDaysForecast.vue";
import {
  getCurrentWeatherByCity,
  getNextDaysWeatherByCity,
} from "../services/api.js";
import { formatDate } from "../utils/utils.js";

let currentData;
let nextDaysData;
let auxArray = [];
const city = ref("");
const currentForecast = ref({
  cityName: "",
  weatherDescription: "",
  temp: 0,
  tempMin: 0,
  tempMax: 0,
  humidity: 0,
  windSpeed: 0,
});
const dailyForecasts = ref([]);

const searchCity = async (city) => {
  if (city.length >= 3) {
    currentData = await getCurrentWeatherByCity(city);
    nextDaysData = await getNextDaysWeatherByCity(city);
    saveCurrentWeatherData.value = {
      cityName: currentData.name,
      weatherDescription: currentData.weather[0].main,
      temp: currentData.main.temp,
      tempMin: currentData.main.temp_min,
      tempMax: currentData.main.temp_max,
      humidity: currentData.main.humidity,
      windSpeed: currentData.wind.speed,
    };
    const forecastArray = nextDaysData.list;
    for (let i = 8; i < forecastArray.length; i += 8) {
      auxArray.push(forecastArray[i]);
    }
    saveNextDaysWeatherData.value = auxArray;
  }
};

const saveCurrentWeatherData = computed({
  set(newValue) {
    return (currentForecast.value = newValue);
  },
});

const saveNextDaysWeatherData = computed({
  set(newValues) {
    return (dailyForecasts.value = newValues.map((item, index) => {
      return {
        id: index + 1,
        date: formatDate(item.dt_txt),
        weatherDescription: item.weather[0].main,
        temp: item.main.temp,
      };
    }));
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
  <div v-if="dailyForecasts.length > 0">
    <WeatherTodayForecast v-bind="currentForecast"></WeatherTodayForecast>
    <WeatherNextDaysForecast
      v-bind:dailyForecasts="dailyForecasts"
    ></WeatherNextDaysForecast>
  </div>
  <p v-else>No data</p>
</template>

<style>
.search-bar-area {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 2rem;
}
</style>
