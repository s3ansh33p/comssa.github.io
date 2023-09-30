<template>
  <b-container fluid>
    <h1 class="mt-3">
      Socials
    </h1>
    <b-row align-h="start" class="mt-5">
      <b-col md="6" xl="4" class="mb-3">
        <iframe
          id="discord_embed"
          src="https://discord.com/widget?id=673182254930984980&theme=dark"
          allowtransparency="true"
          frameborder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        />
      </b-col>
      <b-col md="6" xl="4" class="mb-3">
        <div
          class="fb-page"
          data-href="https://www.facebook.com/ComSSACurtin"
          data-tabs="timeline"
          data-width=""
          data-height="500"
          data-small-header="true"
          data-adapt-container-width="true"
          data-hide-cover="true"
          data-show-facepile="true"
        >
          Facebook timeline (may be blocked by your ad/tracker-blocker - fair enough)
          <blockquote
            cite="https://www.facebook.com/ComSSACurtin"
            class="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/ComSSACurtin" />
          </blockquote>
        </div>
      </b-col>
      <b-col md="6" xl="4" class="pl-xl-4">
        <div class="d-flex align-items-center mb-2">
          <img src="https://res.cloudinary.com/dec6mijn3/image/upload/v1695113798/ComSSA-Website/General/instagram.webp" alt="Instagram Logo" width="40" height="40" class="mr-2">
          <a href="https://www.instagram.com/comssacurtin/">
            ComSSACurtin
          </a>
        </div>
        <p> Check out our Instagram! </p>
        <div class="d-flex align-items-center mb-2 mt-5">
          <img src="https://res.cloudinary.com/dec6mijn3/image/upload/v1696060786/LinkedIn_icon_iwt4qk.svg" alt="Linkedin Logo" width="40" height="40" class="mr-2">
          <a href="https://www.linkedin.com/company/computer-science-students-association/">
            ComSSA Linkedin
          </a>
        </div>
        <p> Follow us on Linkedin! </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
    head: {
        title: "Socials"
    },

    mounted () { // Facebook embeds do not appear on component mount, for some reason the included script has to be reloaded
        this.$loadScript(
            "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v9.0"
        ).then(() => {
            this.$nextTick(() => {
                window.FB.XFBML.parse()
            })
        }).catch(() => {
        })
    }
}
</script>
