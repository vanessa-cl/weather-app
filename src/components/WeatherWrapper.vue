<script setup>
// import { ref } from "vue";
import WeatherSearchBar from "./WeatherSearchBar.vue";
</script>

<template>
  <main class="weather-wrapper">
    <WeatherSearchBar></WeatherSearchBar>
  </main>
</template>

<style>
.weather-wrapper {
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 30rem;
  background-color: #004346;
  border-radius: 5%;
}
</style>
