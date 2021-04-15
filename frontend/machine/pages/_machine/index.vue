<template>
  <div class="container">
    <div class="drinking-list">
      <productCard
        v-for="product of products"
        :key="product.id"
        :productId="product.id"
        :machineId="$route.params.machine"
        :stock="product.stock"
        :image="product.image"
        :price="product.price"
        :goto="toToProduct"
      />
    </div>
  </div>
</template>

<script>
import productCard from "@/components/cards/ProductCard.vue";
export default {
  layout: "machine",
  components: {
    productCard
  },
  data() {
    return {};
  },
  async fetch() {
    const machineId = this.$route.params.machine;
    await this.$store.dispatch("fetchProductByMachine", { machineId });
  },
  computed: {
    products() {
      return this.$store.state.productlist;
    }
  },
  mounted() {
    // console logs the persisted state successfully
    // console.log(this.$store.state);
  },
  methods: {
    toToProduct(machineId, productId, isStock) {
      if (isStock) {
        this.$router.push(`/${machineId}/${productId}`);
      }
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
}
</style>
