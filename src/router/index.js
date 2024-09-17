import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import SignUp from '../components/SignUp.vue';
import ProfileComponent from '../components/ProfileComponent.vue';
import UploadPost from '../components/UploadPost.vue';
import store from '../store'

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home,
        meta:{requireAuth:true}
    },
    {
        path: '/login',
        name: "Login",
        component: Login
    },
    {
        path: '/signup',
        name: "Signup",
        component: SignUp
    },
    {
        path: '/profile',
        name: "Profile",
        component: ProfileComponent,
        meta:{requireAuth:true}
    },
    {
        path: '/uploadPost',
        name: "UploadPost",
        component: UploadPost,
        meta:{requireAuth:true}
    }
];




const router = createRouter({
    history: createWebHistory(),
    routes
});
    
router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters['auth/isLoggedIn'];
    console.log("Authentication status:", isAuthenticated);

    // If the route requires authentication and the user is not authenticated
    if (to.meta.requireAuth && !isAuthenticated) {
        next('/login'); // Redirect to login page
    }
    // If the route is login or signup and the user is already authenticated
    else if ((to.name === 'Login' || to.name === 'Signup') && isAuthenticated) {
        next('/'); // Redirect to home page or another route for authenticated users
    }
    // Proceed to the requested route
    else {
        next();
    }
});



export default router;
