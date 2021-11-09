<template>
  <div class="container-fluid" style="background-color: #45b27f; color: white">
    <div class="container py-3">
      <div class="row">
        <div class="col-2">
          <router-link class="d-inline mx-2 brand" :to="{ name: 'dashboard' }"
            >Project
          </router-link>
        </div>
        <div class="col-6">
          <router-link
            class="d-inline mx-2 custom-nav-link"
            :to="{ name: 'dashboard' }"
          >
            <i class="fas fa-home"></i> Dashboard
          </router-link>
          <router-link
            class="d-inline mx-2 custom-nav-link"
            :to="{ name: 'customers-list' }"
            ><i class="fas fa-users"></i> Customers
          </router-link>
          <router-link class="d-inline mx-2 custom-nav-link" to="/app/posts"
            ><i class="fas fa-address-card"></i> Posts
          </router-link>
        </div>
        <div class="col-2"></div>
        <div
          class="col-2"
          style="
             {
              cursor: 'pointer';
            }
          "
        >
          Logout <i class="fas fa-sign-out-alt"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomNavbar",
  data() {
    return {
      userMenu: false,
    };
  },
};
</script>

<style>
.brand {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 20px;
}
.brand:hover {
  text-decoration: none;
  color: white;
}
.custom-nav-link {
  text-decoration: none;
  color: white;
}
.custom-nav-link:hover {
  color: #00417e;
}
.custom-nav-link.active {
  color: #32475b;
}
</style>
