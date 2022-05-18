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

<style scoped>
body {
  background-image: linear-gradient(90deg, #6489a9, #9db1c3);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
