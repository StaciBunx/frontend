<template lang="">
    <div>
        <main>
<section class="blog__top">
    <img src="../assets/blog/blog-top-banner.jpg" alt="blog top-banner" style="min-height:356px">
    <div class="blog__top_content">
        <h1 class="heading">Articles & News</h1>
        <p class="text">Home / Blog</p>
    </div>
</section>

<section class="blog__latest center">
    <h2 class="blog__latest_heading ">Latest Post</h2>
    <div class="blog__latest_box">
        <img :src="latestArticle.src" alt="latest image" class="blog__latest_img"
            style="min-width: 569px; min-height:478px;">
        <div class="blog__latest_content">
            <h3 class="blog__latest_subheading">{{latestArticle.heading}}</h3>
            <p class="blog__latest_text text">{{latestArticle.description}}
            </p>
            <div class="blog__latest_bottom">
                <p class="blog__latest_date">{{latestArticle.date}}</p>
                <a href="#" class="blog__latest_more">
                    <svg width="52" height="53" viewBox="0 0 52 53" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                        <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>

        </div>
    </div>

</section>

<section class="blog center">
  <router-link to="/articles"><h2 class="blog__latest_heading">Articles & News</h2></router-link>
    <div class="blog__box">
        <div v-for="item in paginatedArticles" :key="item.id">
            <div class="blog__item">
                <img :src="item.src" alt="blog image" class="blog__img"
                    style="min-width: 340px; min-height:289px;">
                <h4 class="blog__tag">{{item.tag}}</h4>
                <h3 class="blog__heading">{{item.heading}}</h3>
                <div class="blog__content">
                    <time datetime="2022-12-26" class="blog__date">{{item.date}}</time>
                      <router-link to="/articles" class="blog__more">
                        <svg width="52" height="53" viewBox="0 0 52 53" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </router-link>
                  </div>
            </div>
        </div>
    </div>

    <ul class="blog__pages_list" @click="getCurrentPage">
        <li :class="{page__active: currentPage === 1, blog__pages_item: currentPage !== 1}" >
          <a href="#" class="blog__pages_link" data-page="1">
                01
            </a></li>
        <li :class="{page__active: currentPage === 2, blog__pages_item: currentPage !== 2}" ><a href="#" class="blog__pages_link" data-page="2">
                02
            </a></li>
        <li :class="{page__active: currentPage === 3, blog__pages_item: currentPage !== 3}" ><a href="#" class="blog__pages_link" data-page="3">
                03
            </a></li>
        <li class="blog__pages_item">
          <a href="#" class="blog__pages_link" @click="navigatePage">
                <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </a></li>
    </ul>
</section>

</main>
    </div>
