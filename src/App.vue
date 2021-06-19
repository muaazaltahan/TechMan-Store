<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <div class="nav-item">
          <img src="./assets/hm.png" alt="Home">
        </div>
      </router-link>
      <router-link to="/products">
        <div class="nav-item">
          <img src="./assets/cg.png" alt="Products">
        </div>
      </router-link>
      <router-link to="/about">
        <div class="nav-item">
          <img src="./assets/ab.png" alt="About">
        </div>
      </router-link>
    </nav>
    <button class="sidebar-toggler" @click="toggleSidebar">
      &equiv;
    </button>
    <div id="sidebar">
      <div class="list">
        <div class="title">Follow Us</div>
        <div class="items">
          <a href="https://www.facebook.com/DeveloperMuaaz/">
            <img src="./assets/fb.png" alt="Facebook" class="social">
          </a>
          <a href="https://www.instagram.com/muaaz_al_tahan/">
            <img src="./assets/ins.png" alt="Instagram" class="social">
          </a>
          <a href="https://t.me/muaazaltahan">
            <img src="./assets/tel.png" alt="Telegram" class="social">
          </a>
        </div>
      </div>
      <div class="list">
        <div class="title">Related Products</div>
        <div class="items">
          <div class="pd" @click="openProduct(0)">
            <div class="pd-name">{{ products[0].name }} <span class="price">{{ '$' + products[1].price }}</span></div>
            <img :src="require(`./assets/${products[0].image}`)" alt="Product Image" class="pd-img">
          </div>
          <div class="pd" @click="openProduct(1)">
            <div class="pd-name">{{ products[1].name }} <span class="price">{{ '$' + products[1].price }}</span></div>
            <img :src="require(`./assets/${products[1].image}`)" alt="Product Image" class="pd-img">
          </div>
        </div>
      </div>
    </div>
    <div id="content"><router-view/></div>
  </div>
</template>

<script>
import Products from './products.json'
window.onresize = () => {
  var sidebar = document.getElementById('sidebar')
  var content = document.getElementById('content')
  sidebar.style.width = '0px'
  content.style.width = '100%'
}
export default {
  methods: {
    toggleSidebar(){
      var sidebar = document.getElementById('sidebar')
      var content = document.getElementById('content')
      if(window.screen.width <= 500){
        if(sidebar.style.width != '100%'){
          sidebar.style.width = '100%'
        } else {
          sidebar.style.width = '0px'
        }
      } else if(window.screen.width > 500 && window.screen.width <= 1000){
        if(sidebar.style.width != '50%'){
          sidebar.style.width = '50%'
        } else {
          sidebar.style.width = '0px'
        }
      } else {
        if(sidebar.style.width != '25%'){
          sidebar.style.width = '25%'
          content.style.width = '75%'
        } else {
          sidebar.style.width = '0px'
          content.style.width = '100%'
        }
      }
    },
    openProduct(id){
      localStorage.setItem('productId',id)
      window.location.assign('/products/product')
    }
  },
  data(){
    return {
      products: Products
    }
  },
  metaInfo: {
    title: 'TechMan Store',
    titleTemplate: '%s - TechMan Store',
  }
}
</script>