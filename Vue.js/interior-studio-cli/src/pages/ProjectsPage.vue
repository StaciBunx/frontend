<template lang="">
  <div>
    <section class="projects__top">
    <img src="../assets/projects/projects-top-banner.jpg" alt="project top-banner" style="min-height:356px">
    <div class="projects__top_content">
        <h1 class="heading">Our Projects</h1>
        <p class="text">Home / Projecrs</p>
    </div>
</section>

<section class="projects center">
  <div class="projects__list_content">
    <ul class="projects__list">
        <li class=projects__item v-for="(category,index) in categories" :key="index">{{category}}</li>
    </ul>
</div>

<div class="projects__gallery">
<div class="projects__box" v-for="project in projects" :key="project.id">
  <img :src="project.img" alt="project image" class="projects__img">
  <div class="projects__desc">
    <div class="projects__content">
      <h3 class="projects__heading">{{project.heading}}</h3>
      <p class="projects__subheading">{{project.subheading}}</p>
    </div>
<a href="#"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
<path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a>

  </div>

</div>
</div>

    <ul class="projects__pages_list">
        <li class="projects__pages_item"><a href="#" class="projects__pages_link">
                01
            </a></li>
        <li class="projects__pages_item"><a href="#" class="projects__pages_link">
                02
            </a></li>
        <li class="projects__pages_item"><a href="#" class="projects__pages_link">
                03
            </a></li>
        <li class="projects__pages_item"><a href="#" class="projects__pages_link">
                <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </a></li>
    </ul>
    </section>
  </div>
</template>
<script>
export default {
  name: 'ProjectsPage',
  data () {
    return {
      categories: ['Bathroom', 'Bed Room', 'Kitchen', 'Living Area'],
      projects: [
        {
          id: 1,
          heading: 'Classic Minimal Bedroom',
          subheading: 'Decor / Artchitecture',
          category: 'Bedroom',
          img: require('../assets/projects/project-1.jpg')
        },
        {
          id: 2,
          heading: 'Classic Minimal Bedroom',
          subheading: 'Decor / Artchitecture',
          category: 'Bedroom',
          img: require('../assets/projects/project-2.jpg')
        },
        {
          id: 3,
          heading: 'Classic Minimal Bedroom',
          subheading: 'Decor / Artchitecture',
          category: 'Bedroom',
          img: require('../assets/projects/project-3.jpg')
        },
        {
          id: 4,
          heading: 'Classic Minimal Bedroom',
          subheading: 'Decor / Artchitecture',
          category: 'Bedroom',
          img: require('../assets/projects/project-4.jpg')
        },
        {
          id: 5,
          heading: 'Classic Minimal Bedroom',
          subheading: 'Decor / Artchitecture',
          category: 'Bedroom',
          img: require('../assets/projects/project-5.jpg')
        },
        {
          id: 6,
          heading: 'Classic Minimal Bedroom',
          subheading: 'Decor / Artchitecture',
          category: 'Bedroom',
          img: require('../assets/projects/project-6.jpg')
        }
      ]
    }
  }

}
</script>
<style lang="scss">
.projects {

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

  &__list {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    display: grid;
    height: 75px;
    grid-template-columns: repeat(4, 219px);
    border-radius: 18px;
    border: 1px solid #CDA274;
    justify-items: center;
    align-items: center;
    margin-bottom: 60px;

    &_content {
      display: flex;
      justify-content: center;

    }

  }

  &__item {
    display: flex;
    cursor: pointer;
    height: 75px;
    width: 219px;
    border-radius: 18px;
    justify-content: center;
    align-items: center;
  }

  &__item:hover {
    background-color: #CDA274;
    color: white;
  }

  &__gallery {
    column-count: 2;
    margin-bottom: 100px;
  }

  &__box {
    width: 585px;
    margin-bottom: 25px;

  }

  &__img {
    margin-bottom: 25px;
  }

  &__desc {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

  }

  &__heading {
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
  }

  &__pages {

    &_list {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 100px;
    }

    &_link {
      display: grid;
      justify-content: center;
      align-content: center;
      width: 52px;
      height: 52px;
      border: 1px solid #CDA274;
      color: black;
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
</style>
