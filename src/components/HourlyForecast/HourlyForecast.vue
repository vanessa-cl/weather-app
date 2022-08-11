<script setup>
import "./HourlyForecast.css";
defineProps({
  weatherDescription: String,
  time: String,
  temp: Number,
});
</script>

<template>
  <div class="hourly-data-wrapper">
    <p class="temp">{{ parseInt(temp) }}°C</p>
    <img class="next-icon" src="../../assets/svg/Cloudy_Weather.svg" />
    <p class="hour">{{ time }}</p>
  </div>
</template>
