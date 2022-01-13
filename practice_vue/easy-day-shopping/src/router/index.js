import Vue from "vue";
import VueRouter from "vue-router";
import Inventory from "../views/Inventory.vue";
import Item from "../views/ItemDeatils.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inventory",
    component: Inventory,
  },
  {
    path: "/item/:id",
    name: "Item",
    component: Item,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
