import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LoadScript from 'vue-plugin-load-script';

Vue.config.productionTip = false

import Home from './components/Home.vue'
import About from './components/About.vue'
import Events from './components/Events.vue'
import Sponsors from './components/Sponsors.vue'

import Minutes from './components/Minutes.vue'

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/events',
        component: Events
    },
    {
        path: '/sponsors',
        component: Sponsors
    },
    {
        path: '/minutes',
        component: Minutes
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

Vue.use(VueRouter)
Vue.use(LoadScript);

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
