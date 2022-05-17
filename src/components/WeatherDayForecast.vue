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
    <h3>{{ date }}</h3>
    <i v-bind:class="[icons[weatherDescription]]"></i>
    <p>{{ parseInt(temp) }}°C</p>
  </div>
</template>

<style>
.weather-day-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 6rem;
  background-color: aquamarine;
  margin-right: 1.5rem;
  border-radius: 5%;
}
</style>
