<template lang="">
  <div>
<IndexTopBlock />
<IndexProjectsBlock />
<IndexCounterBlock />
<IndexBlogBlock />
  </div>
</template>
<script>
import IndexTopBlock from '../blocks/IndexTopBlock.vue'
import IndexProjectsBlock from '../blocks/IndexProjectsBlock.vue'
import IndexCounterBlock from '../blocks/IndexCounterBlock.vue'
import IndexBlogBlock from '../blocks/IndexBlogBlock.vue'

export default {
  name: 'IndexPage',
  components: {
    IndexTopBlock,
    IndexProjectsBlock,
    IndexCounterBlock,
    IndexBlogBlock
  }

}
</script>
