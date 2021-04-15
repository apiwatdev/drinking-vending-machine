<template>
  <div class="container">
    <div class="back">
      <img @click="goBack()" src="~assets/icons/arrow-left-short.svg" alt="" />
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
        <div class="minus">
          <img
            @click="updateQty('minus', -1)"
            src="~assets/icons/minus.svg"
            alt=""
          />
        </div>
        <div class="qty">
          <input
            type="number"
            v-model="qty"
            min="0"
            :max="product.stock"
            @change="updateQty('set', $event.target.value)"
          />
        </div>
        <div class="plus">
          <img
            @click="updateQty('plus', 1)"
            src="~assets/icons/plus.svg"
            alt=""
          />
        </div>
        <div class="avaliable">{{ product.stock }} Avaliable</div>
      </div>
      <div class="total">
        Total <span>{{ total }} ฿</span>
      </div>
      <div class="paynow">
        <button @click="paynow()" class="paynow-btn">Pay now</button>
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
      image: cokeImage,
      qty: 1
    };
  },
  fetch() {
    const machine = this.$route.params.machine;
    const product = this.$route.params.product;
    this.$store.dispatch("fetchProduct", {
      machineId: machine,
      productId: product
    });
  },
  computed: {
    product() {
      return this.$store.state.product || {};
    },
    order() {
      return this.$store.state.order || {};
    },
    total() {
      const price = this.$store.state.product
        ? this.$store.state.product.price
        : 0;
      return price * this.qty;
    }
  },
  mounted() {
    if (!this.$store.state.product) {
      const machine = this.$route.params.machine;
      const product = this.$route.params.product;
      this.$store.dispatch("fetchProduct", {
        machineId: machine,
        productId: product
      });
    }
  },
  methods: {
    paynow() {
      const machine = this.$route.params.machine;
      const product = this.$route.params.product;
      this.$store.commit("setOrder", {
        machineId: machine,
        productId: product,
        qty: this.qty,
        total: this.total
      });

       this.$axios
        .post(`/api/machine-products/${machine}/${product}/stock/decrease`, {
          num: this.qty
        })
        .then(res => {
          this.$router.push("/" + machine + "/order");
        });
    },
    goBack() {
      this.$router.go(-1);
    },
    updateQty(type, num) {
      let update = 0;
      switch (type) {
        case "minus":
          this.qty += num;
          break;
        case "plus":
          this.qty += num;
          break;
        case "set": {
          this.qty = Number(num);
        }
      }
      if (this.qty >= this.product.stock) {
        this.qty = this.product.stock;
      } else if (this.qty < 1) {
        this.qty = 1;
      }

      this.$store.commit("setOrderQty", this.qty);
      this.$store.commit("setOrderTotal", this.total);
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
  cursor: pointer;
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

.quantity {
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;

  .minus {
    margin: 0 0.5rem;
    cursor: pointer;
  }

  .qty {
    margin: 0 0.5rem;
    input {
      border: none;
      width: 2.5rem;
      text-align: center;
      font-size: 20px;
      padding: 0.25rem;
      font-weight: 600;
      outline: none;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  .plus {
    margin: 0 0.5rem;
    cursor: pointer;
  }

  .avaliable {
    font-size: 14px;
    padding-top: 0.25rem;
  }
}

.total {
  margin-top: 2rem;

  span {
    font-weight: 700;
  }
}

.paynow-btn {
  width: 100%;
  cursor: pointer;
  color: #fff;
  border: none;
  background-color: #fec987;
  font-family: "Prompt", Arial, sans-serif;
  font-size: 20px;
  box-shadow: 2px 5px 12px 0 rgb(0 0 0 / 20%);
  margin: 1rem auto;
  padding: 0.8rem 0;
  border-radius: 5px;
  font-weight: 700;
}

.back {
  img {
    cursor: pointer;
  }
}
</style>
