import { createApp } from 'vue'

import { router } from './plugins/router.js'
import { store } from './plugins/state.js'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"

import { isMobile } from './helpers/platformDetector.js'

import App from './App.vue'
import './style.css'
import { useAppStore } from './stores/useAppStore.js'

// create app 
let app = createApp(App); 

// install vue-router 
app.use(router); 

// install pinia 
app.use(store); 

// install pinia-plugin-persistedstate 
store.use(piniaPluginPersistedState); 

// publish isMobile detector for debugging 
window.isMobile = isMobile;

// initialize stores 
useAppStore().init();

// display app store
function displayAppStore() {
    return JSON.parse(localStorage.getItem("app-store"));
}

window.displayAppStore = displayAppStore;

// mount app
app.mount("#app");
