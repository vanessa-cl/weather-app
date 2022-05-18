<script setup>
import { icons } from "../utils/utils.js";
import "../assets/icons/weather-icons.css";
defineProps({
  weatherDescription: String,
  date: String,
  temp: Number,
});
</script>

<template>
  <div class="weather-day-wrapper">
    <h5>{{ date }}</h5>
    <i class="side-icon" v-bind:class="[icons[weatherDescription]]"></i>
    <p>{{ parseInt(temp) }}°C</p>
  </div>
</template>

<style scoped>
.weather-day-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 4rem;
  height: 7rem;
  background-color: #f1f0f0;
  padding: 0.2rem;
  border-radius: 10%;
  box-shadow: 3px 3px var(--gray);
  font-size: 1.2rem;
  margin: 0.5rem;
}

p {
  margin: 0;
  font-weight: bolder;
}
</style>
