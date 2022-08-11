<script setup>
import { ref, computed } from "vue";
import CurrentForecast from "../CurrentForecast/CurrentForecast.vue";
import HourlyForecast from "../HourlyForecast/HourlyForecast.vue";
import {
  getCurrentWeatherByCity,
  getNextDaysWeatherByCity,
} from "../../services/api.js";
import { MOCK_DAILY_FORECAST } from "../../utils/utils.js";
import "./SearchBar.css";

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
let showResults = ref(false);

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
    saveNextDaysWeatherData.value = MOCK_DAILY_FORECAST;
  } else {
    saveCurrentWeatherData.value = {};
    saveNextDaysWeatherData.value = [];
  }
  toggleForecast();
};

const toggleForecast = () => {
  dailyForecasts.value.length > 0
    ? (showResults.value = true)
    : (showResults.value = false);
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
        // date: formatDate(item.dt_txt),
        time: item.time,
        weatherDescription: item.weather[0].main,
        temp: item.main.temp,
      };
    }));
  },
});
</script>

<template>
  <div class="search-bar-area" v-bind:class="{ 'forecast-mode': showResults }">
    <form
      class="search-bar-wrapper"
      v-bind:class="{ 'show-forecast': showResults }"
    >
      <input
        type="text"
        placeholder="Search city..."
        v-model="city"
        v-on:keyup.enter="searchCity(city)"
        v-on:blur="searchCity(city)"
      />
      <button v-on:click="searchCity(city)">
        <img class="search-icon" src="../../assets/svg/Research.svg" />
      </button>
    </form>
    <div class="forecast-wrapper" v-if="dailyForecasts.length > 0">
      <CurrentForecast v-bind="currentForecast" />
      <section class="hourly-forecast-area">
        <h4>Next Hours</h4>
        <div class="hourly-forecast-wrapper">
          <HourlyForecast
            v-for="dailyForecast in dailyForecasts"
            v-bind:key="dailyForecast.id"
            v-bind:weatherDescription="dailyForecast.weatherDescription"
            v-bind:time="dailyForecast.time"
            v-bind:temp="dailyForecast.temp"
          >
          </HourlyForecast>
        </div>
      </section>
    </div>
  </div>
</template>
