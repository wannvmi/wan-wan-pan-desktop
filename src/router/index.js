import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import Layout from '@/layout'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/file-management',
    children: [
      {
        path: 'file-management',
        name: 'FileManagement',
        component: () => import('@/views/file-management')
      },
      {
        path: 'photo-album',
        name: 'PhotoAlbum',
        component: () => import('@/views/photo-album')
      },
      {
        path: 'favorites',
        name: 'Favorites',
        component: () => import('@/views/favorites')
      },
      {
        path: 'safe',
        name: 'Safe',
        component: () => import('@/views/safe')
      },
      {
        path: 'recycle-bin',
        name: 'RecycleBin',
        component: () => import('@/views/recycle-bin')
      },
      {
        path: 'transmission-list',
        name: 'TransmissionList',
        component: () => import('@/views/transmission-list')
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import('@/views/setting')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
