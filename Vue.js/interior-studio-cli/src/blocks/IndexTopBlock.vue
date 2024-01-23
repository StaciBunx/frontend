<template lang="">
  <div>
    <section class="top center">
            <img src="../assets/index/top-banner.jpg" alt="top banner" class="top__banner"
                style="max-width: 1200px; max-height:758px;">
            <div class="top__intro">
                <h2 class="top__heading heading">Let Your Home Be Unique</h2>
                <p class="top__text text">There are many variations of the passages of lorem Ipsum fromavailable,
                    majority.
                </p>
                <router-link to="/project"  class="top__button">Get Started <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                            stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </router-link>
            </div>
        </section>
  </div>
</template>
<script>
export default {
  name: 'IndexTopBlock'
}
</script>
<style lang="scss">
//styles
@import "../styles/vars";

.top {
  position: relative;

  &__banner {
    background-color: #F4F0EC;
    width: 1200px;
    margin-bottom: 100px;

  }

  &__intro {
    position: absolute;
    top: 208px;
    left: 52px;
    width: 434px;
  }

  &__heading {
    font-size: 65px;
    line-height: 125%;
    margin-bottom: 18px;
    text-align: left;
  }

  &__text {
    margin-bottom: 21px;
  }

  &__button {
    display: inline-block;
    width: 220px;
    height: 75px;
    color: white;
    background-color: $black;
    display: flex;
    padding: 26px 49px 26px 48px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 18px;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {

  .top {

    &__banner {
      width: 100%;
    }

    &__intro {
      position: absolute;
      top: 52px;
      left: 52px;
      width: 434px;
    }
  }
}
</style>
