<template>
    <div>
        <NavBar/>
        <About/>
        <router-view></router-view>

        <Footer/>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

import About from './components/About.vue'

export default {
    name: 'App',
    components: {
        NavBar,
        About,
        Footer
    }
}
</script>

<style>
    /*Global styles are applied here */ 

    body{
            margin:0px;
    } 

    h1 {
        font-family: 'Montserrat', sans-serif;
    }

    a {
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
    }

    button {
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
    }

    p {
        font-family: 'Roboto Mono', monospace;
    }

    ::-moz-selection { /* Code for Firefox */
        color: white;
        background: #4559A7;
    }

    ::selection {
        color: white;
        background: #4559A7;
    }
</style>
