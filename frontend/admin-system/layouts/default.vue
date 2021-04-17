<template>
  <div class="container">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from "~/components/Navigate/Header.vue";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
.container {
  width: 480px;
  margin: 0 auto;
}
html {
  font-family: "Prompt", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
