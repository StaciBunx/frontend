<template>
  <div id="app">
    <TheHeader />
    <h1 class="visually_hidden">Interno portfolio </h1>
    <IndexPage />
    <!-- <BlogPage v-show="currentPage = 'Blog'" /> -->
    <!-- <ArticlesPage /> -->
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import IndexPage from './pages/IndexPage.vue'

// import ArticlesPage from './pages/ArticlesPage.vue'
// import BlogPage from './pages/BlogPage.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    IndexPage
    // BlogPage
    // ArticlesPage
  },
  data () {
    return {
      currentPage: 'Home',
      pages: [
        {
          name: 'Home',
          isClicked: true
        },
        {
          name: 'Project',
          isClicked: false
        },
        {
          name: 'Blog',
          isClicked: false
        }
      ]
    }
  }
}
</script>

<style lang="scss">
//styles
@import "../src/styles/vars";

//fonts
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Jost:ital,wght@0,400;0,500;0,600;1,400&display=swap');

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
  color: black;
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
