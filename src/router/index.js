import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '../views/AppHome.vue';
import AppBlog from '../views/AppBlog.vue';
import AppPost from '../views/AppPost.vue';

const routes = [
  { path: '/', component: AppHome },
  { path: '/press-releases', component: AppBlog },
  { path: '/press-releases/:slug', name: 'post', component: AppPost, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;