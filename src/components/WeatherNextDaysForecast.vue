<script setup>
import WeatherDayForecast from "./WeatherDayForecast.vue";
defineProps({
  dailyForecasts: Array,
});
</script>

<template>
  <section class="weather-next-days-wrapper">
    <h3>Next Days</h3>
    <div class="weather-next-days-area">
      <WeatherDayForecast
        v-for="dailyForecast in dailyForecasts"
        v-bind:key="dailyForecast.id"
        v-bind:weatherDescription="dailyForecast.weatherDescription"
        v-bind:time="dailyForecast.time"
        v-bind:temp="dailyForecast.temp"
      >
      </WeatherDayForecast>
    </div>
  </section>
</template>

<style>
.weather-next-days-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.weather-next-days-area {
  display: flex;
  justify-content: center;
}

h3 {
  margin-bottom: 1rem !important;
}
</style>
