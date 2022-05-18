<script setup>
import { ref, computed } from "vue";
import WeatherTodayForecast from "./WeatherTodayForecast.vue";
import WeatherNextDaysForecast from "./WeatherNextDaysForecast.vue";
import {
  getCurrentWeatherByCity,
  getNextDaysWeatherByCity,
} from "../services/api.js";
import {
  formatDate,
  MOCK_CURRENT_WEATHER,
  MOCK_DAILY_FORECAST,
} from "../utils/utils.js";

let currentData;
let nextDaysData;
const city = ref("");
const currentForecast = MOCK_CURRENT_WEATHER;
// ref({
// cityName: "",
// weatherDescription: "",
// temp: 0,
// tempMin: 0,
// tempMax: 0,
// humidity: 0,
// windSpeed: 0,
// });
const dailyForecasts = MOCK_DAILY_FORECAST;

const searchCity = async (city) => {
  if (city.length >= 3) {
    // currentData = await getCurrentWeatherByCity(city);
    // nextDaysData = await getNextDaysWeatherByCity(city);
    // saveCurrentWeatherData.value = {
    // cityName: currentData.name,
    // weatherDescription: currentData.weather[0].main,
    // temp: currentData.main.temp,
    // tempMin: currentData.main.temp_min,
    // tempMax: currentData.main.temp_max,
    // humidity: currentData.main.humidity,
    // windSpeed: currentData.wind.speed,
    // };
    // const forecastArray = nextDaysData.list;
    // let auxArray = [];
    // for (let i = 8; i < forecastArray.length; i += 8) {
    // auxArray.push(forecastArray[i]);
    // }
    // saveNextDaysWeatherData.value = auxArray;
  }
};

// const saveCurrentWeatherData = computed({
// set(newValue) {
// return (currentForecast.value = newValue);
// },
// });

// const saveNextDaysWeatherData = computed({
// set(newValues) {
// return (dailyForecasts.value = newValues.map((item, index) => {
// return {
// id: index + 1,
// date: formatDate(item.dt_txt),
// weatherDescription: item.weather[0].main,
// temp: item.main.temp,
// };
// }));
// },
// });
</script>

<template>
  <div class="search-bar-area">
    <div class="search-bar-wrapper">
      <input
        type="text"
        class="search-bar"
        placeholder="Search city"
        v-model="city"
        @input="searchCity(city)"
      />
      <button class="search-btn" v-on:click="searchCity(city)">
        <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" />
      </button>
    </div>
  </div>
  <div>
    <WeatherTodayForecast v-bind="currentForecast"></WeatherTodayForecast>
    <WeatherNextDaysForecast
      v-bind:dailyForecasts="dailyForecasts"
    ></WeatherNextDaysForecast>
  </div>
  <!-- <p v-else>No data</p> -->
</template>

<style>
.search-bar-area,
.search-bar-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
}

.search-bar-area {
  width: 100%;
}

.search-bar-wrapper {
  width: 80%;
  border-radius: 20px;
  box-shadow: 2px 2px var(--gray);
}

.search-bar-wrapper,
.search-bar {
  background-color: #326a8c;
}

.search-bar {
  border: none;
  color: var(--white);
}

.search-btn {
  background-color: transparent;
  border: none;
}
</style>
