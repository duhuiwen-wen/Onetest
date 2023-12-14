import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name:"HelloWorld",
      component: () => import('@/components/HelloWorld.vue'),
    },
    // {
    //   path: '/webview',
    //   name:'webview',
    //   component: () => import('@/components/WebView.vue'),
    // },
    // {
    //   path: '/success',
    //   name:'success',
    //   component: () => import('@/components/success.vue'),
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'NotFound',
    //   component: NotFound,
    // },
  ],
})

export default router
