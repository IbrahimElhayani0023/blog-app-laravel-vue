import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/layout',
            redirect: '/',
            component: () => import('../pages/Layout.vue'),
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: () => import('../pages/HomeView.vue')
                },
                {
                    path: '/post',
                    name: 'post',
                    component: () => import('../pages/PostView.vue')
                }

            ]
        },
        // gess routes
        {
            path: '/login',
            name: 'login',
            component: () => import('../pages/LoginView.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../pages/RegisterView.vue')
        },


        // dashboard
        {
            path: '/dashboard',
            redirect: '/profile',
            component: () => import('../pages/dashboard/DashboardView.vue'),
            children: [
                {
                    path: '/profile',
                    name: 'profile',
                    component: () => import('../pages/dashboard/ProfileView.vue')
                }
            ]

        }
    ]
})

export default router