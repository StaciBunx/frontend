<template lang="">
  <div>
    <header class="header center content">
        <router-link to="/" href="index.html"><img src="../assets/index/Logo.svg" alt="logotype" class="logo"></router-link>
        <nav class="header__nav">

            <div class="header__nav_menu">
                <router-link  to="/" class="header__nav_menu_link">Home</router-link>
                <router-link  to="/project" class="header__nav_menu_link">Project</router-link>
                <router-link  to="/blog" class="header__nav_menu_link">Blog</router-link>
            </div>
        </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style lang="scss">
@import "../styles/vars";

.header {
  display: flex;
  justify-content: space-between;
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
