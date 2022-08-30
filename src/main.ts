import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import VueDragscroll from "vue-dragscroll";


createApp(App)
    .use(router)
    .use(BootstrapIconsPlugin)
    .use(VueDragscroll)
    .mount('#app');
