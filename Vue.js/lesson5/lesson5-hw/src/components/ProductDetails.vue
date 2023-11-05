<template>
  <div>
    <div class="featured__item">
      <img :src="product.img" alt="Product image" class="featured__img" />
      <div class="featured__item-content">
        <h3 class="featured__item-heading">{{ product.name }}</h3>
        <p class="featured__item-text">{{ status }}</p>
        <p class="featured__item-price">{{ formattedPrice }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductDetails',
  data () {
    return {
      product: {
        name: 'T-shirt',
        price: 99.99,
        available: true,
        img: require('../assets/product-4.jpg')
      }
    }
  },
  computed: {
    formattedPrice () {
      const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      })
      return USDollar.format(this.product.price)
    },
    status () {
      if (this.product.available) return 'Available'
      else return 'Out of stock'
    }
  }

}
</script>
<style lang="scss">
.featured {
  &__content {
    margin-bottom: 48px;
    text-align: center;
  }

  &__heading {
    margin-bottom: 6px;
  }

  &__item {
    width: 360px;
    height: 581px;
    border: 1px solid black;
  }

  &__item-content {
    padding: 25px 29px 19px 16px;
  }

  &__item-heading {
    margin-bottom: 16px;
    color: black;
  }

  &__item-text {
    margin-bottom: 16px;
  }
}
</style>
