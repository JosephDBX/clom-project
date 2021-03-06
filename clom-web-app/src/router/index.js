import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: {
      name: "Home"
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/public/Home.vue')
  },
  {
    path: '*',
    name: "Error"
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;