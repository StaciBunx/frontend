import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    data: [
    ]
    // начальное состояние (примитивные свойства: числа, массивы, объекты)
  },
  mutations: {
    // методы для изменения состояния (state) - только ИЗМЕНЕНИЯ.
    SET_DATA_STATE (state, data) {
      state.data = data
    }

  },
  actions: {
    // методы для асинхронных операций, тригер действий: получить данные,
    // модифицируй, преобразуй, конвертируй, зашифруй, расшифруй)
    // НЕ ИЗМЕНЯЮТ ДАННЫЕ.
    // Если нужно что-то изменить, то внутри actions вызываются мутации
    fetchData ({ commit }) {
      commit('SET_DATA_STATE', [
        {
          id: 1,
          src: '1.jpg'
        },
        {
          id: 2,
          src: '2.jpg'
        },
        {
          id: 3,
          src: '3.jpg'
        }
      ])
    }
  },
  getters: {
    // методы для чтения состояния, описывается то, как мы будем получать
    // значение из state
    items (state) {
      return state.data
    }
  },
  modules: {
    // модули Vuex для разделения хранилища на под-хранилища
  }
})
