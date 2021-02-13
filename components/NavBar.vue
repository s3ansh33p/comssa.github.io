<template>
<!--
    <div class="navbar" :class="scrolled ? 'shadow' : ''">
        <div class="items">
            <NuxtLink to="/"><img id="logo" src="~/assets/img/branding/comssa.png"></NuxtLink>

            <div class="hamburger" id="hamburger">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>

            <div class="links" id="links"> when mobile toggle visible on hamburger click
                <ul class="menu">
                    <li><NuxtLink id="i1" to="/about">About</NuxtLink></li>
                    <li><NuxtLink id="i2" to="/events">Events</NuxtLink></li>
                    <li><NuxtLink id="i3" to="/sponsors">Sponsors</NuxtLink></li>
                    <li><button>Join Now</button></li>
                </ul>
            </div>
        </div>
    </div>
-->
<div class="navbar" >
  <b-navbar :class="scrolled ? 'shadow' : ''" toggleable="md" type="light" variant="light">
    <b-navbar-brand id="logo" to="/">
      <img id="logo" src="~/assets/img/branding/comssa.png"></img>
    </b-navbar-brand>

   <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="links" to="/about">About</b-nav-item>
        <b-nav-item class="links" to="/events">Events</b-nav-item>
        <b-nav-item class="links" to="/sponsors">Sponsors</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-button to="/join">Join Now</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'NavBar',
  data() {
    return {
      scrolled: false,
    }
  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0
    },
  },
}
</script>
