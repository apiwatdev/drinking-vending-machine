<template>
  <div class="container">
    <div class="content">
      <div class="machine-name">
        <h2>{{ machine.name }}</h2>
      </div>
      <div class="machine-location">
        <span>location </span>
        {{ machine.location }}
      </div>
      <div class="map">
        <GmapMap
          v-if="machine['map-location']"
          :center="machine['map-location']"
          :zoom="15"
          map-type-id="terrain"
          style="width: 100%; height: 100%"
        >
          <GmapMarker
            :position="machine['map-location']"
            :clickable="true"
            :draggable="false"
          />
        </GmapMap>
      </div>
      <div class="product">
        <div class="product-title">Products</div>
        <input
          v-model="search"
          class="search"
          type="text"
          placeholder="search"
        />
        <productCard
          v-for="product of products"
          :key="product.id"
          :product="product"
        />
        <!-- <div class="product-card">
          <div class="product-content">
            <div class="product-image">
              <div
                class="drink-image"
                :style="{ backgroundImage: `url(${image})` }"
              ></div>
            </div>
            <div class="product-detail">
              <div class="product-name">
                <input type="text" placeholder="name" />
              </div>
              <div class="product-description">
                <input type="text" placeholder="detail" />
              </div>
              <div class="price">
                <label for="">price</label>
                <input type="text" placeholder="100" />
              </div>
              <div class="stock">
                <label for="">stock</label>
                <input type="text" placeholder="100" />
              </div>
            </div>
          </div>
          <div class="action">
            <button class="btn btn-save">save</button>
          </div>
        </div> -->

        <!-- <div class="action">
          <button class=" btn-add-product">add product</button>
        </div> -->
      </div>
    </div>

    <!-- <div class="model-content">
      <div class="model add-item">
        <input type="text" />
        <button>add</button>
      </div>
    </div> -->
  </div>
</template>

<script>
import productCard from "@/components/cards/productCard";
export default {
  middleware: "auth",
  components: {
    productCard
  },
  data() {
    return {
      search: ""
    };
  },
  fetch() {
    const machineId = this.$route.params.machineId;
    this.$store.dispatch("fetchMachine", { machineId });
    this.$store.dispatch("fetchProducts", { machineId });
  },
  computed: {
    machine() {
      return this.$store.state.machine || {};
    },
    products() {
      const products = this.$store.state.products || [];

      return products.filter(product => {
        return product.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  mounted() {
    if (!this.$store.state.machine) {
      const machineId = this.$route.params.machineId;
      this.$store.dispatch("fetchMachine", { machineId });
      this.$store.dispatch("fetchProducts", { machineId });
    }
  },
  methods: {
    goToMachineDetail() {
      this.$router.push("/machines/aaaa");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}

.machine-health {
  .title {
  }
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.machine-health {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  .title {
    text-align: left;
    font-weight: 600;
    margin-bottom: 1rem;
  }
}

.content {
  text-align: left;
  padding: 2rem;
  width: 100%;

  .machine-location {
    margin: 0.75rem 0;
    display: flex;
    font-weight: 500;
    span {
      margin: 0 1rem 0 0;
    }
  }
  .map {
    border: 1px solid #ddd;
    height: 20rem;
    border-radius: 10px;
    margin: 0.25rem;
  }

  .product {
    margin-top: 1rem;
    .product-title {
      font-weight: 600;
    }

    .btn-add-product {
      width: 100%;
      outline: none;
      cursor: pointer;
      color: #fff;
      border: none;
      background-color: #fec987;
      font-family: "Prompt", Arial, sans-serif;
      font-size: 20px;
      box-shadow: 2px 5px 12px 0 rgb(0 0 0 / 20%);
      margin: 1rem auto;
      padding: 0.8rem 0;
      border-radius: 10px;
      font-weight: 700;
    }

    input.search {
      display: block;
      font-size: 18px;
      width: 100%;
      padding: 1rem;
      border: none;
      margin: 0.5rem 0;
      border-radius: 10px;
      text-decoration: none;
      outline: none;
      border: 1px solid #ecedf1;
    }
    .search::after {
      content: " * * * *";
      display: block;
      // background-image: url(~assets/icons/search.svg);
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
    }
  }
}
.model-content {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #00000038;
  justify-content: center;
  align-items: center;
  .model {
    width: 20rem;
    background-color: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 2px 5px 12px 0 rgb(0 0 0 / 20%);
    margin: auto;
  }
}
</style>
