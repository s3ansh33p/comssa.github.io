<template>
    <div class="flex-wrapper">
        <NavBar/>
            <router-view id="rv"></router-view>
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

    #rv {
        animation: fadein 0.3s;
    }

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Opera < 12.1 */
    @-o-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

</style>
