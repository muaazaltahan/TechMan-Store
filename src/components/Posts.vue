<template>
  <div class="allpds">
    <div class="filters">
      <div>
        <div class="f-title">Section</div>
        <select id="sec-filter" @change="filterBySec()">
          <option value="all">All</option>
          <option value="computers">Computers</option>
          <option value="mobiles">Mobiles</option>
          <option value="playstations">Playstations</option>
          <option value="watches">Watches</option>
        </select>
      </div>
      <div>
        <div class="f-title">Price</div>
        <select id="price-filter" @change="filterByPrice()">
          <option value="all">All</option>
          <option value="500.0">$500</option>
          <option value="1000.0">$1000</option>
          <option value="1500.0">$1500</option>
          <option value="2000.0">$2000</option>
        </select>
      </div>
    </div>
    <div class="pds">
      <div class="pd" v-for="Product in slicedPds" :key="Product.id">
        <div class="pd-name">
          {{ Product.name }} <span class="price">{{ '$' + Product.price }}</span>
        </div>
        <img :src="require(`../assets/${Product.image}`)" alt="Product Image" class="pd-img" />
        <div class="pd-desc" v-cutText>{{ Product.desc }}</div>
        <div class="pd-category">{{ Product.category }}</div>
        <div class="pd-amount">Amount:{{ Product.amount }}</div>
        <div class="read-more" @click="openProduct(Product.id)">Read More</div>
      </div>
    </div>
    <button class="show-more" @click="limit = limit + 5">Show More</button>
  </div>
</template>

<script>
import Products from '@/products.json'
export default {
  name: "Posts",
  data() {
    return {
      limit: 7,
      filteredBySec: [],
      filteredByPrice: []
    }
  },
  methods:{
    filterBySec(){
      let value = document.getElementById('sec-filter').value
      if(value === 'all'){
        this.filteredBySec = Products
      } else {
        this.filteredBySec = Products.filter(e => {
          return e.category === value
        })
      }
      this.limit = 7
    },
    filterByPrice(){
      let value = document.getElementById('price-filter').value
      if(value === 'all'){
        this.filteredByPrice = Products
      } else {
        this.filteredByPrice = Products.filter(e => {
          return e.price <= parseInt(value)
        })
      }
      this.limit = 7
    },
    openProduct(id){
      localStorage.setItem('productId',id)
      window.location.assign('./products/product')
    }
  },
  computed: {
    slicedPds() {
      var filteredPds = []
      for (let i = 0; i < Products.length; i++){
        if(this.filteredBySec.includes(Products[i]) && this.filteredByPrice.includes(Products[i])){
          filteredPds.push(Products[i])
        }
      }
      return filteredPds.slice(0, this.limit)
    }
  },
  mounted(){
    this.filteredBySec = Products
    this.filteredByPrice = Products
    if(localStorage.getItem('section')){
      document.getElementById('sec-filter').value = localStorage.getItem('section').toLowerCase()
      this.filterBySec()
      localStorage.removeItem('section')  
    }
  }
};
</script>