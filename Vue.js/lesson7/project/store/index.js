import { setTimeout } from 'core-js/web';
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // начальное состояние
        counter: 0,
        products: [
        ],
    },
    mutations: {
        // методы для изменения состояния
        INCREMENT (state) {
            state.counter++;
        },
        DECREMENT (state) {
            state.counter--;
        },
        ADD_PRODUCT (state, product) {
            state.products.push(product);
        },
        SET_PRODUCT_STATE (state, products) {
            state.products = products;
        }
    },
    actions: {
        // методы для асинхронных
        fetchProducts ({ commit }) {
            setTimeout(() => {
                commit('SET_PRODUCT_STATE', [
                    {
                        id: 1,
                        name: 'apple',
                        price: 100,
                        quantity: 1
                    },
                    {
                        id: 2,
                        name: 'orange',
                        price: 150,
                        quantity: 1

                    },
                    {
                        id: 3,
                        name: 'banana',
                        price: 50,
                        quantity: 1
                    }
                ])
            }, 1000)
        },

        addProduct (store, product) {
            const findProduct = store.getters.products.find((item) => item.name === product.name);
            if (findProduct) {
                findProduct.quantity++;
            } else {
                store.commit('ADD_PRODUCT', product)
            }
        }

    },
    getters: {
        // методы для чтения состояния
        products (state) {
            return state.products;
        },
        totalQuantity (state) {
            return state.products.reduce((acc, product) => acc + product.quantity, 0)
        },
        totalPrice (state) {
            return state.products.reduce((acc, product) => acc + product.price, 0)
        }
    },
    modules: {
        // модули Vuex для разделения хранилища на под-хранилища
    }
});