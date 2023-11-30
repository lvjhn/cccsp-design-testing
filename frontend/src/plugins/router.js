import { createRouter, createWebHashHistory } from 'vue-router';

import IntroductionPage from '@/pages/IntroductionPage.vue';
import ConsentFormPage from '@/pages/ConsentFormPage.vue';
import ModeConfirmationPage from '@/pages/ModeConfirmationPage.vue';
import IssuesBasedTestingPage from '@/pages/IssuesBasedTestingPage.vue';

const routes = [
    { path: '/', component: IntroductionPage },
    { path: '/consent-form', component: ConsentFormPage }, 
    { path: '/mode-confirmation', component: ModeConfirmationPage }, 
    { path: '/issues-based-testing', component: IssuesBasedTestingPage }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export { router };
