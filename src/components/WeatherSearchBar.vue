<script setup>
import { ref, computed } from "vue";
import WeatherTodayForecast from "./WeatherTodayForecast.vue";
import WeatherNextDaysForecast from "./WeatherNextDaysForecast.vue";
import {
  getCurrentWeatherByCity,
  getNextDaysWeatherByCity,
} from "../services/api.js";
import { formatDate, MOCK_DAILY_FORECAST } from "../utils/utils.js";

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
  if (dailyForecasts.value.length > 0) {
    showResults.value = true;
  } else {
    showResults.value = false;
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
  <div class="main" v-bind:class="{ 'forecast-wrapper': showResults }">
    <div
      class="search-bar-wrapper"
      v-bind:class="{ 'show-forecast': showResults }"
    >
      <input
        type="text"
        class="search-bar"
        placeholder="Search city..."
        v-model="city"
        v-on:keyup.enter="searchCity(city)"
        v-on:blur="searchCity(city)"
      />
      <button class="search-btn" v-on:click="searchCity(city)">
        <img src="../assets/svg/Research.svg" />
      </button>
    </div>
    <div class="forecast-area" v-if="dailyForecasts.length > 0">
      <WeatherTodayForecast v-bind="currentForecast"></WeatherTodayForecast>
      <WeatherNextDaysForecast
        v-bind:dailyForecasts="dailyForecasts"
      ></WeatherNextDaysForecast>
    </div>
  </div>
</template>

<style>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.forecast-wrapper {
  height: 31rem;
  border-radius: 15px;
  width: 20.5rem;
  background-color: var(--primary-color);
  padding: 1.5rem;
}

.forecast-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 18.5rem;
  height: 25rem;
}

.search-bar-wrapper {
  display: flex;
  align-items: center;
  height: 2.2rem;
  width: 40%;
  border-radius: 15px;
  /* box-shadow: 4px 4px 4px rgba(9, 58, 62, 0.25); */
  justify-content: space-between;
  padding: 0 1rem;
  border: 1px solid var(--white);
}

.search-bar-wrapper,
.search-bar {
  background-color: var(--primary-color);
}

.search-bar {
  width: 100%;
  border: none;
  color: var(--white);
  font-size: 1.2rem;
  font-weight: 600;
  /* text-shadow: 2px 2px 2px var(--dark); */
}

.search-bar::placeholder {
  color: var(--white);
}

.search-bar:focus {
  outline: none;
}

.search-bar-wrapper:focus-within {
  outline: 2px auto blue;
}

.search-btn {
  background-color: transparent;
  border: none;
}

img {
  height: 2rem;
  width: 2rem;
}

.show-forecast {
  width: 18rem;
  /* transition: width 2s; */
}
</style>