</template>
<script>
export default {
  name: 'BlogPage.vue',
  data () {
    return {
      latestArticle: {},
      perPage: 6,
      currentPage: 1,
      articles: [
        {
          id: 1,
          src: require('../assets/blog/blog-1.jpg'),
          tag: 'Kitchen Design',
          heading: 'Let’s Get Solution For Building Construction Work',
          date: '26 December, 2022',
          description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
        },
        {
          id: 2,
          src: require('../assets/blog/blog-2.jpg'),
          tag: 'Living Design',
          heading: 'Let’s Get Solution For Building Construction Work',
          date: '22 December, 2022',
          description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
        },
        {
          id: 3,
          src: require('../assets/blog/blog-3.jpg'),
          tag: 'Interior Design',
          heading: 'Let’s Get Solution For Building Construction Work',
          date: '25 December, 2022',
          description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
        },
        {
          id: 4,
          src: require('../assets/blog/blog-1.jpg'),
          tag: 'Kitchen Design',
          heading: 'Let’s Get Solution For Building Construction Work',
          date: '26 December, 2022',
          description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
        },
        {
          id: 5,
          src: require('../assets/blog/blog-2.jpg'),
          tag: 'Living Design',
          heading: 'Let’s Get Solution For Building Construction Work',
          date: '22 December, 2022',
          description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
        },
        {
          id: 6,
          src: require('../assets/blog/blog-3.jpg'),
          tag: 'Interior Design',
          heading: 'Let’s Get Solution For Building Construction Work',
          date: '30 December, 2022',
          description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
        },
        {
          id: 7,
          src: require('../assets/blog/blog-3.jpg'),
          tag: 'Kitchen Design',
          heading: 'Let’s Get Solution For Building Construction Work',
          date: '26 December, 2022',
          description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
        },
        {
          id: 8,
          src: require('../assets/blog/blog-1.jpg'),
          tag: 'Living Design',
          heading: 'Let’s Get Solution For Building Construction Work',
          date: '22 December, 2022',
          description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
        },
        {
          id: 9,
          src: require('../assets/blog/blog-2.jpg'),
          tag: 'Interior Design',
          heading: 'Let’s Get Solution For Building Construction Work',
          date: '25 December, 2022',
          description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
        },
        {
          id: 10,
          src: require('../assets/blog/blog-1.jpg'),
          tag: 'Kitchen Design',
          heading: 'Let’s Get Solution For Building Construction Work',
          date: '26 December, 2022',
          description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
        },
        {
          id: 11,
          src: require('../assets/blog/blog-3.jpg'),
          tag: 'Living Design',
          heading: 'Let’s Get Solution For Building Construction Work',
          date: '22 December, 2022',
          description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
        },
        {
          id: 12,
          src: require('../assets/blog/blog-2.jpg'),
          tag: 'Interior Design',
          heading: 'Let’s Get Solution For Building Construction Work',
          date: '30 December, 2022',
          description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
        },
        {
          id: 13,
          src: require('../assets/blog/blog-3.jpg'),
          tag: 'Interior Design',
          heading: 'Let’s Get Solution For Building Construction Work',
          date: '30 December, 2022',
          description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
        },
        {
          id: 14,
          src: require('../assets/blog/blog-3.jpg'),
          tag: 'Kitchen Design',
          heading: 'Let’s Get Solution For Building Construction Work',
          date: '26 December, 2022',
          description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
        },
        {
          id: 15,
          src: require('../assets/blog/blog-1.jpg'),
          tag: 'Living Design',
          heading: 'Let’s Get Solution For Building Construction Work',
          date: '22 December, 2022',
          description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
        },
        {
          id: 16,
          src: require('../assets/blog/blog-2.jpg'),
          tag: 'Interior Design',
          heading: 'Let’s Get Solution For Building Construction Work',
          date: '25 December, 2022',
          description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
        },
        {
          id: 17,
          src: require('../assets/blog/blog-1.jpg'),
          tag: 'Kitchen Design',
          heading: 'Let’s Get Solution For Building Construction Work',
          date: '26 December, 2022',
          description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
        },
        {
          id: 18,
          src: require('../assets/blog/blog-3.jpg'),
          tag: 'Living Design',
          heading: 'Let’s Get Solution For Building Construction Work',
          date: '25 January, 2024',
          description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
        }
      ]
    }
  },
  created () { this.getLatestArticle() },
  methods: {
    getLatestArticle () {
      this.latestArticle = this.articles.reduce((acc, curr) => acc.id > curr.id ? acc : curr)
    },
    getCurrentPage (event) {
      event.preventDefault()
      if (event.target.tagName === 'A') {
        this.currentPage = Number(event.target.dataset.page)
      }
    },
    navigatePage () {
      if (this.currentPage === 3) {
        this.currentPage = 1
      } else this.currentPage += 1
    }
  },

  computed: {
    paginatedArticles () {
      const currentArticles = JSON.parse(JSON.stringify(this.articles))
      const index = this.currentPage * this.perPage - this.perPage
      return currentArticles.splice(index, this.perPage)
    }
  }
}
</script>
<style lang="scss">
@import "../styles/vars";

.blog {

  &__top {
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 200px;
    position: relative;

    &_content {
      position: absolute;
      width: 503px;
      height: 178px;
      border-radius: 37px 37px 0px 0px;
      background: #FFF;
      display: grid;
      align-content: center;
      justify-items: center;
    }
  }

  &__latest {

    &_heading {
      font-family: 'DM Serif Display', serif;
      font-style: normal;
      color: $black;
      font-weight: 400;
      font-size: 50px;
      line-height: 125%;
      letter-spacing: 1px;
      margin-bottom: 27px;
    }

    &_box {
      display: flex;
      padding: 22px;
      width: 1200px;
      height: 522px;
      border-radius: 62px;
      border: 1px solid #E7E7E7;
      box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
      gap: 65px;
      margin-bottom: 150px;

    }

    &_box:hover {
      background-color: #F4F0EC;
      border-color: #F4F0EC;
    }

    &_box:hover circle {
      fill: white;
    }

    &_img {
      height: 478px;
      border-radius: 75px;
      background: #C4C4C4;
    }

    &_content {
      display: grid;
      align-content: center;
    }

    &_subheading {

      color: $black;
      font-family: DM Serif Display;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 0.5px;
      margin-bottom: 22px;

    }

    &_text {
      margin-bottom: 50px;
    }

    &_bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &_date {
      color: $gray;
      font-family: Jost;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.16px;
      text-transform: capitalize;
    }

  }

  &__pages {

    &_list {
      display: flex;
      justify-content: center;
      padding-top: 51px;
      gap: 20px
    }

    &_link {
      display: grid;
      justify-content: center;
      align-content: center;
      width: 52px;
      height: 52px;
      border: 1px solid #CDA274;
      color: $black;
      border-radius: 50%;
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
    }

    &_link:hover {
      border: none;
      background-color: #F4F0EC;
      color: inherit;
      ;
    }
  }
}

.page__active {
  border: none;
  background-color: #F4F0EC;
  border-radius: 50%;
}
</style>
