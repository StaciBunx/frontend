<template>
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
          <li class=projects__item v-for="(category, index) in      categories     " :key="index"
            @click="setCategory(category.name), changeCategoryStatus(category)"
            :class="{ projects__item_active: category.isActive, projects__item_disabled: !category.isActive }">
            {{ category.name }}
          </li>
        </ul>
      </div>

      <div class=" projects__gallery">
        <ProjectBlock v-for="project in renderedProjects" :key="project.id" :project="project" class="projects__box" />
      </div>

      <ul class="projects__pages_list" @click="getCurrentPage">
        <li :class="{ page__active: currentPage === 1, projects__pages_item: currentPage !== 1 }">
          <a href="#" class="projects__pages_link" data-page="1">
            01
          </a>
        </li>
        <li :class="{ page__active: currentPage === 2, projects__pages_item: currentPage !== 2 }"><a href="#"
            class="projects__pages_link" data-page="2">
            02
          </a></li>
        <li :class="{ page__active: currentPage === 3, projects__pages_item: currentPage !== 3 }"><a href="#"
            class="projects__pages_link" data-page="3">
            03
          </a></li>
        <li class="projects__pages_item">
          <a href="#" class="projects__pages_link" @click="navigatePage">
            <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>

          </a>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import ProjectBlock from '@/blocks/ProjectBlock.vue'

export default {
  name: 'ProjectsPage',
  components: { ProjectBlock },
  data () {
    return {
      perPage: 6,
      currentPage: 1,
      categories: [{
        name: 'Bathroom',
        isActive: false
      },
      {
        name: 'Bedroom',
        isActive: false
      },
      {
        name: 'Kitchen',
        isActive: false
      },
      {
        name: 'Living Area',
        isActive: false
      }
      ],
      currentCategory: '',
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
          category: 'Bathroom',
          img: require('../assets/projects/project-2.jpg')
        },
        {
          id: 3,
          heading: 'Classic Minimal Bedroom',
          subheading: 'Decor / Artchitecture',
          category: 'Kitchen',
          img: require('../assets/projects/project-3.jpg')
        },
        {
          id: 4,
          heading: 'Classic Minimal Bedroom',
          subheading: 'Decor / Artchitecture',
          category: 'Living Area',
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
          category: 'Bathroom',
          img: require('../assets/projects/project-6.jpg')
        },
        {
          id: 7,
          heading: 'Classic Minimal Bedroom',
          subheading: 'Decor / Artchitecture',
          category: 'Bedroom',
          img: require('../assets/projects/project-7.jpg')
        },
        {
          id: 8,
          heading: 'Classic Minimal Bedroom',
          subheading: 'Decor / Artchitecture',
          category: 'Bathroom',
          img: require('../assets/projects/project-8.jpg')
        },
        {
          id: 9,
          heading: 'Classic Minimal Bedroom',
          subheading: 'Decor / Artchitecture',
          category: 'Kitchen',
          img: require('../assets/projects/project-9.jpg')
        },
        {
          id: 10,
          heading: 'Classic Minimal Bedroom',
          subheading: 'Decor / Artchitecture',
          category: 'Living Area',
          img: require('../assets/projects/project-10.jpg')
        },
        {
          id: 11,
          heading: 'Classic Minimal Bedroom',
          subheading: 'Decor / Artchitecture',
          category: 'Bedroom',
          img: require('../assets/projects/project-11.jpg')
        },
        {
          id: 12,
          heading: 'Classic Minimal Bedroom',
          subheading: 'Decor / Artchitecture',
          category: 'Bathroom',
          img: require('../assets/projects/project-12.jpg')
        },
        {
          id: 13,
          heading: 'Classic Minimal Bedroom',
          subheading: 'Decor / Artchitecture',
          category: 'Bedroom',
          img: require('../assets/projects/project-1.jpg')
        },
        {
          id: 14,
          heading: 'Classic Minimal Bedroom',
          subheading: 'Decor / Artchitecture',
          category: 'Bathroom',
          img: require('../assets/projects/project-2.jpg')
        },
        {
          id: 15,
          heading: 'Classic Minimal Bedroom',
          subheading: 'Decor / Artchitecture',
          category: 'Kitchen',
          img: require('../assets/projects/project-3.jpg')
        },
        {
          id: 16,
          heading: 'Classic Minimal Bedroom',
          subheading: 'Decor / Artchitecture',
          category: 'Living Area',
          img: require('../assets/projects/project-4.jpg')
        },
        {
          id: 17,
          heading: 'Classic Minimal Bedroom',
          subheading: 'Decor / Artchitecture',
          category: 'Bedroom',
          img: require('../assets/projects/project-5.jpg')
        },
        {
          id: 18,
          heading: 'Classic Minimal Bedroom',
          subheading: 'Decor / Artchitecture',
          category: 'Bathroom',
          img: require('../assets/projects/project-6.jpg')
        }
      ]
    }
  },
  methods: {
    setCategory (category) {
      this.currentCategory = category
    },
    changeCategoryStatus (category) {
      this.categories.forEach(element => {
        element.isActive = false
        if (element.name === category.name) {
          element.isActive = !element.isActive
        }
      })
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
    renderedProjects () {
      let currentProjects = []
      if (!this.currentCategory) {
        currentProjects = JSON.parse(JSON.stringify(this.projects))
        const index = this.currentPage * this.perPage - this.perPage
        return currentProjects.splice(index, this.perPage)
      }
      this.projects.forEach(project => {
        if (this.currentCategory === project.category) {
          currentProjects.push(project)
        }
      })
      return currentProjects
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
    border-radius: 16px;
    justify-content: center;
    align-items: center;

    &_active {
      background-color: #CDA274;
      color: white;
    }

    &_disabled {
      background-color: none;
      color: black;
    }
  }

  &__item:hover {
    background-color: #CDA274;
    color: white;
  }

  &__gallery {
    column-count: 2;
    margin-bottom: 100px;
    column-gap: 50px;
  }

  &__box {
    width: 585px;
    margin-bottom: 25px;
    position: relative;

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

.page__active {
  border: none;
  background-color: #F4F0EC;
  border-radius: 50%;
}
</style>
