<template>
    <div class="flex-wrapper">
        <NavBar/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
    name: 'App',
    components: {
        NavBar,
        Footer
    }
}
</script>

<style>
    /*Global styles are applied here */ 

    html { 
        overflow-y: scroll; 
    }

    body{
        margin: 0px;
    } 

    .flex-wrapper {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
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
