import Vue from 'vue'
import App from './App.vue'
import store from '../store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App />',
  components: {
    App
  },
  store, // подключаем хранилище к нашему приложению
  render: h => h(App)
}).$mount('#app')
