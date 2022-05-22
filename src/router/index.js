import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import languages from '@/languages'

import LandingLayout from '@/layouts/LandingLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const checkLanguage = () => {
	return new Promise(resolve => {
		if(!store.state.selectedLanguage) {
            if(window.localStorage.getItem('lang')) store.state.selectedLanguage = window.localStorage.getItem('lang')
            else store.state.selectedLanguage = 'TR'
        }
        store.state.language = languages[store.state.selectedLanguage]; // (store.state.selectedLanguage.code).toUpperCase()
        resolve(true)
	});
}


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: { layout: LandingLayout }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
        meta: { layout: AuthLayout }
    },
    {
		path: "/:catchAll(.*)",
		name: '404',
		component: () => import("@/views/404.vue")
	}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach(async (to, from, next) => {
    await checkLanguage()
    next()
})

export default router
