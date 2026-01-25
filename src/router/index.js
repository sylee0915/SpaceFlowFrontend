import { createRouter, createWebHistory } from 'vue-router';
import OnboardingMain from '@/views/onboarding/OnboardingMain.vue';
import Display from '@/views/display/RoomDisplay.vue';
import RoomSelection from "@/views/display/RoomSelection.vue";
import RoomCalendar from "@/views/display/RoomCalendar.vue";

const routes = [
    {
        path: '/',
        name: 'onboarding',
        component: OnboardingMain
    },
    {
        path: '/display',
        name: 'display',
        component: Display,
    },
    {
        path: '/display2',
        name: 'display2',
        component: RoomSelection,
    },
    {
        path: '/display3',
        name: 'display3',
        component: RoomCalendar,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;