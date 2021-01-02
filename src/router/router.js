import {createWebHistory, createRouter} from "vue-router";
import vMain from '@/components/v-main'
import vAbout from '@/components/v-about'


const routes = [
    {
        path: "/about",
        name: "about",
        component: vAbout,
    },
    {
        path: "/",
        name: "main",
        component: vMain
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;