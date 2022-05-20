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
    <p>{{ date }}</p>
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
  background-color: #326a8c;
  padding: 0.3rem;
  border-radius: 10%;
  box-shadow: 3px 3px var(--gray);
  font-size: 1.2rem;
  margin: 0.5rem;
  color: var(--light);
  text-shadow: 2px 2px var(--gray-dark);
}

p {
  margin: 0;
}
</style>
