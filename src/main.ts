import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import VueDragscroll from "vue-dragscroll";
import VueScrollTo from "vue-scrollto";
import './index.css'

const app = createApp(App)
    .use(router)
    .use(BootstrapIconsPlugin)
    .use(VueDragscroll);

app.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease-in-out",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});

app.mount('#app');


