<template>
  <div class="my-3">
    <label>{{ label }}</label> <br />
    <input :type="type" :name="name" v-model="customInput" />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: ["type", "name", "label"],
  computed: {
    customInput: {
      get() {
        return this.$store.state.customer[this.name];
      },
      set(newValue) {
        console.log(newValue);
        this.$store.dispatch("updateCustomerProperty", {
          propName: this.name,
          value: newValue,
        });
      },
    },
  },
};
</script>

<style></style>
