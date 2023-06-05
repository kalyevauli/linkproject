import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.min"
import App from './App.vue'
import Swiper, { Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// init Swiper:
const swiper = new Swiper(".swiper", {
    // configure Swiper to use modules
    modules: [Pagination],
});

createApp(App).mount('#app')
