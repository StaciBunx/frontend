<template>
  <div id="app">
    <MortgageCalculator />
  </div>
</template>

<script>
import MortgageCalculator from './components/MortgageCalculator.vue'

export default {
  name: 'App',
  components: {
    MortgageCalculator
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
