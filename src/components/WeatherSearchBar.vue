<script setup>
import { ref } from "vue";

const city = ref("");
const searchCity = (city) => {
  console.log(city);
};
</script>

<template>
  <div class="search-bar-area">
    <input
      type="text"
      placeholder="Search city"
      v-model="city"
      v-on:change="searchCity(city)"
    />
    <button v-on:click="searchCity(city)">Search</button>
  </div>
</template>

<style>
.search-bar-area {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 2rem;
}
</style>
