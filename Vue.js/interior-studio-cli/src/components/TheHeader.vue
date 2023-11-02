<template lang="">
  <div>
    <header class="header center">
        <a href="index.html"><img src="../assets/index/Logo.svg" alt="logotype" class="logo"></a>
        <nav class="header__nav">
            <ul class="header__nav_menu">
              <li class="header__nav_menu_item" v-for="(name,index) in pageNames" :key="index">
                <a class="header__nav_menu_link" href="./index.html" @click="$root.currentPage = name">{{name}}</a>
              </li>
            </ul>
        </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  props: ['pagename'],
  data () {
    return {
      pageNames: ['Index', 'Project', 'Blog']
    }
  }
}
</script>

<style lang="scss">
//styles

@import "../styles/vars";

.header {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  padding-top: 53px;
  padding-bottom: 57px;

  &__nav_menu {
    display: flex;
    justify-content: space-between;
    width: 243px;

    &_link {
      font-size: 20px;
      color: black;
      cursor: pointer;
    }
  }
}
</style>
