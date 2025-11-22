import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Huongdan/b4.vue'; // tramg home
import ListVue from '@/components/products/listVue.vue'; //dssp
import Create from '@/components/products/create.vue'; // them
import Update from '@/components/products/update.vue';//sua
import Day5 from '@/components/Huongdan/b5.vue'; // validate


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
    },
    {
      path : '/day5',
      name : 'day5',
      component : Day5
    }
  ],
})

export default router
