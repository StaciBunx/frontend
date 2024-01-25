<template>
  <div>
    <section class="blog__top" style="margin-bottom: 100px;">
      <img src="../assets/articles/articles-top.jpg" alt="articles top-banner" style="min-height:351px">
    </section>
    <h1 class="visually_hidden">Deatailed articles from the blog</h1>

    <section class="articles center">
      <div>
        <ArticleBlock :articles="showArticles" />
      </div>

      <aside class="tags">
        <h2 class="tags__heading">Tags</h2>
        <ul class="tags__list">
          <li class="tags__item" v-for="(  tag, index  ) in   tags  "
            :class="{ tags__item_active: tag.isActive, tags__item_disabled: !tag.isActive }" :key="index"
            @click="setTag(tag.name), changeTagStatus(tag)">
            {{ tag.name }}
          </li>
        </ul>

      </aside>

    </section>

  </div>
</template>

<script>
import ArticleBlock from '@/blocks/ArticleBlock.vue'

export default {
  name: 'ArticlesPage',

  data () {
    return {
      blogArticles: [
        {
          tag: 'Kitchen',
          heading: 'Kitchen: Let’s Get Solution for Building Construction Work',
          imgBig: require('../assets/articles/articles-big.jpg'),
          imgSmall: require('../assets/articles/articles-small.jpg'),
          date: '26 December, 2022',
          quote: 'Get rid of everything that is not essential to making a point.',
          intro: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable."
        },
        {
          tag: 'Bedroom',
          heading: 'Bedroom: Top 25 Design Styles for a Dreamy Bedroom',
          imgBig: require('../assets/articles/articles-bedroom-big.jpg'),
          imgSmall: require('../assets/articles/articles-small.jpg'),
          date: '26 January, 2022',
          quote: 'Design can help to improve our lives in the present. Design thinking can help us chart a path into the future.',
          intro: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem.'
        },
        {
          tag: 'Building',
          heading: 'Building: Types of drawings for building design',
          imgBig: require('../assets/articles/articles-building-big.jpg'),
          imgSmall: require('../assets/articles/articles-small.jpg'),
          date: '2 December, 2022',
          quote: 'Good design is good business.',
          intro: 'Leius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
        },
        {
          tag: 'Architecture',
          heading: 'Architecture: Title Blocks: Standards and Conventions',
          imgBig: require('../assets/articles/articles-big.jpg'),
          imgSmall: require('../assets/articles/articles-small.jpg'),
          date: '13 July, 2022',
          quote: 'Simplicity will stand out, while complexity will get lost in the crowd.',
          intro: 'Aeius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
        },
        {
          tag: 'Kitchen Planning',
          heading: 'Planning: Kitchen Design Ideas & Planning Advice',
          imgBig: require('../assets/articles/articles-kitchendesign-big.jpg'),
          imgSmall: require('../assets/articles/articles-small.jpg'),
          date: '14 April, 2022',
          quote: 'Make it simple, but significant.',
          intro: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.'
        }
      ],
      currentTag: '',
      tags: [
        {
          name: 'Kitchen',
          isActive: false
        },
        {
          name: 'Bedroom',
          isActive: false
        },
        {
          name: 'Building',
          isActive: false
        },
        {
          name: 'Architecture',
          isActive: false
        },
        {
          name: 'Kitchen Planning',
          isActive: false
        }
      ]
    }
  },
  methods: {
    setTag (tag) {
      this.currentTag = tag
    },
    changeTagStatus (tag) {
      this.tags.forEach(element => {
        element.isActive = false
        if (element.name === tag.name) {
          element.isActive = !element.isActive
        }
      })
    }
  },
  computed: {
    showArticles () {
      const filteredArticles = []
      if (!this.currentTag) {
        return this.blogArticles
      }
      this.blogArticles.forEach(article => {
        if (this.currentTag === article.tag) {
          filteredArticles.push(article)
        }
      })
      return filteredArticles
    }
  },
  components: { ArticleBlock }
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
  padding-bottom: 100px;

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
