<script setup>
import "../assets/icons/weather-icons.css";
</script>

<template>
  <div class="weather-day-wrapper">
    <h3>M</h3>
    <i class="wi wi-night-sleet"></i>
    <p>26°C</p>
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
