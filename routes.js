import { createWebHistory,createRouter } from "vue-router";
import About from '../portfolio/src/components/About.vue';
import Projects from '../portfolio/src/components/Projects.vue';
import Skills from '../portfolio/src/components/Skills.vue';
import Contact from '../portfolio/src/components/Contact.vue';

const routes = [
    {
        name:'About',
        path: 'About',
        component: About
    },
    {
        name:'Projects',
        path: 'Projects',
        component: Projects
    },
    {
        name:'Skills',
        path: 'Skills',
        component: Skills
    },
    {
        name:'Contact',
        path: 'Contact',
        component: Contact
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;