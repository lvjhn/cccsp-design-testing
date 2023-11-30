import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    // { path: '/', component: IntroductionPage } 
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export { router };
