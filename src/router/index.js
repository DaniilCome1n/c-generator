import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main-layout',
    component: () => import('../views/main-layout.vue'),
  },
  {
    path: '/create-layout',
    name: 'create-layout',
    component: () => import('../views/create-layout.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
