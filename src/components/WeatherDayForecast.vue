<script setup>
import { icons } from "../utils/utils.js";
import "../assets/icons/weather-icons.css";
defineProps({
  weatherDescription: String,
  time: String,
  temp: Number,
});
</script>

<template>
  <div class="weather-day-wrapper">
    <p class="temp">{{ parseInt(temp) }}°C</p>
    <img class="next-icon" src="../assets/svg/Cloudy_Weather.svg" />
    <p class="hour">{{ time }}</p>
  </div>
</template>

<style scoped>
.weather-day-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 3rem;
  height: 7rem;
  background-color: transparent;
  padding: 0.5rem 0.2rem;
  border-radius: 20px;
  border: 1px solid var(--white);
  /* box-shadow: 3px 3px var(--gray); */
  font-size: 1.2rem;
  margin-right: 0.8rem;
  color: var(--light);
  /* text-shadow: 2px 2px var(--gray-dark); */
}

.weather-day-wrapper:nth-child(5) {
  margin-right: 0;
}

.hour {
  font-weight: 600;
  font-size: 0.9rem;
}

.temp {
  font-weight: 600;
  font-size: 1rem;
}

.next-icon {
  width: 2.2rem;
  height: 2.2rem;
}

p {
  margin: 0;
}
</style>
