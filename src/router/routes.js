
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Todo.vue') },
      { path: '/blog', component: () => import('pages/Blog.vue') },
      { path: '/movie', component: () => import('pages/Movie.vue') },
      { path: '/help', component: () => import('pages/Help.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
