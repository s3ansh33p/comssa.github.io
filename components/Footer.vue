<template>
    <div class="footer">
        <div class="content">

            <div class="col1">
                <h1>ComSSA</h1>
                    <p>
                        Department of Computing<br/>
                        Building 314 <br><br/>

                    <a href="https://goo.gl/maps/pBoBbVnBFhNyHnnz9" target="_blank">
                        Curtin University<br/>
                        Kent Street <br/>
                        Bentley WA 6102<br/>
                    </a>
                </p>
            </div>

            <div class="right">
                <div id="col2">
                    <h1>Social</h1>

                    <div id="social_icons">
                        <a href="https://www.facebook.com/ComSSACurtin" target="_blank">
                            <fa id="social_icons" :icon="faFacebook" style="color: #3b5998"></fa>
                        </a>
                        <a href="https://www.linkedin.com/company/computer-science-students-association" target="_blank">
                            <fa id="social_icons" :icon="faLinkedin" style="color: #0077b5"></fa>
                        </a>

                        <a href="https://github.com/ComSSA" target="_blank">
                            <fa id="social_icons" :icon="faGithub" style="color: #333"></fa>
                        </a>
                        <!--
                            translate because discord icon has a weird extension to it, colors are brand colors, making css
                            rules is insane for single use
                         -->
                        <a href="https://discord.gg/SuwfFfjYJB" target="_blank">
                            <fa id="social_icons" :icon="faDiscord" style="color: #7289DA; transform: translateY(2px)"></fa>
                        </a>
                    </div>

                    <a href="https://www.guild.curtin.edu.au/" target="_blank"><img id="guild_logo" src="~/assets/img/branding/guild.png"/></a>
                </div>
            </div>

                <div id="col3">
                    <h1>Contact</h1>
                    <a href="mailto:contact@comssa.org.au"><p>contact@comssa.org.au</p></a>

                    <p id="accreditation">© ComSSA {{ new Date().getFullYear() }}<br/> Design by <a href="https://kevinle.com.au/" target="_blank">Kevin Le</a></p>
                </div>
        </div>
    </div>
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
        faLinkedin() {
            return faLinkedin
        },

        faFacebook() {
            return faFacebookSquare
        },

        faGithub() {
            return faGithubSquare
        },

        faDiscord() {
            return faDiscord
        }
    }
}
</script>
