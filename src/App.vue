<template>
  <div id="app">
    <ComSPH />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import ComItowns from './components/ComItowns.vue';
import ComSPH from './components/ComSph.vue';
import 'normalize.css';

@Component({
  components: {
    // ComItowns,
    ComSPH
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
