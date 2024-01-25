<template lang="">
  <div>
    <section class="projects center">
            <div class="projects__intro">
                <h2 class="heading projects__intro_heading">Follow Our Projects</h2>
                <p class="text projects__intro_text">It is a long established fact that a reader will be distracted by
                    the of readable
                    content of page lookings at its layouts points.</p>
            </div>

            <div class="projects__gallery">

                <div class="projects__gallery_item">
                    <img src="../assets/index/project-1.jpg" alt="project image" class="projects__gallery_img"
                        style="min-width: 525px; min-height:548px;">

                    <div class="projects__gallery_box">
                        <div class="projects__gallery_content">
                            <h3 class="projects__gallery_heading">Modern Kitchan</h3>
                            <p class="projects__gallery_text text">Decor / Artchitecture</p>

                        </div>
                        <router-link to="/projects-details" class="projects__gallery_more"><svg xmlns="http://www.w3.org/2000/svg" width="70"
                                height="70" viewBox="0 0 70 70" fill="none">
                                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </router-link>
                    </div>

                </div>
                <div class="projects__gallery_item">
                    <img src="../assets/index/project-2.jpg" alt="project image" class="projects__gallery_img"
                        style="min-width: 525px; min-height:548px;">

                    <div class="projects__gallery_box">
                        <div class="projects__gallery_content">
                            <h3 class="projects__gallery_heading">Modern Kitchen</h3>
                            <p class="projects__gallery_text text">Decor / Artchitecture</p>

                        </div>
                        <router-link to="/projects-details" class="projects__gallery_more"><svg xmlns="http://www.w3.org/2000/svg" width="70"
                                height="70" viewBox="0 0 70 70" fill="none">
                                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </router-link>
                    </div>

                </div>
                <div class="projects__gallery_item">
                    <img src="../assets/index/project-3.jpg" alt="project image" class="projects__gallery_img"
                        style="min-width: 525px; min-height:548px;">

                    <div class="projects__gallery_box">
                        <div class="projects__gallery_content">
                            <h3 class="projects__gallery_heading">Modern Kitchan</h3>
                            <p class="projects__gallery_text text">Decor / Artchitecture</p>

                        </div>
                        <router-link to="/projects-details" class="projects__gallery_more"><svg xmlns="http://www.w3.org/2000/svg" width="70"
                                height="70" viewBox="0 0 70 70" fill="none">
                                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </router-link>
                    </div>

                </div>
                <div class="projects__gallery_item">
                    <img src="../assets/index/project-4.jpg" alt="project image" class="projects__gallery_img"
                        style="min-width: 525px; min-height:548px;">

                    <div class="projects__gallery_box">
                        <div class="projects__gallery_content">
                            <h3 class="projects__gallery_heading">Modern Kitchan</h3>
                            <p class="projects__gallery_text text">Decor / Artchitecture</p>

                        </div>
                        <router-link to="/projects-details" class="projects__gallery_more"><svg xmlns="http://www.w3.org/2000/svg" width="70"
                                height="70" viewBox="0 0 70 70" fill="none">
                                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
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
  name: 'IndexProjectsBlock'

}
</script>
<style lang="scss" scoped>
.projects {
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

  &__gallery {

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &_item {
      min-width: 525px;
      margin-bottom: 50px;
    }

    &_img {
      background: #C4C4C4;
      margin-bottom: 43px;
    }

    &_box {
      display: flex;
      justify-content: space-between;
    }

    &_heading {
      font-family: 'DM Serif Display', serif;
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 125%;
      letter-spacing: 0.5px;
      text-align: left;
      margin-bottom: 4px;
    }

    &_more {
      display: inline-block;
    }

  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .projects__gallery {
      justify-content: center;
    }
  }
}
</style>
