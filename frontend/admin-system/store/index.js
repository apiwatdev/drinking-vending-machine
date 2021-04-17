export const state = () => ({
  machineList: [],
  machine: null,
  products: null,
});

export const mutations = {
  setMachineList(state, payload) {
    state.machineList = payload;
  },
  setMachine(state, payload) {
    state.machine = payload;
  },
  setProductList(state, payload) {
    state.products = payload;
  }
};

export const actions = {
  fetchMachines({ commit }) {
    return this.$axios.get("/api/machines").then(res => {
      commit("setMachineList", res.data);
    });
  },
  fetchMachine({ commit }, { machineId }) {
    return this.$axios.get("/api/machines/" + machineId).then(res => {
      commit("setMachine", res.data);
    });
  },
  fetchProducts({ commit }, { machineId }) {
    return this.$axios.get("/api/machine-products/" + machineId).then(res => {
      commit("setProductList", res.data);
    });
  }
};
