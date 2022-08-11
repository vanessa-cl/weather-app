<script>
import { defineComponent } from "@vue/runtime-core";
import SearchBar from "./components/SearchBar/SearchBar.vue";
import "./styles/GlobalStyles.css";

export default defineComponent({
  name: "App",
  components: { SearchBar },
});
</script>

<template>
  <body>
    <main class="main-wrapper">
      <SearchBar></SearchBar>
    </main>
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

main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
