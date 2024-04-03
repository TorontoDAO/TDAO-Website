<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap')
</style>

<style>
html, body {
  margin: 0;
  padding: 0;
  background-color: #040821;
  box-sizing: border-box; /* Include padding in the element's total height */

}
#app {
  position: relative;
  min-height: 100vh; /* Ensure the container takes up at least the full viewport height */
  box-sizing: border-box; /* Include padding in the element's total height */
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  text-align: center;
  color: white;
  background-color: #040821;
}
</style>