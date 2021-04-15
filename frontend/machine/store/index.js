export const state = () => ({
  productlist: [],
  product: {},
  machineId: ""
});

export const mutations = {
  setProductList(state, payload) {
    state.productlist = payload;
  },
  setMachineId(state, payload) {
    state.machineId = payload;
  },
  setProduct(state, payload) {
    state.product = payload;
  }
};

export const actions = {
  fetchProductByMachine({ commit }, { machineId }) {
    commit("setMachineId", machineId);
    return this.$axios.get("/api/machine-products/" + machineId).then(res => {
      commit("setProductList", res.data);
    });
  },
  fetchProduct({ commit }, { machineId, productId }) {
    commit("setMachineId", machineId);
    console.log(machineId, productId);
    return this.$axios
      .get("/api/machine-products/" + machineId + "/" + productId)
      .then(res => {
        commit("setProduct", res.data);
      });
  }
};
