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
          <b-nav-item class="links" href="https://drive.google.com/drive/folders/1L01aRP06CmL2I64O0qN6EaOo2VE3Lnz9?usp=sharing">
            Minutes
          </b-nav-item>
          <b-nav-item class="links" href="https://drive.google.com/drive/folders/1dfu-v92gmrFWDcHVr-FvatKIjvfPo-Rt?usp=drive_link">
            Photos
          </b-nav-item>
          <b-nav-item class="links" href="https://hackathon.comssa.org.au/">
            <p class="hackathon">
              Hackathon
            </p>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-button style="width: fit-content;background-color: #5865F2;" href="https://discord.gg/EaSUQ4SrPb">
            <img class="mr-2" src="~/assets/img/icon/social/discord.svg" height="18px">Join our Discord
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
