<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-2">
        <h1 class="text-grey text-center">Customer Update</h1>
      </div>
      <h3 class="text mt-5 text-center" v-if="$store.getters.loading">
        Loading...
      </h3>
      <template v-else>
        <div class="col-4 py-2">
          <custom-input name="name" label="Name" />
          <custom-input name="email" label="Email" type="email" />
          <custom-input name="username" label="Username" />
          <custom-input name="phone" label="Phone" />
          <custom-input name="website" label="Website" />
        </div>
        <div class="col-4 py-2"></div>
        <div class="col-4 py-2"></div>
        <div class="col-12 buttons">
          <button
            class="btn btn-warning"
            @click="$router.push({ name: 'customers-list' })"
          >
            Back
          </button>
          <button class="btn btn-success m-2">Save</button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import CustomInput from "../../../components/CustomInput.vue";

export default {
  name: "CustomerUpdate",
  props: ["id"],
  mounted() {
    this.$store.dispatch("getCustomer", this.id);
  },
  components: {
    CustomInput,
  },
};
</script>

<style></style>
