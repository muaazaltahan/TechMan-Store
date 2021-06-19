<template>
  <div class="product">
    <img :src="prodImage.image" alt="Product Image" class="pd-img" />
    <div class="pd-name">
        {{ product.name }}
    </div>
    <div class="pd-desc">{{ product.desc }}</div>
    <div class="pd-category">{{ product.category }}</div>
    <div class="pd-amount">Amount:{{ product.amount }}</div>
    <div class="pd-price">{{ '$' + product.price }}</div>
    <button class="buy-btn">Buy Now</button>
  </div>
</template>

<script>
import Products from '@/products.json'
export default {
  name: 'Product',
  data(){
    return {
      product: {},
      productId: '',
    }
  },
  computed: {
    prodImage(){
      return {
        image: this.product.image && require(`../assets/${this.product.image}`)
      }
    }
  },
  metaInfo() {
    const title = this.product.name
    const desc = this.product.desc
    return {
      title: title,
      meta: [
        {
          name: 'description', content: desc
        }
      ]
    } 
  },
  mounted(){
    if(!localStorage.getItem('productId')){
      window.location.assign('../')
    } else {
      this.productId = localStorage.getItem('productId')
      this.product = Products[this.productId]
    }
  }
}
</script>