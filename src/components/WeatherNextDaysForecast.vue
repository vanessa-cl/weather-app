<script setup>
import WeatherDayForecast from "./WeatherDayForecast.vue";
defineProps({
  dailyForecasts: Array,
});
</script>

<template>
  <section>
    <h3>Next Days</h3>
    <div class="weather-next-days-wrapper">
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
  width: 20rem;
}
</style>
