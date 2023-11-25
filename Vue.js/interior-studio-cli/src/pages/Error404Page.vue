<template lang="">
  <div>
    <div class="notfound center">
         <h1 class="notfound__404">404</h1>
          <p class="notfound__text"> We are sorry, but the page <br>you requested was not found</p>
          <router-link to="/" class="notfound__button">Back To Home
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
            xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
            </svg>
          </router-link>
    </div>
    <img class="notfound__img" src="../assets/notfound/404-banner.jpg" alt="404">
  </div>
</template>
<script>
export default {
  name: 'Error404Page'

}
</script>
<style lang="scss">
.notfound {
  position: relative;
  height: 1088px;
  display: grid;
  align-content: center;

  &__img {
    position: absolute;
    top: 140px;
    right: 0;
  }

  &__404 {
    color: #CDA274;
    font-family: DM Serif Display;
    font-size: 250px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }

  &__text {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.35px;
  }

  &__button {
    display: inline-block;
    width: 255px;
    height: 75px;
    color: white;
    background-color: #292F36;
    display: flex;
    padding: 26px 49px 26px 48px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 18px;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    margin-top: 70px;
  }
}
</style>
