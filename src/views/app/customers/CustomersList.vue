<template>
  <div class="container">
    <div class="col-12 mt-2">
      <h1 class="text-grey text-center">Customers List</h1>
    </div>
    <h3 class="text mt-5 text-center" v-if="$store.getters.loading">
      Loading...
    </h3>
    <div v-else class="mt-4">
      <custom-table
        :data="$store.getters.allCustomers"
        :headers="['id', 'name', 'username', 'email', 'website']"
        :handleDelete="handleDelete"
      />
    </div>
  </div>
</template>

<script>
import CustomTable from "../../../components/CustomTable.vue";
import axios from "axios";

export default {
  name: "CustomersList",
  components: {
    CustomTable,
  },
  mounted() {
    this.$store.dispatch("getCutomers");
  },
  methods: {
    async handleDelete(id) {
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      console.log(res);
    },
  },
};
</script>

<style></style>
