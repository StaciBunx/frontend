<template lang="">
  <div>
    <section class="counter">
            <ul class="counter__list">
                <li class="counter__item"><span class="counter__number">12</span> <br>Years Of Experiance</li>
                <li><svg width="1" height="130" viewBox="0 0 1 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="2.18557e-08" x2="0.499994" y2="130" stroke="#CDA274" />
                    </svg>
                </li>
                <li class="counter__item"><span class="counter__number">85</span> <br>Success Project</li>
                <li><svg width="1" height="130" viewBox="0 0 1 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="2.18557e-08" x2="0.499994" y2="130" stroke="#CDA274" />
                    </svg>
                </li>
                <li class="counter__item"><span class="counter__number">15</span> <br>Active Project</li>
                <li><svg width="1" height="130" viewBox="0 0 1 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="2.18557e-08" x2="0.499994" y2="130" stroke="#CDA274" />
                    </svg>
                </li>
                <li class="counter__item"><span class="counter__number">95</span> <br>Happy Customers</li>
            </ul>
        </section>
  </div>
</template>

<script>
export default {
  name: 'IndexCounterBlock'
}
</script>

<style lang="scss">
.counter {
  height: 457px;
  background-color: #F4F0EC;
  margin-bottom: 100px;
  display: grid;
  justify-content: center;
  padding: 151px 0;

  &__list {
    display: flex;
    gap: 76px;
    text-align: center;
  }

  &__number {
    color: #CDA274;
    font-family: DM Serif Display;
    font-size: 85px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1.7px;
  }

  &__item {
    width: 130px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .counter {
    height: 400px;
    display: block;

    &__list {
      justify-content: space-evenly;
      gap: 0;
    }
  }
}
</style>
