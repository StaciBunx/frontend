<template lang="">
  <div>
    <header class="header center">
        <a href="index.html"><img src="../assets/index/Logo.svg" alt="logotype" class="logo"></a>
        <nav class="header__nav">
            <ul class="header__nav_menu">
                <li class="header__nav_menu_item"><a class="header__nav_menu_link" href="./index.html">Home</a></li>
                <li class="header__nav_menu_item"><a class="header__nav_menu_link" href="#">Project</a></li>
                <li class="header__nav_menu_item"><a class="header__nav_menu_link" href="./blog.html">Blog</a></li>
            </ul>
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
