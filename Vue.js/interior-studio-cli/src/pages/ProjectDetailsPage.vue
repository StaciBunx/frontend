<template lang="">
  <div>
    <section class="projects__top">
      <img src="../assets/details/top-banner.jpg" alt="project top-banner" style="min-height:356px">
    </section>

<section class="details center">
  <div class="details__content">
    <h1 class ="details__heading">Minimal Look Bedrooms</h1>
  <p class="details__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
  </p>
  <br>
  <p class="details__text">
    In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
  </p>
  </div>

<div class="slider center">
  <img :src="require('../assets/details/slider-img-' + currentImgSlider)" alt="big image" class="slider__image">
<div class="slider__switch">
  <div class="slider__item" v-for="item in items" :key="item.id" @click="currentImgSlider=item.src">
  </div>

</div>
</div>
</section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProjectDetailsPage',
  data () {
    return {
      currentImgSlider: '1.jpg'
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    ...mapActions(['fetchData'])
  },
  computed: {
    ...mapGetters(['items'])
  }
}
</script>
<style lang="scss">
@import "../styles/vars";

.details {
  padding-top: 80px;

  &__content {
    margin: 0 auto 100px;
    width: 658px;
    height: 437px;
  }

  &__heading {
    text-align: center;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
  }

  &__text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
}

.slider {

  &__image {
    margin-bottom: 20px;
  }

  &__switch {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 200px;

  }

  &__item {
    border: 2px solid $black;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
