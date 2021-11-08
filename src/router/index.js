import { createRouter, createWebHistory } from "vue-router";
import Application from "../views/app/Application.vue";
import Home from "../views/app/Home.vue";
import CustomerList from "../views/app/customers/CustomerList.vue";
import CustomerDetails from "../views/app/customers/CustomerDetails.vue";
import Authentication from "../views/auth/Authentication.vue";
import Signup from "../views/auth/Signup.vue";
import Login from "../views/auth/Login.vue";

const routes = [
  {
    path: "/app",
    component: Application,
    children: [
      {
        path: "",
        redirect: "/app/dashboard",
      },
      {
        path: "dashboard",
        component: Home,
      },
      {
        path: "customers",
        component: CustomerList,
      },
      {
        path: "customers/:id",
        component: CustomerDetails,
      },
    ],
  },
  {
    path: "/auth",
    component: Authentication,
    children: [
      {
        path: "login",
        component: Login,
      },
      {
        path: "signup",
        component: Signup,
      },
    ],
  },
  {
    path: "/",
    redirect: "/app/dashboard",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
