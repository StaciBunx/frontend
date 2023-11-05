<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <h3>{{ product.name }}</h3>
      <input type="number" v-model.number="product.quantity"> <br>
      <p> Цена: {{ product.price }} руб.</p>
      <p> Стоимость: {{ product.price * product.quantity }} руб.</p>
    </div>
    <b>Итого: {{ total }}</b>
  </div>
</template>
<script>
export default {
  name: 'ShoppingCartComp',
  totalCost: 0,
  data () {
    return {
      products: [
        {
          id: 1,
          name: 'томаты',
          quantity: 1,
          price: 25
        },
        {
          id: 2,
          name: 'груша',
          quantity: 5,
          price: 14
        },
        {
          id: 3,
          name: 'мясо',
          quantity: 3,
          price: 10
        },
        {
          id: 4,
          name: 'молоко',
          quantity: 1,
          price: 7
        }
      ]
    }
  },
  computed: {
    total () {
      return this.products.reduce((sum, product) => sum + product.quantity * product.price, 0)
    }
  }
}
</script>
<style lang="scss"></style>
