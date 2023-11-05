<template>
  <div>
    <h3 v-if="isAuthenticated">Аутентификация прошла успешно</h3>
    <div v-else>
      <h3>Пройдите авторизацию</h3>
      <input type="text">
      <button v-on:click="login">Войти</button>
    </div>

  </div>
</template>
<script>
export default {
  name: 'AutheficationComp',
  props: ['isAuthenticated'],
  methods: {
    login () {
      this.$emit('login', true)
    }
  }
}
</script>
<style lang="scss"></style>
