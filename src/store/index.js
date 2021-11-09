import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    name: "",
    customers: [],
    isLoading: true,
    customer: {},
    notification: {
      message: "",
      type: "success",
      closed: true,
    },
  },
  mutations: {
    getCustomers(state, customers) {
      state.customers = customers;
    },
    getCustomer(state, customer) {
      state.customer = customer;
    },
    loading(state) {
      state.isLoading = true;
    },
    loadingCompleted(state) {
      state.isLoading = false;
    },
    updateCustomerProperty(state, { propName, value }) {
      state.customer[propName] = value;
    },
    notification(state, { message, type = "success" }) {
      state.notification.message = message;
      state.notification.type = type;
      state.notification.closed = false;
      setTimeout(() => {
        state.notification.closed = true;
      }, 5000);
    },
  },
  actions: {
    async getCutomers({ commit }) {
      commit("loading");
      const { data: customers } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      commit("getCustomers", customers);
      commit("loadingCompleted");
    },
    async getCustomer({ commit }, id) {
      commit("loading");
      const { data: customer } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      commit("getCustomer", customer);
      commit("loadingCompleted");
    },
    updateCustomerProperty({ commit }, data) {
      commit("updateCustomerProperty", data);
    },
    notification({ commit }, data) {
      commit("notification", data);
    },
  },
  modules: {},
  getters: {
    allCustomers: (state) => state.customers,
    customer: (state) => state.customer,
    loading: (state) => state.isLoading,
  },
});
