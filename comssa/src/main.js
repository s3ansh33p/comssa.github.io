import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

import Home from './components/Home.vue'
import About from './components/About.vue'

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
