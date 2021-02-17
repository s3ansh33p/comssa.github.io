<template>
  <div class="navbar">
    <b-navbar :class="scrolled ? 'shadow' : ''" toggleable="md" type="light" variant="light">
      <b-navbar-brand id="logo" to="/">
        <img id="logo" src="~/assets/img/branding/comssa.png">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-text-collapse" />

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="links" to="/about">
            About
          </b-nav-item>
          <b-nav-item class="links" to="/events">
            Events
          </b-nav-item>
          <b-nav-item class="links" to="/sponsors">
            Sponsors
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-button id="join_nav" to="/join">
            Join Now
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
    name: "NavBar",
    data () {
        return {
            scrolled: false
        }
    },

    beforeMount () {
        window.addEventListener("scroll", this.handleScroll)
    },

    beforeDestroy () {
        window.removeEventListener("scroll", this.handleScroll)
    },

    methods: {
        handleScroll () {
            this.scrolled = window.scrollY > 0
        }
    }
}
</script>
