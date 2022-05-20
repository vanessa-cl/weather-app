<script setup>
import WeatherDayForecast from "./WeatherDayForecast.vue";
defineProps({
  dailyForecasts: Array,
});
</script>

<template>
  <h3>Next Days</h3>
  <section class="weather-next-days-wrapper">
    <div class="weather-next-days-area">
      <WeatherDayForecast
        v-for="dailyForecast in dailyForecasts"
        v-bind:key="dailyForecast.id"
        v-bind:weatherDescription="dailyForecast.weatherDescription"
        v-bind:date="dailyForecast.date"
        v-bind:temp="dailyForecast.temp"
      >
      </WeatherDayForecast>
    </div>
  </section>
</template>

<style>
.weather-next-days-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.weather-next-days-area {
  display: flex;
  justify-content: center;
  width: 18rem;
}
</style>
