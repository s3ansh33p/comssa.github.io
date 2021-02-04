<template>
    <div :class="scrolled ? 'shadow' : ''" class="navbar">
        <div class="items">
            <img id="logo" src="../assets/img/branding/comssa.png">

            <div class="hamburger" id="hamburger">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>

            <div class="links" id="links"> <!--when mobile toggle visible on hamburger click-->
                <ul class="menu">
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
import $ from 'jquery'

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
    },

    mounted () {
        $(".hamburger").click(function(){
            $(this).toggleClass("hamburger-active");

            $(".navbar .items .links").toggleClass("active");
        });
    }
}
</script>

<style scoped>
@import '../assets/css/navbar.css';
</style>