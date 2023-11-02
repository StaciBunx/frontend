<template lang="">
  <div>
    <div class="buttons"> <button @click="sortUp()">Сортировать по возрастанию</button>
            <button @click="sortDown()">Сортировать по убыванию</button>
        </div>

        <div class=" products">
            <div class="product" v-for="(product, index) in products" :key="index">
                <img :src="product.url" :alt="product.alt">
                <h3>{{product.name}}</h3>
                <p>{{product.price}} руб.</p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data () {
    return {
      products: [
        {
          url: 'photo1.jpg',
          alt: 'картинка 1',
          name: 'Футболка',
          price: 200
        },
        {
          url: 'photo2.jpg',
          alt: 'картинка 2',
          name: 'Платок',
          price: 150
        },
        {
          url: 'photo3.jpg',
          alt: 'картинка 3',
          name: 'Шляпа',
          price: 600
        },
        {
          url: 'photo4.jpg',
          alt: 'картинка 4',
          name: 'Пальто',
          price: 800
        },
        {
          url: 'photo5.jpg',
          alt: 'картинка 5',
          name: 'Куртка',
          price: 1000
        },
        {
          url: 'photo6.jpg',
          alt: 'картинка 6',
          name: 'Сумка',
          price: 850
        }
      ]
    }
  },
  methods: {
    sortUp () {
      this.products.sort((a, b) => a.price > b.price ? 1 : -1)
    },
    sortDown () {
      this.products.sort((a, b) => a.price > b.price ? -1 : 1)
    }
  }
}
</script>

<style>
.buttons {
  margin-bottom: 15px;
}

.products {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.product {
  display: grid;
  width: 250px;
  height: 350px;
  border: 1px solid black;
  padding: 10px;
}
</style>
