<template lang="">
  <div>
    <section class="blog center">
            <div class="blog__intro">
                <h2 class="heading blog__intro_heading">Articles & News</h2>
                <p class="text blog__intro_text">It is a long established fact that a reader will be distracted by the
                    of readable content of
                    a page when lookings at its layouts the points of using.</p>
            </div>

            <div class="blog__box">

                <div class="blog__item">
                    <img src="../assets/index/blog-1.jpg" alt="blog image" class="blog__img"
                        style="min-width: 340px; min-height:289px;">
                    <h4 class="blog__tag">Kitchen Design</h4>
                    <h3 class="blog__heading">Let’s Get Solution For Building Construction Work</h3>
                    <div class="blog__content">
                        <time datetime="2022-12-26" class="blog__date">26 December, 2022</time>
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

                <div class="blog__item">
                    <img src="../assets/index/blog-2.jpg" alt="blog image" class="blog__img"
                        style="min-width: 340px; min-height:289px;">
                    <h4 class="blog__tag">Living Design</h4>
                    <h3 class="blog__heading">Let’s Get Solution For Building Construction Work</h3>
                    <div class="blog__content">
                        <time datetime="2022-12-26" class="blog__date">22 December, 2022</time>
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

                <div class="blog__item">
                    <img src="../assets/index/blog-3.jpg" alt="blog image" class="blog__img"
                        style="min-width: 340px; min-height:289px;">
                    <h4 class="blog__tag">Interior Design</h4>
                    <h3 class="blog__heading">Let’s Get Solution For Building Construction Work</h3>
                    <div class="blog__content">
                        <time datetime="2022-12-26" class="blog__date">25 December, 2022</time>
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
        </section>
  </div>
</template>
<script>
export default {
  name: 'IndexBlogBlock'

}
</script>
<style lang="scss">
@import "../styles/vars";

.blog {
  padding-bottom: 100px;

  &__intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 93px;

    &_text {
      width: 737px;
      text-align: center;
    }
  }

  &__box {
    display: flex;
    gap: 27px;
    flex-wrap: wrap;
  }

  &__item {
    width: 382px;
    height: 521px;
    padding: 21px;
    border-radius: 62px;
    border: 1px solid #E7E7E7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    position: relative;
  }

  &__item:hover {
    background-color: #F4F0EC;
    border-color: #F4F0EC;
  }

  &__item:hover circle {
    fill: white;
  }

  &__img {
    background-color: #EAEAEA;
    border-radius: 45px 45px 0px 0px;
    margin-bottom: 21px;
  }

  &__tag {
    position: absolute;
    left: 41px;
    top: 249px;
    color: $gray;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
    display: inline-block;
    font-weight: 400;
    width: 124px;
    height: 41px;
    border-radius: 8px 8px 8px 0px;
    background-color: #FFF;
    text-align: center;
    padding: 8px 0;
  }

  &__heading {
    font-family: 'DM Serif Display', serif;
    font-style: normal;
    font-weight: 400;
    color: $black;
    font-size: 25px;
    line-height: 125%;
    letter-spacing: 0.5px;
    text-align: left;
    margin-bottom: 30px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__date {
    color: $gray;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.16px;
  }

}
</style>
