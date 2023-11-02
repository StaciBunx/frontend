<template>
  <div>
    <img class="big" :src="imgLinks[currentImg]" alt="img">
    <div class="preview">
      <img v-for="(img, index) in imgLinks" :key="index" class="small" :src="img" alt="img" @click="currentImg = index">
    </div>
  </div>
</template>
<script>

export default {
  name: 'GalleryComp',
  data () {
    return {
      currentImg: 0,
      imgLinks: ['https://img.freepik.com/premium-photo/a-lake-in-the-mountains-with-a-mountain-in-the-background_804007-45.jpg', 'https://img.freepik.com/free-photo/mountains-lake_1398-1150.jpg', 'https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698796800&semt=ais'
      ]
    }
  }

}
</script>
<style>
.preview {
  margin-top: 20px;
  display: flex;
  gap: 20px;
  justify-content: center;
}

.small {
  width: 250px;
  height: 250px;
}

.big {
  height: 600px;
}
</style>
