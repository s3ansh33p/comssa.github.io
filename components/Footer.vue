<template>
  <footer class="footer">
    <div class="content">
      <b-row>
        <b-col class="my-5" sm="12" lg="4">
          <h1>
            Computer Science <br>Students Association<br>
            <span id="acronym">(ComSSA)</span>
          </h1>
          <p>
            Department of Computing<br>
            Building 314 <br><br>

            <a href="https://goo.gl/maps/pBoBbVnBFhNyHnnz9" target="_blank">
              Curtin University<br>
              Kent Street <br>
              Bentley WA 6102<br>
            </a>
          </p>
        </b-col>
        <b-col class="my-5" sm="12" lg="4">
          <div id="social-icons">
            <a href="https://www.facebook.com/ComSSACurtin" target="_blank">
              <fa id="social-icons" :icon="faFacebook" style="color: #3b5998" />
            </a>
            <a href="https://www.linkedin.com/company/computer-science-students-association" target="_blank">
              <fa id="social-icons" :icon="faLinkedin" style="color: #0077b5" />
            </a>

            <a href="https://github.com/ComSSA" target="_blank">
              <fa id="social-icons" :icon="faGithub" style="color: #333" />
            </a>
            <a href="https://discord.gg/SuwfFfjYJB" target="_blank">
              <fa id="social-icons" :icon="faDiscord" style="color: #7289DA; transform: translateY(2px)" />
            </a>
            <a href="https://www.instagram.com/comssacurtin/" target="_blank">
              <img src="https://res.cloudinary.com/dec6mijn3/image/upload/v1695113798/ComSSA-Website/General/instagram.webp" alt="Instagram Logo" style="width: 25.25px; margin-bottom: 6px">
            </a>
          </div>

          <a href="https://www.guild.curtin.edu.au/" target="_blank"><img id="guild_logo" src="~/assets/img/branding/guild.png"></a>
        </b-col>
        <b-col class="my-5" sm="12" lg="4">
          <h1>Enquiries</h1>
          <a href="mailto:help@comssa.org.au"><p>help@comssa.org.au</p></a>

          <p id="accreditation">
            © ComSSA {{ new Date().getFullYear() }}
            <br>
            <a href="https://github.com/ComSSA/comssa.github.io/" target="_blank">Source Code</a>

            <br>
            Design by <a href="https://kevinle.com.au/" target="_blank">Kevin Le</a>
          </p>
        </b-col>
      </b-row>
    </div>
  </footer>
</template>

<script>
import {
    faLinkedin,
    faGithubSquare,
    faFacebookSquare,
    faDiscord
} from "@fortawesome/free-brands-svg-icons"

export default {
    name: "Footer",
    computed: {
        faLinkedin () {
            return faLinkedin
        },

        faFacebook () {
            return faFacebookSquare
        },

        faGithub () {
            return faGithubSquare
        },

        faDiscord () {
            return faDiscord
        }
    }
}
</script>
