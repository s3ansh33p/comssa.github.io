<template>
  <div class="navbar">
    <b-navbar :class="scrolled ? 'shadow' : ''" toggleable="md">
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
          <b-nav-item class="links" to="/socials">
            Socials
          </b-nav-item>
          <b-nav-item class="links" to="/sponsors">
            Sponsors
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-button style="width: fit-content;background-color: #7289da;" href="https://discord.gg/xYk4VzxGE8">
            <img class="mr-2" src="https://discord.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg" height="25px">Join our Discord
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
