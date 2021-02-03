<template>
    <div :class="scrolled ? 'shadow' : ''" class="navbar">
        <div id="items">
            <img id="logo" src="../assets/img/comssa.png">

            <div class="links" id="links">
                <ul>
                    <li><a id="i1" href="#">About</a></li>
                    <li><a id="i2" href="#">Events</a></li>
                    <li><a id="i3" href="#">Sponsors</a></li>
                    <li><button>Join Now</button></li>
                </ul> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
        return {
            scrolled: false
        }
    },
    methods: {
        handleScroll () {
            this.scrolled = window.scrollY > 0;
        }
    },

    created () {
        window.addEventListener('scroll', this.handleScroll);
    },

    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped>
@import '../assets/css/navbar.css';
</style>