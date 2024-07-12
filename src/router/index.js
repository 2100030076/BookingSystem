import { createRouter, createWebHistory } from "vue-router";


import HomeView from "../views/HomeView.vue";
import CustomerView from "../views/CustomerView.vue";
import ProductView from "../views/ProductView.vue";
import PriceView from "../views/PriceView.vue";
import ContactView from "../views/ContactView.vue";
import DemoView from "../views/DemoView.vue";
import FeatureView from "../views/FeatureView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/customer", component: CustomerView },
  { path: "/product", component: ProductView },
  { path: "/price", component: PriceView },
  { path: "/contact", component: ContactView },
  { path: "/demo", component: DemoView },
  { path: "/feature", component: FeatureView },
  


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
