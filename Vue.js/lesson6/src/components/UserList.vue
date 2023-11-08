<template lang="">
  <div>
    <UserComp @updateInfo="updateInfo" v-for="user in users" :key="user.name" :user="user" />
  </div>
</template>
<script>
import UserComp from '../components/UserComp.vue'

export default {
  name: 'UserList',
  components: {
    UserComp
  },
  data () {
    return {
      users: [
        {
          id: 1,
          name: 'Вася',
          surname: 'Петров',
          email: 'email@mail.ru',
          info: 'some additional text here'
        },
        {
          id: 2,
          name: 'Петя',
          surname: 'Иванов',
          email: 'email@mail.ru',
          info: 'some additional text here'
        },
        {
          id: 3,
          name: 'Ваня',
          surname: 'Сидоров',
          email: 'email@mail.ru',
          info: 'some additional text here'
        }
      ]
    }
  },
  methods: {
    updateInfo (data) {
      const user = this.users.find((currentUser) => {
        return currentUser.id === data.id
      })
      if (user) {
        user.info = data.info
      }
    }

  }
}
</script>
<style lang="scss"></style>
