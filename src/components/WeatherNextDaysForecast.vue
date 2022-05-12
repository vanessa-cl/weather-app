<script setup>
import WeatherDayForecast from "./WeatherDayForecast.vue";
import { ref } from "vue";

const days = ref([
  { id: 1, label: "Monday" },
  { id: 2, label: "Tuesday" },
  { id: 3, label: "Wednesday" },
  { id: 4, label: "Thursday" },
  { id: 5, label: "Friday" },
  { id: 6, label: "Saturday" },
  { id: 7, label: "Sunday" },
]);
</script>

<template>
  <section>
    <h2>Next Days</h2>
    <div class="weather-next-days-wrapper">
      <WeatherDayForecast v-for="day in days" v-bind:key="day.id">{{
        day.label
      }}</WeatherDayForecast>
    </div>
  </section>
</template>

<style>
.weather-next-days-wrapper {
  display: flex;
  justify-content: center;
  width: 40rem;
}
</style>
