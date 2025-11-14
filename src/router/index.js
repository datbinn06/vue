import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Huongdan/b4.vue';
import ListVue from '@/components/products/listVue.vue';
import Create from '@/components/products/create.vue';
import Update from '@/components/products/update.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component: Home
    },
    {
      path : '/list-products',
      name : 'list-products',
      component : ListVue
    },
    {
      path : '/create-products',
      name : 'create-products',
      component : Create
    },
    {
      path : '/update-products',
      name : 'update-products',
      component : Update
    }
  ],
})

export default router
