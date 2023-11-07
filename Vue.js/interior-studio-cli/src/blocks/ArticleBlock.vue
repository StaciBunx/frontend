<template>
  <div>
    <article class="article" v-for="(article, index) in articles" :key="index">
      <h2 class="article__heading">{{ article.heading }}</h2>
      <img :src="article.imgBig" alt=" article image big" class="article__img article__img_big"
        style="min-width: 799px; min-height:539px;">

      <div class="article__info">
        <time datetime="2022-12-26" class="blog__date">{{ article.date }}</time>
        <p class="article__breadcrumbs">Interior / Home / Decor</p>
      </div>

      <p class="text">{{ article.intro }}</p>

      <div class="article__quote" style="min-width: 799px; min-height:267px;">
        <svg width="74" height="56" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
            fill="#CDA274" />
        </svg>

        <p class="article__quote_text">{{ article.quote }}</p>
      </div>

      <p class="text">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
        in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but
        the majority have suffered.
      </p>
      <ol class="article__list text">
        <li class="article__item text">Contrary to popular belief.There are many variations of passages of
          Lorem Ipsum available, but the majority have suffered.</li>
        <li class="article__item text">Contrary to popular belief.There are many variations of passages of
          Lorem Ipsum available, but the majority have suffered.</li>
        <li class="article__item text">Contrary to popular belief.There are many variations of passages of
          Lorem Ipsum available, but the majority have suffered.</li>
      </ol>

      <img :src="article.imgSmall" alt="article image small" class="article__img article__img_small"
        style="min-width: 799px; min-height:365px;">

      <p class="text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to
        popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
      </p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'ArticleBlock',
  props: ['articles']
}
</script>

<style lang="scss">
//styles
@import "../styles/vars";

//fonts
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Jost:wght@400;500;600&display=swap');

.articles {
  display: grid;
  grid-template-columns: 800px 1fr;
  gap: 52px;
}

.article {
  margin-bottom: 100px;

  &__heading {
    font-family: 'DM Serif Display', serif;
    font-style: normal;
    color: $black;
    font-weight: 400;
    text-align: left;
    font-size: 50px;
    line-height: 125%;
    letter-spacing: 1px;
    margin-bottom: 11px;
  }

  &__img {
    &_big {
      border-radius: 50px;

    }

    &_small {
      margin-bottom: 35px;
      border-radius: 50px;

    }
  }

  &__info {
    padding: 48px 0;
    display: flex;
    justify-content: space-between;
  }

  &__quote {
    margin-top: 35px;
    padding: 53px 227px;
    border-radius: 50px;
    background-color: #F4F0EC;
    margin-bottom: 35px;
    display: grid;
    justify-items: center;

    &_text {

      color: #CDA274;
      text-align: center;
      font-family: DM Serif Display;
      font-size: 25px;
      font-style: italic;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 0.5px;
    }
  }

  &__list {
    margin-top: 35px;
    margin-bottom: 35px;
    display: grid;
    justify-content: center;
    gap: 35px;
    list-style: none;
    counter-reset: my-counter;

  }

  &__item {
    width: 733px;
  }

  &__item::before {
    display: inline-block;
    content: counter(my-counter);
    margin-right: 11px;
    counter-increment: my-counter;
    color: #CDA274;
    font-family: DM Serif Display;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.4px;

  }
}

.tags {
  &__heading {
    color: $black;
    font-family: 'DM Serif Display', 'serif';
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
    margin-bottom: 24px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__item {

    display: inline-block;
    height: 41px;
    padding: 9px 30px;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;

    &:active {

      background-color: $black;
      color: white;
    }

    &_disabled {
      background-color: #F4F0EC;
      color: black;
    }

    &_active {
      background-color: $black;
      color: white;
    }
  }

}
</style>
