<script setup>
import WeatherSearchBar from "./WeatherSearchBar.vue";
</script>

<template>
  <main class="weather-wrapper">
    <WeatherSearchBar></WeatherSearchBar>
  </main>
</template>

<style scoped>
.weather-wrapper {
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 31rem;
  background-color: #91abc1;
  border-radius: 5%;
  border: 1px solid var(--white);
  box-shadow: 3px 3px var(--gray);
  justify-content: center;
}
</style>
