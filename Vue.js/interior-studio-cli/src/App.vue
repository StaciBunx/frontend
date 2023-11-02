<template>
  <div id="app">
    <TheHeader />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style lang="scss">
//colors
$black: #292F36;
$gray: #4D5053;

//Content-width
$content-width: 1200px;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Jost', sans-serif;
}

.visually_hidden {
  display: none;
}

a {
  text-decoration: none;
}

a:hover {
  color: #CDA274;
}

img {
  max-width: 100%;
}

ul {
  list-style-type: none;

}

.center {
  max-width: $content-width;
  margin: 0 auto;
}

.content {
  padding-left: 2%;
  padding-right: 2%;
}

.heading {
  font-family: 'DM Serif Display', serif;
  font-style: normal;
  color: $black;
  font-weight: 400;
  text-align: center;
  font-size: 50px;
  line-height: 125%;
  letter-spacing: 1px;
}

.text {
  color: $gray;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}
</style>
