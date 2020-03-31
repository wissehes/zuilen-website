import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/inleiding",
        name: "De Inleiding",
        component: () =>
            import ("../views/Inleiding.vue")
    },
    {
        path: "/onderdelen/orientatie",
        name: "Oriëntatie Utrecht",
        component: () =>
            import ("../views/Orientatie.vue")
    },
    {
        path: "/onderdelen/de-wijk-in-kaart",
        name: "De wijk in kaart gebracht.",
        component: () =>
            import ("../views/DeWijkInKaart.vue")
    },
    {
        path: "/onderdelen/analyse-van-gegevens",
        name: "Analyse van de gegevens",
        component: () =>
            import ("../views/AnalyseVanGegevens.vue")
    },
    {
        path: "/onderdelen/probleem-en-oplossing",
        name: "Probleem keuze en oplossing",
        component: () =>
            import ("../views/DeProblemen.vue")
    },
    {
        path: "/conclusie",
        name: "De conclusie",
        component: () =>
            import ("../views/Conclusie.vue")
    }
];

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: "active",
    routes
});

export default router;