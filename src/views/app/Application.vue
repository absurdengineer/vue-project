<template>
  <custom-navbar />
  <router-view></router-view>
</template>

<script>
import CustomNavbar from "../../components/CustomNavbar.vue";
export default {
  name: "Application",
  components: {
    CustomNavbar,
  },
};
</script>

<style></style>
