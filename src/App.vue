<template>
  <div id="app">
    <pokemon></pokemon>
  </div>
</template>

<script>
import pokemon from './components/Pokemon.vue'

export default {
  name: 'App',
  components: {
    pokemon
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
