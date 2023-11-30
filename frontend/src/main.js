import { createApp } from 'vue'

import { router } from './plugins/router.js'
import { store } from './plugins/state.js'

import App from './App.vue'
import './style.css'

// create app 
let app = createApp(App); 

// install vue-router 
app.use(router); 

// install pinia 
app.use(store); 

// install pinia-plugin-persistedstate 
store.use(piniaPluginPersistedState); 

// initialize stores 
// --- [todo] ---

// mount app
app.mount("#app");
