<template>
  <div class="container">
    <div class="drinking-list">
      <div class="drink-product" @click="toToProduct()">
        <div class="drink-image" :style="{ backgroundImage: `url(${image})` }">
        </div>
        <div class="price">10 ฿</div>
      </div>

      <div class="drink-product">
        <div class="drink-image" :style="{ backgroundImage: `url(${image})` }">
          <img src="" alt="" />
        </div>
        <div class="price">10 ฿</div>
      </div>

      <div class="drink-product">
        <div class="drink-image" :style="{ backgroundImage: `url(${image})` }">
          <img src="" alt="" />
        </div>
        <div class="price">10 ฿</div>
      </div>

       <div class="drink-product">
        <div class="drink-image" :style="{ backgroundImage: `url(${image})` }">
          <img src="" alt="" />
        </div>
        <div class="price">10 ฿</div>
      </div>
    </div>
  </div>
</template>

<script>
import cokeImage from "~/assets/images/cocacola_PNG22.png";
export default {
  layout: "machine",
  data() {
    return {
      image: cokeImage
    };
  },
  methods :{
    toToProduct(){
      this.$router.push('/aaaa/aaa')
    }
  }
};
</script>

<style lang="scss" scoped>
.drinking-list {
     display: inline-grid;
     width: 100%;
    text-align: center;
    margin: 0 auto;
    grid-template-columns: auto auto;
  .drink-product {
    display: block;
    width: 12rem;
    min-width: 12rem;
    padding: 0.5rem;
    height: 15rem;
   margin: 0.5rem auto;
    border-radius: 10%;
    cursor: pointer;
    background-image: linear-gradient(180deg, $primary-color, #fec987);
    box-shadow: 2px 5px 12px 0 rgb(0 0 0 / 20%);

    .drink-image {
      width: 100%;
      height: 12rem;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 15rem;
    }
    .price {
      text-align: center;
      font-weight: bold;
    font-size: 20px;
    color: #fff;
    }
  }
}
</style>
