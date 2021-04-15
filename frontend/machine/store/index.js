export const state = () => ({
  productlist: [],
  product: null,
  machineId: "",
  order: {
    machineId: null,
    productId: null,
    qty: 0,
    total: 0
  }
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
  },
  setOrderQty(state, payload) {
    console.log(payload);
    state.order.qty = payload;
  },
  setOrderTotal(state, payload) {
    state.order.total = payload;
  },
  setOrder(state, payload) {
    state.order = payload;
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
  },
  setOrder({ commit }, { order }) {
    commit("setOrder", order);
  },
  setOrderQty({ commit }, { qty }) {
    commit("setOrderQty", qty);
  },
  setOrderTotal({ commit }, { total }) {
    commit("setOrderTotal", total);
  }
};
