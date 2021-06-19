<template>
  <div>
    <Posts/>
  </div>
</template>

<script>
import Posts from '@/components/Posts'
export default {
  name: 'Products',
  components: {Posts},
  metaInfo: {
    title: 'Browse Products',
    meta: [
      {
        name: 'description', content: 'Browse Products In TechMan Store.'
      }
    ]
  }
}
</script>