import { createApp } from 'vue'
// import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import router from './router';
//day1
// import App from '@/components/Huongdan/b1.vue';
//day 2
// import App from '@/components/Huongdan/b2.vue';
//day3
// import App from '@/components/Huongdan/b3.vue';
//day4
// import App from '@/components/Huongdan/b4.vue';
//day5
import App from '@/components/Huongdan/b5.vue';






createApp(App)
  .use(router)    
  .mount('#app');

