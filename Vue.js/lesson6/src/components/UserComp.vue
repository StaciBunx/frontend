<template>
  <div>
    <p> Имя: {{ user.name }}</p>
    <p> Фамилия: {{ user.surname }}</p>
    <p> Почта: {{ user.email }}</p>
    <button @click="showInfo = !showInfo">Показать дополнительное инфо</button>
    <input @input="updateInfo" type="text" v-model="info">
    <div v-if="showInfo">{{ user.info }}</div>
  </div>
</template>
<script>

export default {

  name: 'UserComp',
  props: ['user'],
  created () {
    this.info = this.user.info
  },

  data () {
    return {
      showInfo: false,
      info: ''
    }
  },
  methods: {
    updateInfo () {
      const updatedData = {
        id: this.user.id,
        info: this.info
      }
      this.$emit('updateInfo', updatedData)
    }
  }
}
</script>
<style lang="scss"></style>
