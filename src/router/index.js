import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/app/Home.vue";
import Login from "../views/auth/Login.vue";
import NotFound from "../views/NotFound.vue";
import Signup from "../views/auth/Signup.vue";
import Application from "../views/app/Application.vue";
import Authentication from "../views/auth/Authentication.vue";
import CustomersList from "../views/app/customers/CustomersList.vue";
import CustomerUpdate from "../views/app/customers/CustomerUpdate.vue";
import CustomerDetails from "../views/app/customers/CustomerDetails.vue";

const routes = [
  {
    path: "/app",
    name: "app",
    component: Application,
    children: [
      {
        path: "",
        redirect: "/app/dashboard",
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: Home,
      },
      {
        path: "customers",
        name: "customers-list",
        component: CustomersList,
      },
      {
        path: "customers/:id",
        name: "customer-details",
        component: CustomerDetails,
        props: true,
      },
      {
        path: "customers/:id/update",
        name: "customer-update",
        component: CustomerUpdate,
        props: true,
      },
    ],
  },
  {
    path: "/auth",
    component: Authentication,
    children: [
      {
        path: "login",
        name: "login",
        component: Login,
      },
      {
        path: "signup",
        name: "signup",
        component: Signup,
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: NotFound,
  },
  {
    path: "/",
    redirect: "/app/dashboard",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
