// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";

import customIce from "custom-ice";


const app = createApp(App);



// import { MyCom1 } from "./components/customICE";
// import "mycom/dist/mycom.css";
 
app.use(customIce);



app.use(router);
app.mount("#app");