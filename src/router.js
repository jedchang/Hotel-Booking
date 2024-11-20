import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',  // 部署 GitHub Pages 禁用 history mode
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/room/:id', // 後面是房間 id
      name: 'room',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Room.vue')
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: () => import('./views/Reservation.vue')
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('./views/Success.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
