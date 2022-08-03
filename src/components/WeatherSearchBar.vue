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
    let auxArray = [];
    for (let i = 8; i < forecastArray.length; i += 8) {
      auxArray.push(forecastArray[i]);
    }
    saveNextDaysWeatherData.value = auxArray;
  } else {
    saveCurrentWeatherData.value = {};
    saveNextDaysWeatherData.value = [];
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
    <div class="search-bar-wrapper">
      <input
        type="text"
        class="search-bar"
        placeholder="Search city..."
        v-model="city"
        v-on:keyup.enter="searchCity(city)"
        v-on:blur="searchCity(city)"
      />
      <button class="search-btn" v-on:click="searchCity(city)">
        <img src="../assets/svg/Research.svg" v-on:click="searchCity(city)" />
      </button>
    </div>
  </div>
  <div v-if="dailyForecasts.length > 0">
    <WeatherTodayForecast v-bind="currentForecast"></WeatherTodayForecast>
    <WeatherNextDaysForecast
      v-bind:dailyForecasts="dailyForecasts"
    ></WeatherNextDaysForecast>
  </div>
</template>

<style>
.search-bar-area,
.search-bar-wrapper {
  display: flex;
  align-items: center;
  height: 2.5rem;
  transition: height 5s;
}

.search-bar-area {
  width: 100%;
  justify-content: center;
}

.search-bar-wrapper {
  width: 40%;
  border-radius: 15px;
  box-shadow: 4px 4px 4px rgba(9, 58, 62, 0.25);
  justify-content: space-between;
  padding: 0 1rem;
}

.search-bar-wrapper,
.search-bar {
  background-color: var(--primary-color);
}

.search-bar {
  border: none;
  font-size: 1.4rem;
  color: var(--white);
  font-weight: 600;
  text-shadow: 2px 2px 2px var(--dark);
}

.search-bar:focus {
  outline: none;
}

.search-btn {
  background-color: transparent;
  border: none;
}

img {
  height: 35px;
  width: 35px;
}
</style>
