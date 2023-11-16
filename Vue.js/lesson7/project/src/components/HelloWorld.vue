<template>
  <div>
    {{ counter }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <br>
    <br>
    <input type="text" placeholder="name" v-model="name">
    <input type="number" placeholder="price" v-model.number="price">
    <button @click="addNewProduct">add product</button>
    <br>
    <div v-for="product in products" :key="product.id">
      {{ product.name }} : {{ product.price }} : qty {{ product.quantity }}
    </div>
    <br>
    <h2>total quantity {{ totalQuantity }} : total price {{ totalPrice }}</h2>

  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '',
      price: ''
    }
  },
  mounted () {
    console.log(this.$store);
  },
  created () {
    this.fetchProducts();
  },

  methods: {
    ...mapMutations(['INCREMENT', 'DECREMENT', 'ADD_PRODUCT']),
    ...mapActions(['addProduct', 'fetchProducts']),

    addNewProduct () {
      const { name, price } = this;
      const newProduct = {
        id: this.products.length + 1,
        quantity: 1,
        name, price
      };
      this.addProduct(newProduct);
      // this.ADD_PRODUCT(newProduct)
    },

    increment () {
      this.INCREMENT();
      // this.$store.commit('INCREMENT')
    },
    decrement () {
      this.DECREMENT();
      // this.$store.commit('DECREMENT')
    }
  },
  computed: {
    ...mapGetters(['products', 'totalPrice', 'totalQuantity']),

    counter () {
      return this.$store.state.counter;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
