<script>
import { defineComponent } from "@vue/runtime-core";
import WeatherWrapper from "./components/WeatherWrapper.vue";

export default defineComponent({
  name: "App",
  components: { WeatherWrapper },
});
</script>

<template>
  <body>
    <WeatherWrapper></WeatherWrapper>
  </body>
</template>

<style>
body {
  background-color: #74b3ce;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  z-index: 2;
  position: relative;
}
</style>
