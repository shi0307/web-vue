import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    routes: [
        { path: "/", redirect: "/login" },
        
        { path: "/login", component: () => import("@/components/login/login.vue")},

        { path: "/customer", component: () => import("@/components/customer/customer.vue")}
    ]
})

export default router;