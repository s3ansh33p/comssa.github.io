<template>
    <div class="flex-wrapper">
        <NavBar/>
        <Nuxt/>
        <Footer/>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'App',
    components: {
        NavBar,
        Footer
    },
}
</script>
