<script>
import { defineComponent } from "@vue/runtime-core";
import WeatherWrapper from "./components/WeatherWrapper.vue";
import "./styles/GlobalStyles.css";

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
  background-color: var(--background-blue);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family-sans-serif) !important;
  line-height: 24px !important;
}
</style>
