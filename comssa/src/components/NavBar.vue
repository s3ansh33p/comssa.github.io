<template>
    <div :class="scrolled ? 'shadow' : ''" class="navbar">
        <div class="items">
            <NuxtLink to="/"><img id="logo" src="~/assets/img/branding/comssa.png"></NuxtLink>

            <div class="hamburger" id="hamburger">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>

            <div class="links" id="links"> <!--when mobile toggle visible on hamburger click-->
                <ul class="menu">
                    <li><NuxtLink id="i1" to="/about">About</NuxtLink></li>
                    <li><NuxtLink id="i2" to="/events">Events</NuxtLink></li>
                    <li><NuxtLink id="i3" to="/sponsors">Sponsors</NuxtLink></li>
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
        if(process.client) {
            window.addEventListener('scroll', this.handleScroll);
        }
    },
    destroyed () {
        if(process.client) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    },
    mounted () {
        $(".hamburger").click(function(){
            $(this).toggleClass("hamburger-active");
            $(".navbar .items .links").toggleClass("active");
        });

        $(".links .menu").click(function(){ //Hide menu on item select in hamburger menu
            if($(".hamburger").hasClass("hamburger-active")) {
                $(".hamburger").toggleClass("hamburger-active");
                $(".navbar .items .links").toggleClass("active");
            }
        });
    }
}
</script>

<style scoped>
@import '~/assets/css/navbar.css';
</style>
