<template>
  <div class="container">
    <div class="col-12 mt-2">
      <h1 class="text-grey text-center">Customer Details</h1>
    </div>
    <h3 class="text mt-5 text-center" v-if="$store.getters.loading">
      Loading...
    </h3>
    <div v-else class="table-responsive mt-4 col-6">
      <table class="table table-borderless">
        <tr>
          <th>Name</th>
          <td>{{ $store.state.customer.name }}</td>
        </tr>
        <tr>
          <th>Username</th>
          <td>{{ $store.state.customer.username }}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{{ $store.state.customer.email }}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>{{ $store.state.customer.phone }}</td>
        </tr>
        <tr>
          <th>Website</th>
          <td>{{ $store.state.customer.website }}</td>
        </tr>
        <tr>
          <th>Company Name</th>
          <td>{{ $store.state.customer.company.name }}</td>
        </tr>
        <tr>
          <th>Residence Street</th>
          <td>{{ $store.state.customer.address.street }}</td>
        </tr>
        <tr>
          <th>Residence City</th>
          <td>{{ $store.state.customer.address.city }}</td>
        </tr>
        <tr>
          <th>Residence Zip Code</th>
          <td>{{ $store.state.customer.address.zipcode }}</td>
        </tr>
      </table>
    </div>
    <button class="btn btn-warning" @click="goBack">Back</button>
  </div>
</template>

<script>
export default {
  name: "CustomerDetails",
  props: ["id"],
  mounted() {
    this.$store.dispatch("getCustomer", this.id);
  },
  methods: {
    goBack() {
      this.$router.push({ name: "customers-list" });
    },
  },
};
</script>

<style scoped>
tr {
  margin: 40px;
}
</style>
