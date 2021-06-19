<template>
  <div class="home">
    <header>
      <img src="../assets/logo.png" alt="Logo" class="logo">
      <div class="desc">Welcome To TechMan.<br>The Biggest Store For Technologies.</div>
      <div class="search-form">
        <input type="search" placeholder="Search For A Product">
        <button type="submit"><img src="../assets/sch.png" alt="Search"></button>
      </div>
    </header>
    <Sections/>
  </div>
</template>

<script>
import Sections from '@/components/Sections.vue'
export default {
  name: 'Home',
  components: {Sections},
  metaInfo: {
    title: 'Home',
    meta: [
      {
        name: 'description', content: 'The Biggest Store For Technologies.'
      }
    ]
  }
}
</script>