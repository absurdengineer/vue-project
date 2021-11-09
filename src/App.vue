<template>
  <transition-group name="fade">
    <div
      v-if="!this.$store.state.notification.closed"
      class="notification"
      :class="className"
    >
      <div class="message">{{ this.$store.state.notification.message }}</div>
      <div class="close">X</div>
    </div>
  </transition-group>
  <router-view />
  <button
    @click="
      $store.dispatch('notification', { message: 'Success', type: 'success' })
    "
  >
    Notify
  </button>
  <button @click="this.$helpers.toast()">Hellp</button>
</template>
<script>
export default {
  name: "App",
  computed: {
    className() {
      return "bg-success";
    },
  },
};
</script>
<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s linear;
}
.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
.notification {
  position: fixed;
  color: #eee;
  display: flex;
  padding: 10px 20px;
  top: 30px;
  right: 30px;
  width: 350px;
  border: 1px solid grey;
}
.message {
  flex: 1;
}
.close {
  flex: 0;
}
</style>
