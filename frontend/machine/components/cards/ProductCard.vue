<template>
  <div
    class="drink-product"
    @click="goto(machineId, productId, stock != 0)"
    :class="{ 'text-sold-out': stock == 0 }"
  >
    <div v-if="stock == 0"  class="soldout">
      <img  src="~assets/icons/SOLD OUT.svg" alt="" />
    </div>
    <div
      class="drink-image"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
    <div class="price">{{ price }} ฿</div>
  </div>
</template>

<script>
export default {
  props: {
    productId: String,
    image: String,
    price: Number,
    goto: Function,
    machineId: String,
    stock: Number
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.drink-product.text-sold-out {
  cursor: not-allowed;
}

.drink-product {
  display: block;
  position: relative;
  width: 12rem;
  min-width: 12rem;
  padding: 0.5rem;
  height: 15rem;
  margin: 0.5rem auto;
  border-radius: 10%;
  cursor: pointer;
  background-image: linear-gradient(180deg, $primary-color, #fec987);
  box-shadow: 2px 5px 12px 0 rgb(0 0 0 / 20%);

  .soldout {
    position: absolute;
    color: #f00;
    right: 0;
    top: 10%;
  }
  .drink-image {
    width: 100%;
    height: 12rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 9rem;
  }
  .price {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: #fff;
  }
}
</style>
