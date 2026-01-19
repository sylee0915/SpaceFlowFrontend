import { createRouter, createWebHistory } from 'vue-router';
import OnboardingMain from '@/views/onboarding/OnboardingMain.vue';

const routes = [
    {
        path: '/',
        name: 'onboarding',
        component: OnboardingMain
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;