import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: `/hellWord`,
    name: 'hellWord',
    component: () => import('../components/HelloWorld.vue'),
  },
  {
    path: `/upload`,
    name: 'upload',
    component: () => import('../views/upload/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;