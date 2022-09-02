import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import VueDragscroll from "vue-dragscroll";
import './index.css'

createApp(App)
    .use(router)
    .use(BootstrapIconsPlugin)
    .use(VueDragscroll)
    .mount('#app');


