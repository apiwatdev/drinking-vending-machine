<template>
  <div class="container">
    <div class="thank-you">
      Thank you!
    </div>
    <div class="drink-product">
      <div
        class="drink-image"
        :style="{ backgroundImage: `url(${product.image})` }"
      ></div>
    </div>
    <div>
      <div class="drink-detail">
        <h2>{{ product.name }}</h2>
        <h3>{{ product.price }} ฿</h3>
        <p>
          {{ product.description }}
        </p>
      </div>
      <div class="quantity">
        Quantity <span>{{ order.qty }}</span>
      </div>
      <div class="total">
        Total <span>{{ order.total }} ฿</span>
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
  computed: {
    product() {
      return this.$store.state.product || {};
    },
    order() {
      return this.$store.state.order || {};
    }
  },
  mounted() {
    if (!this.$store.state.product) {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 1rem;
}
.drink-product {
  display: block;
  width: 100%;
  min-width: 12rem;
  padding: 0.5rem;
  height: 24rem;
  margin: 0.5rem auto;
  border-radius: 5%;
  background-image: linear-gradient(180deg, $primary-color, #fec987);
  box-shadow: 2px 5px 12px 0 rgb(0 0 0 / 20%);

  .drink-image {
    width: 100%;
    height: 25rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 15rem;
  }
}


.price,
.total,
.quantity {
  margin-top: 1rem;
}

.thank-you {
  text-align: center;
  font-size: 50px;
  font-weight: 400;
  color: #666565;
}
</style>
