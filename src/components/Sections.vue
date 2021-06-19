<template>
  <div class="sections">
    <div
      class="sec"
      :id="section.name"
      v-for="section in sections"
      :key="section.id"
      @mouseover="openSection(section.name)"
      @mouseout="closeSection(section.name)"
      @click="goToSection(section.name)"
    >
      <div class="right"></div>
      <div class="left"></div>
      <div class="txt">{{ section.name }}</div>
      <div class="txtafter">{{ section.desc }}</div>
      <img :src="require(`../assets/${section.image}`)" :alt="section.name" />
    </div>
  </div>
</template>

<script>
import Sections from "../sections.json";
export default {
  name: "Sections",
  data() {
    return { sections: Sections };
  },
  methods: {
    openSection(id){
      if(window.screen.width >= 800){
        document.querySelector(`#${id} .left`).style.width = '0'
        document.querySelector(`#${id} .right`).style.width = '0'
        document.querySelector(`#${id} .txt`).style.opacity = '0'
      }
    },
    closeSection(id){
      if(window.screen.width >= 800){
        document.querySelector(`#${id} .left`).style.width = '50%'
        document.querySelector(`#${id} .right`).style.width = '50%'
        document.querySelector(`#${id} .txt`).style.opacity = '1'
      }
    },
    goToSection(secName){
      localStorage.setItem('section',secName)
      window.location.assign('./products')
    }
  }
};
</script>